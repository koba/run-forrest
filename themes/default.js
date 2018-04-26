import { Platform } from 'react-native';
import { Font } from 'expo';

export default {

	fontFamily: 'Rubik-Regular',
	tintColor: '#ff4500',

	button: {
		borderRadius: 6,
	},

	chat: {
		container: {
			backgroundColor: '#ffffff'
		}
	},

	container: {
		backgroundColor: '#ffffff'
	},
	
	datePicker: {
		btnTextCancel: {
			fontFamily: 'Rubik-Regular',
		},
		btnTextConfirm: {
			color: '#ff4500',
			fontFamily: 'Rubik-Regular',
		},
		dateInput: {
			alignItems: 'flex-start',
			borderWidth: 0,
			paddingHorizontal: 8,
			paddingVertical: 16
		},
		dateText: {
			fontFamily: 'Rubik-Regular',
			fontSize: 17,
		}
	},

	form: {

	},

	formItem: {

	},

	header: {
		backgroundColor: '#d93411',
		textColor: 'white'
	},

	input: {
		fontFamily: 'Rubik-Regular',
	},

	label: {
		fontFamily: 'Rubik-Regular',
	},

	picker: {
		alignSelf: 'stretch',
		marginLeft: Platform.OS == 'ios' ? 0 : 14
	},

	pickerItem: {
		fontFamily: 'Rubik-Regular',
	},

	tabNavigator: {
		indicator: Object.assign(
			{},
			Platform.OS == 'android' ? {
				backgroundColor: '#ff4500',
			} : {}
		),
		label: Object.assign(
			{ 
				fontFamily: 'Rubik-Regular' 
			}, 
			Platform.OS == 'android' ? {
				color: '#a7a7a7'
			} : {}
		),
		style: Object.assign(
			{},
			Platform.OS == 'android' ? {
				backgroundColor: '#f7f7f7'
			} : {}
		)
	},
	
	text: {
		fontFamily: 'Rubik-Regular',
	}

};