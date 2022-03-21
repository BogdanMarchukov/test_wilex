import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import {Email} from "./Pages/Email/Email";
import {Ip} from "./Pages/Ip/Ip";
import {Nick} from "./Pages/Nick/Nick";
import {Phone} from "./Pages/Phone/Phone";
import {Error} from "./Pages/Error/Error";

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="email" element={<Email/>}/>
                    <Route path="ip" element={<Ip/>}/>
                    <Route path="nick" element={<Nick/>}/>
                    <Route path="phone" element={<Phone/>}/>
                    <Route path="error" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



