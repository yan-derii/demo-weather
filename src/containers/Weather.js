import { connect } from "react-redux";
import Temperature from "../components/Temperature";
import Condition from "../components/Condition";

function Weather ({ weather, loading, error }) {
    if (loading) {
        return (
            <div className="current-weather">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error || !weather) {
        return (
            <div className="current-weather">
                <h2>Cannot retrieve data from the server</h2>
            </div>
        );
    }

    return (
        <div className="current-weather">
            <Temperature temperature={weather.temperature} feelsLike={weather.feelsLike}/>
            <Condition description={weather.description} icon={weather.icon}/>
        </div>
    );
}

const mapStateToProps = state => ({
    weather: state.weather,
    loading: state.weatherLoading,
    error: state.weatherError,
});

export default connect(mapStateToProps)(Weather);
