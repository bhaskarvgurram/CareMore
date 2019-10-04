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
import { IMAGENAME } from 'tasks.jpeg';

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
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', background: 'green' }}>
            <Image

              styleName="large-banner"
              source={{ uri: 'http://2.bp.blogspot.com/-LAA3H_ug9Ko/U8Varxvm96I/AAAAAAAAAas/yVNufrdcZM4/s1600/Screen+Shot+2014-07-15+at+9.45.17+AM.png' }}
            />
          </View>
        </View>
        <View style={{ flex: 12, paddingTop: 6, marginTop: 15 }}>
          <View style={{ flex: 3, flexDirection: 'row' }}>

            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5, paddingRight: 5 }} onPress={() => navigateTo("Tasks")}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={IMAGENAME}
                />
                <View styleName="content">
                  <Subtitle style={{ marginBottom: 0 }}>Today's Tasks</Subtitle>
                  <Caption>7 remaining</Caption>
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
                  <Subtitle style={{ marginBottom: 0 }}>Track Progress</Subtitle>
                  <Caption>14 parameters and issues</Caption>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                />
                <View styleName="content">
                  <Subtitle style={{ paddingBottom: 0, marginBottom: 0 }}>Doctor Visits and Schedules</Subtitle>
                  {/* <Text style={{ color: 'grey' }}>No visits Today</Text> */}
                  <Caption style={{ paddingTop: 0 }}>No visit today</Caption>
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
                  <Subtitle style={{ marginBottom: 0 }}>Contact your Doctor</Subtitle>
                  <Caption>No calls scheduled</Caption>
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
  title: 'Care More',
};

