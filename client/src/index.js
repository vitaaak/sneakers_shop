import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import "./scss/style.scss"
import App from './App';
import UserShop from "./shop/UserShop";
import SneakersShop from "./shop/SneakersShop";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserShop(),
        device: new SneakersShop(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);