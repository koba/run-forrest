import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import Socket from 'socket.io-client';

import runsService from '../services/runs';

import { darkTheme } from '../themes';

const USER_ID = '5ae0e171677187162a948b8a'; // TEMP
const RUN_ID = '5ae1fc2d861bb81bea245ec8'; // TEMP

export default class RunDetail extends React.Component {

    constructor() {
        super();

        this.state = {
            Progress_Value: 0.00,
            Latitude: 0,
            Longitude: 0,
            run: null,
            runState: null,
            time: new Date(0, 0, 0, 0, 0, 0)
        }

        this.loadRun(RUN_ID); // TODO: run should be passed as a prop
        this.sendLocationPeriodically();
        this.startTimer();
    }

    loadRun(id) {
        runsService.getRun(id).then(res => {
            this.setState({ run: res.data });
            runsService.getRunState(id).then(res => {
                this.setState({ runState: res.data });
            })
        });
    }

    sendLocationPeriodically() {
        var socket = Socket('http://agurz.ddns.net:49442');

        setInterval(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    socket.emit('refresh', {
                        user: '5ae1d52121da2b18b45d7435',
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
            );
        }, 10000);

        socket.on('refresh', (data) => {
            //this.setState({ runState: data });
        });
    }

    startTimer() {
        setInterval(() => {
            this.setState({ time: new Date(this.state.time.getFullYear(), this.state.time.getMonth(), this.state.time.getDay(), this.state.time.getHours(), this.state.time.getMinutes(), this.state.time.getSeconds() + 1) });
        }, 1000);
    }

    render() {
        return (
            <ImageBackground source={require('../themes/assets/background.png')} style={darkTheme.imageBackground}>
                <View style={{ paddingTop: 12 }}>
                    <Text style={{ ...darkTheme.text, textAlign: 'left', padding: 8 }}>Actualmente corriendo</Text>
                    <Text style={{ ...darkTheme.title, backgroundColor: 'rgb(33, 90, 128)' }}>{this.state.run && this.state.run.name.toUpperCase()}</Text>
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
                        <Text style={{ ...darkTheme.textBold }}>
                            {
                                this.state.runState && 
                                Object.keys(this.state.runState.runners).length && 
                                Object.keys(this.state.runState.runners[USER_ID]).length && 
                                (this.state.runState.runners[USER_ID].route.distance / 1000).toFixed(2)
                            }
                        </Text>
                    </View>
                    <View>
                        <Text style={{ ...darkTheme.text }}>paso</Text>
                        <Text style={{ ...darkTheme.textBold }}>{'5"'}</Text>
                    </View>
                </View>
                <View>
                    {
                        this.state.runState && 
                        Object.keys(this.state.runState.runners).length && 
                        Object.keys(this.state.runState.runners[USER_ID]).length && 
                        <Text style={{ ...darkTheme.text, textAlign: 'left' }}> Progreso: {parseFloat((this.state.run.distance * 1000 * 100 / this.state.runState.runners[USER_ID].route.distance).toFixed(3))} %</Text>
                    }
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