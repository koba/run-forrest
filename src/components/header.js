import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header } from 'react-native-elements';

export default class HeaderCustomized extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title : props.title
        };
    }

    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: this.state.title, style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}
