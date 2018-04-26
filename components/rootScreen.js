import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';

import runDetail from './runDetail';
import Runs from './runs';
import RunDetail from './runDetail';

import defaultTheme from '../themes/default';

const RootScreen = StackNavigator(
	{
		Home: {
			screen: Runs
		},
		Login: {
			screen: RunDetail
		}
	},
	{
		initialRouteName: 'Home',
	}
);

export default RootScreen;