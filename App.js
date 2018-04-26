import React, { Component } from 'react';
import { View } from 'react-native';

import Runs from './components/runs';
import HeaderCustomized from './components/header';
import RunDetail from './components/runDetail';
import NativeBase from './components/nativeBase';
import RootScreen from './components/rootScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <HeaderCustomized title="Carreras" />
        <RunDetail />
      </View>
    );
  }
}