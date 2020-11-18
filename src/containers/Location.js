import { useState } from "react";
import ChooseLocation from "../components/ChooseLocation";
import CurrentLocation from "../components/CurrentLocation";
import { connect } from "react-redux";

function Location ({ location, onLocationChange }) {
    const [shouldChooseLocation, chooseLocation] = useState(false);

    function toggleLocationChange () {
        return chooseLocation(!shouldChooseLocation);
    }

    function onUpdateLocation (location) {
        toggleLocationChange();
        onLocationChange(location);
    }

    return (shouldChooseLocation) ? (
        <ChooseLocation onUpdateLocation={onUpdateLocation} onCancelUpdate={toggleLocationChange}/>
    ) : (
        <CurrentLocation onChangeLocation={toggleLocationChange} location={location}/>
    );
}

const mapStateToProps = state => ({
    location: state.location
});

const mapDispatchToProps = dispatch => ({
    onLocationChange: location => dispatch({ type: "CHANGE_LOCATION", location })
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
