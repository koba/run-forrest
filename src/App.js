import React, { Component } from 'react';
import { View } from 'react-native';

import Runs from './components/runs';
import RunDetail from './components/runDetail';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <RunDetail />
      </View>
    );
  }
}