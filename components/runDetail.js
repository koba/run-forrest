import React, { Component } from 'react';
import { StyleSheet, Text, View, ProgressBarAndroid, Platform } from 'react-native';
import Socket from 'socket.io-client';

import runsService from '../services/runs';

export default class RunDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            Progress_Value: 0.00,
            Latitude: 0,
            Longitude: 0
        }

        var socket = Socket('http://agurz.ddns.net:52982');

        setInterval(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
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
            <View>
                <View>
                    <Text style={styles.text1}>San Fernando </Text>
                </View>
                <View>
                    <Text style={styles.text2}> Posición: 1 </Text>
                </View>
                <View>
                    <Text style={styles.text3}> Recorridos: 7.5 Km  </Text>
                    <Text style={{ fontSize: 20, color: '#000' }}> Progress Value: {parseFloat((this.state.Progress_Value * 100).toFixed(3))} %</Text>
                    {
                        (Platform.OS === 'android')
                            ?
                            (<ProgressBarAndroid styleAttr="Horizontal" progress={this.state.Progress_Value} indeterminate={false} />)
                            :
                            (<ProgressViewIOS progress={this.state.Progress_Value} />)
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 120,
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 120,
    },
    text3: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 170,
    },
});