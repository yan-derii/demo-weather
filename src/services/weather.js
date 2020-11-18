const weatherLens = (serverData) => ({
    temperature: serverData["main"]["temp"],
    feelsLike: serverData["main"]["feels_like"],
    description: serverData["weather"][0]["description"],
    icon: serverData["weather"][0]["icon"],
});

const APPID = process.env.REACT_APP_OPENWEATHRMAPKEY;

const URL = city => `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${APPID}&units=metric`;

function requestWeather (location) {
    return fetch(URL(location)).then(
        res => res.json()
    ).then(
        weatherLens
    ).catch(console.error);

}

export default requestWeather;
