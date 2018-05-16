import React, {Component} from 'react';
import { AppRegistry} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import homeKookdApp  from "./app/reducers/reducer"
import Home from './app/components/home'

const Store = createStore(homeKookdApp);

class reactTutorialApp extends Component{
	render(){
		return (
			<Provider store={Store}>
				<Home />
			</Provider>
		);
	}

}

export default reactTutorialApp

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);


