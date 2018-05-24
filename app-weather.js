const yargs = require('yargs');
const axios = require('axios');


const argv = yargs.options({
    a: {
        demand: false,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help()
.alias('help', 'h')
.argv;


var defaultAddress = "new york";
var input = encodeURIComponent(argv.address || defaultAddress);


var geocodeUrl =  `https://maps.googleapis.com/maps/api/geocode/json?address=${input}`;

setTimeout(()=>{
axios.get(geocodeUrl).then((response)=>{
    if (response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/7813524c1396e4f193a6403826cb5aad/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var precipProb = response.data.currently.precipProbability;
    if (precipProb===0){
        precipProb = "Don't worry! It's not raining anytime soon";
    }
    else{
        precipProb = "Brace yourself for a rainy day";
    }
    var wearWhat = '';
    if (apparentTemperature > 70){
        wearWhat = "It's nice outside! Wear something light and summer-y :)"
    }
    else if (apparentTemperature>60 && apparentTemperature<70){
        wearWhat = "Look classy ;) It's pleasant outside"
    }
    else {
        wearWhat = "Wear a jacket duuuude!"
    }
    console.log(` It's currently ${temperature}. It feels like ${apparentTemperature}\n ${precipProb} \n ${wearWhat}`)
}).catch((e)=>{
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to connect to Google Servers');
    }
    else {
        console.log(e.message);
    }
});}, 6000);

console.log('Loading weather info...');

