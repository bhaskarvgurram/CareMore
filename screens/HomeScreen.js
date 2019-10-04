import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Examples, Screen, View, Card, Image, Subtitle, Caption } from '@shoutem/ui';
import { Col, Row, Grid } from "react-native-easy-grid";


export default function HomeScreen({ navigation }) {
  const navigateTo = (page) => {
    navigation.navigate(page)
  }
  return (
    <Screen>
      <ScrollView>
        <View style={{ flex: 4, flexDirection: 'column', alignitems: 'center', justifyContent: 'center' }}>
          {/* <Image source="/home/hrishikesh/hack/CareMore/assets/images/round_progress.png"></Image> */}
          <View style={{ flex: 1 }}>

            <Text>HOME SCREEN</Text>

          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', background: 'green' }}>
            <Image
              styleName="medium"
              source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
            />
          </View>
        </View>
        <View style={{ flex: 12, paddingTop: 12, marginTop: 15 }}>
          <View style={{ flex: 3, flexDirection: 'row' }}>

            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                />
                <View styleName="content">
                  <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
                  <Caption>21 hours ago</Caption>
                </View>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5 }}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                />
                <View styleName="content">
                  <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
                  <Caption>21 hours ago</Caption>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                />
                <View styleName="content">
                  <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
                  <Caption>21 hours ago</Caption>
                </View>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingLeft: 5 }}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                />
                <View styleName="content">
                  <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
                  <Caption>21 hours ago</Caption>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

