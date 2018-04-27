import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import Socket from 'socket.io-client';

import runsService from '../services/runs';

import { darkTheme } from '../themes';

export default class RunDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            Progress_Value: 0.00,
            Latitude: 0,
            Longitude: 0,
            time: new Date()
        }

        var socket = Socket('http://agurz.ddns.net:52982');

        setInterval(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    /*socket.emit('refresh', {
                        user: '5ae1d52121da2b18b45d7435',
                        latitude: this.state.latitude, // user lat
                        longitude: this.state.latitude  // user lon
                    });
                    console.log(this.state.latitude);
                    console.log(this.state.longitude);*/
                },
            );
        }, 500);

        socket.on('refresh', (data) => {
            console.log(data);
        });
    }



    Start_Progress = () => {
        this.value = setInterval(() => {
            if (this.state.Progress_Value <= 1) {
                this.setState({ Progress_Value: this.state.Progress_Value + .01 })
            }
        }, 1500);
    }

    render() {
        this.Start_Progress();
        return (
            <ImageBackground source={require('../themes/assets/background.png')} style={darkTheme.imageBackground}>
                <View style={{ paddingTop: 12 }}>
                    <Text style={{ ...darkTheme.text, textAlign: 'left', padding: 8 }}>Actualmente corriendo</Text>
                    <Text style={{ ...darkTheme.title, backgroundColor: 'rgb(33, 90, 128)' }}>BOSTON</Text>
                </View>
                <View>
                    <Text style={{ ...darkTheme.text }}>Posición</Text>
                    <Text style={{ ...darkTheme.text, fontSize: 148 }}>1</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ marginRight: 32 }}>
                        <Text style={{ ...darkTheme.text }}>tiempo</Text>
                        <Text style={{ ...darkTheme.textBold }}>{this.state.time.toTimeString().substr(0, 8)}</Text>
                    </View>
                    <View style={{ marginRight: 32 }}>
                        <Text style={{ ...darkTheme.text }}>km</Text>
                        <Text style={{ ...darkTheme.textBold }}>{'2.47'}</Text>
                    </View>
                    <View>
                        <Text style={{ ...darkTheme.text }}>paso</Text>
                        <Text style={{ ...darkTheme.textBold }}>{'5 km/m'}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ ...darkTheme.text, textAlign: 'left' }}> Progress Value: {parseFloat((this.state.Progress_Value * 100).toFixed(3))} %</Text>
                    {
                        (Platform.OS === 'android')
                            ?
                            (<ProgressBarAndroid styleAttr="Horizontal" progress={this.state.Progress_Value} indeterminate={false} />)
                            :
                            (<ProgressViewIOS progress={this.state.Progress_Value} />)
                    }
                </View>
            </ImageBackground>
        );
    }
}