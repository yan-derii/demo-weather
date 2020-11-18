function CurrentLocation ({ location = "", onChangeLocation }) {
    return (
        <div className="current-location">
            <div><b>{location}</b></div>
            <div className="space"/>
            <div
                onClick={onChangeLocation}
                className="secondary-action"
                title="Change location"
            >
                <span>Change</span>
            </div>
        </div>
    );
}

export default CurrentLocation;
