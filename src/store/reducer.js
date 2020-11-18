const initialState = {
    location: "London",
    weather: null,
    weatherLoading: false,
    weatherError: null,
};

const reducer = (state = initialState, action) => {
    if (action.type === "UPDATE_WEATHER") {
        return {
            ...state,
            weather: action.weather,
            weatherLoading: false,
        };
    }

    if (action.type === "CHANGE_LOCATION") {
        return {
            ...state,
            location: action.location,
            weatherLoading: true,
            weatherError: null,
        };
    }

    if (action.type === "WEATHER_ERROR") {
        return {
            ...state,
            weatherLoading: false,
            weatherError: action.error,
        };
    }

    return state;
};

export default reducer;

// const store = createStore(rootReducer);
