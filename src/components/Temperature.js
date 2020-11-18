function normalizeTemperature (temperature) {
    const rounded = Math.round(temperature);
    return rounded > 0 ? `+${rounded}` : `${rounded}`;
}


function Temperature ({ temperature, feelsLike }) {
    return (
        <div>
            <h1>{normalizeTemperature(temperature)} &deg;C</h1>
            <p className="feels-like">Feels like {normalizeTemperature(feelsLike)} &deg;C</p>
        </div>
    );
}

export default Temperature;
