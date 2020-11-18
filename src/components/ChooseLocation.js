import { useState } from "react";

function ChooseLocation ({ onUpdateLocation, onCancelUpdate }) {
    const [locationInput, setLocationInput] = useState("");

    function onChangeHandler (event) {
        return setLocationInput(event.target.value);
    }

    function isInputValid () {
        return locationInput.trim().length > 0;
    }

    function onClickHandler () {
        onUpdateLocation(locationInput);
    }

    function onKeyHandler (event) {
        if (event.key === "Enter" && isInputValid()) {
            onUpdateLocation(locationInput);
        }
    }

    return (
        <div className="choose-location">
            <div className="space">
                <input
                    type="text"
                    placeholder="Type city name (e.g. London, UK)"
                    onChange={onChangeHandler}
                    onKeyPress={onKeyHandler}
                    value={locationInput}
                />
            </div>
            <div>
                <button
                    title="Change location"
                    onClick={onClickHandler}
                    disabled={!isInputValid()}
                >
                    Update
                </button>
            </div>
            <div className="secondary-action" onClick={onCancelUpdate}><span>or cancel</span></div>
        </div>
    );
}

export default ChooseLocation;
