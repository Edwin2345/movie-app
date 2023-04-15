// 1) import react (base library), reactDom (show on browser), app comp
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css';

// 2) select div with id root
const el = document.querySelector("#root");

// 3) tell react to control element
const root = ReactDOM.createRoot(el);

// 4) render component
root.render(
<BrowserRouter basename="/movie-app">
  <App/>
</BrowserRouter>
)

