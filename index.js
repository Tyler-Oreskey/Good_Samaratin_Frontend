/** @format */
import React from 'react'
import ReactDOM from 'react-dom'
import {AppRegistry} from 'react-native';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName , () => App);


// import React, { Component } from 'react'
// import { AppRegistry } from 'react-native'
// import App from './App'

// export default class GoodSamaritanApp extends Component {
//     render() {
//         return (
//             <App />
//         );
//     }
// }
// AppRegistry.registerComponent('GoodSamaritanApp', () => GoodSamaritanApp);