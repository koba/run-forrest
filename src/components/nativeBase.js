import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";

const datas = [
  {
    text: "Sankhadeep",
    note: "Its time to build a difference . ."
  },
  {
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    text: "Shivraj",
    note: "Time changes everything . ."
  },
  {
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    text: "Himanshu",
    note: "Live a life style that matchs your vision"
  },
  {
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent"
  }
];

class NativeBase extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List>
            {datas.map((data, i) => (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={55} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});

export default NativeBase;