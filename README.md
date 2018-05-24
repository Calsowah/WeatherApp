# WeatherApp
A node shell-run app that implements web-scraping with axios' promise chaining functionality on two APIs (Google Maps API and forecast.io API) to provide information about the temperature, apparent temperature, and a general suggestion on the type of clothing to wear based on the weather. The default location is New York.

### Example 1 (Using the default location)
$node app-weather.js <br />
Loading weather info... <br />
New York, NY, USA <br />
 It's currently 64.57. It feels like 67.91<br />
 Don't worry! It's not raining anytime soon<br />
 Look classy ;) It's pleasant outside<br />



## Supplying your own arguments
### Example 2a (General Area (ie. country, state, etc)):
$node app-weather.js -a "iceland" <br />
Loading weather info... <br />
Iceland <br />
 It's currently 34.49. It feels like 27.19<br />
 Brace yourself for a rainy day<br />
 Wear a jacket duuuude!<br />

## Example 2b (More specific location):
$node app-weather.js -a "1301 lombard street philadelphia" <br />
Loading weather info... <br />
1301 Lombard St, Philadelphia, PA 19147, USA <br />
 It's currently 81.94. It feels like 81.94<br />
 Don't worry! It's not raining anytime soon<br />
 It's nice outside! Wear something light and summer-y :)<br />


