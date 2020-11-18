import Weather from "./Weather";
import { connect } from "react-redux";
import { useEffect } from "react";
import requestWeather from "../services/weather";
import Location from "./Location";

function WeatherWidget ({ location, onWeatherChange, onWeatherError }) {
    useEffect(() => {
        requestWeather(location).then(onWeatherChange).catch(onWeatherError);
    }, [location, onWeatherChange, onWeatherError]);

    return (
        <div className="container">
            <Location/>
            <Weather/>
        </div>
    );
}

const mapStateToProps = state => ({
    location: state.location,
});

const mapDispatchToProps = dispatch => ({
    onLocationChange: (location) => dispatch({ type: "CHANGE_LOCATION", location }),
    onWeatherChange: (weather) => dispatch({ type: "UPDATE_WEATHER", weather }),
    onWeatherError: (error) => dispatch({ type: "WEATHER_ERROR", error }),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
