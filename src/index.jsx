import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import SpotifyApi from "./components/SpotifyApi/SpotifyApi";

const rootElement = document.getElementById('root')

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}


reportWebVitals();
