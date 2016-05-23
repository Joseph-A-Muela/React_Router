import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import LeaderBoardComponent from './components/LeaderBoardComponent';
import LoadingComponent from './components/LoadingComponent';
import MenuComponent from './components/MenuComponent';
import PauseGameComponent from './components/PauseGameComponent';
import SettingsComponent from './components/SettingsComponent';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={LoadingComponent} />
		<Route path="/menu" component={MenuComponent} />
		<Route path="/pauseGame" component={PauseGameComponent} />
		<Route path="/leaders" component={LeaderBoardComponent} />
		<Route path="/settings" component={SettingsComponent} />
	</Router>
);

window.onload = function(){
		hashHistory.push('/');
	window.setTimeout(function(){
		hashHistory.push('/menu');
	}, 5000);
};
console.log('hi');
ReactDOM.render(router, document.querySelector('.main'));
