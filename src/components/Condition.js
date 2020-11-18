function combineIconUrl (icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

function Condition ({ description, icon }) {
    return (
        <div className="condition">
            <h3>{description}</h3>
            <img src={combineIconUrl(icon)} alt="Weather icon" height="50" width="50"/>
        </div>
    );
}

export default Condition;
