// state
let currCity = "Lagos"
let units = "metric"

// get html elements using selectors
let city = document.querySelector(".city");

let datetime = document.querySelector(".datetime");

let forecast = document.querySelector(".forecast");

let icon = document.querySelector(".icon");

let weather = document.querySelector(".weather");

let min = document.querySelector(".min");

let max = document.querySelector(".max");

let feels = document.querySelector(".feels");

let wind = document.querySelector(".wind");

let humidity = document.querySelector(".humidity");

let pressure = document.querySelector(".pressure");

let sunrise = document.querySelector(".sunrise");

let sunset = document.querySelector(".sunset");

// search input
document.querySelector(".weather_search").addEventListener("submit", e => {
  let search = document.querySelector(".searchform");

  // Prevent default reload
  e.preventDefault();

  // Change current city to search value
  currCity = search.value;

  // Get weather forecast
  getWeather();

  // clear form
  search.value = ""
});

// Units
document.querySelector(".celsius").addEventListener("click", () => {
  if(units !== "metric"){
    // change to metric
    units = "metric"
    // get weather info
    getWeather()
  }
})

document.querySelector(".farenheit").addEventListener("click", () => {
  if(units !== "imperial"){
    // change to metric
    units = "imperial"
    // get weather info
    getWeather()
  }
})


// convert timestamp to date and time
function convertTimeStamp(timestamp, timezone) {
  const convertTimezone = timezone / 3600; //convert seconds to hours

  const date = new Date(timestamp * 1000);

  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

// convert country code to name
// function convertCountryCode(country){
//   let regionNames = new Intl.DisplayNames(["en"],{type:"region"});
//   return regionNames.of(country)
// }

// convert timestamp to time
function convertTimeToHours(timestamp, timezone) {
  const convertTimezone = timezone / 3600; // convert seconds to hours
  const date = new Date(timestamp * 1000);
  const options = {
    hour: "numeric",
    minute: "numeric",
    timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}


function getWeather(){
  const API_KEY = `${key}`

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(res => res.json()).then(data => {
    console.log(data)
    city.innerHTML = `${data.name}, ${data.sys.country}`;

    datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);

    forecast.innerHTML = `${data.weather[0].main}`;

    icon.innerHTML = ` <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />`;

    weather.innerHTML = `${data.main.temp.toFixed()}°`;

    min.innerHTML = `Low: ${data.main.temp_min.toFixed()}°`;
    
    max.innerHTML = `High: ${data.main.temp_max.toFixed()}°`;

    feels.innerHTML = `${data.main.feels_like.toFixed()}°`;
    
    wind.innerHTML = `${data.wind.speed} ${units === "imperial" ? "mPh" : "m/s"}`;
    
    humidity.innerHTML = `${data.main.humidity} %`;
    
    pressure.innerHTML = `${data.main.pressure} hPa`;
    
    sunrise.innerHTML = convertTimeToHours(data.sys.sunrise, data.timezone);
    
    sunset.innerHTML = convertTimeToHours(data.sys.sunset, data.timezone);

  })
}


document.body.addEventListener("load", getWeather());
