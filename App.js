//imports do sistema
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

//Meus imports
import Reducers from './src/Reducers';

import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navegador = createStackNavigator({
	Home:Home,
	Cadastro:Cadastro,
	Login:Login
	
});

export default class App extends Component {
	render(){
		return(
			<Provider store={store}>
				<Navegador />
			</Provider>
		)
	}
}