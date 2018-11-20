import { combineReducers } from 'redux';

import flyGif from "../reducers/flyGif";

let combinedReducer=combineReducers({
    flyGif,
});

export default combinedReducer;
