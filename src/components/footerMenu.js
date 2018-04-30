import React, { Component } from 'react';
import { Text } from 'react-native';

import Runs from './components/runs';
import HeaderCustomized from './components/header';
import RunDetail from './components/runDetail';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <HeaderCustomized title="Detalle" />
        <RunDetail />
      </View>
    );
  }
}
