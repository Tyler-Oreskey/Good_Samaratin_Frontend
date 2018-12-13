/** @format */
import React from 'react'
import ReactDOM from 'react-dom'
import {AppRegistry} from 'react-native';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName , () => App);
