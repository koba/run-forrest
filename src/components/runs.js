import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import runsService from '../services/runs';

const list = [
  {
    id: 1,
    name: 'Vitaly London',
    city: 'London',
    country: 'United Kindgom',
    distance: '10',
    createdAt: '2018-04-26T16:19:57.143Z',
    updatedAt: '2018-04-26T16:19:57.143Z'
  },
  {
    id: 2,
    name: 'Vitaly London',
    city: 'London',
    country: 'United Kindgom',
    distance: '10',
    createdAt: '2018-04-26T16:19:57.143Z',
    updatedAt: '2018-04-26T16:19:57.143Z'
  },
  {
    id: 3,
    name: 'Vitaly London',
    city: 'London',
    country: 'United Kindgom',
    distance: '10',
    createdAt: '2018-04-26T16:19:57.143Z',
    updatedAt: '2018-04-26T16:19:57.143Z'
  },
  {
    id: 4,
    name: 'Vitaly London',
    city: 'London',
    country: 'United Kindgom',
    distance: '10',
    createdAt: '2018-04-26T16:19:57.143Z',
    updatedAt: '2018-04-26T16:19:57.143Z'
  },
]

export default class Runs extends React.Component {
  /*constructor(props) {
    super(props)
    this.state = {
      runsList: []
    }

    runsService.getRuns()
      .then(response => this.setState(runsList = response)
        .catch(error => console.log(error)));
  }*/

  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                subtitle={l.city}
                rightTitle={l.distance}
              />)
            )
          }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});
