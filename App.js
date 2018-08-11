"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import MainPage from './core/MainPage';
import {createStore} from "redux";
import combinedReducer from "./core/reducers";

let store=createStore(combinedReducer);

ReactDOM.render(
    <Provider store={store}>
        <MainPage />
    </Provider>

  , document.getElementById('container') 
);
