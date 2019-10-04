import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import { Examples, Screen, View, Card, Image, Subtitle, Caption } from '@shoutem/ui';
import {
  LineChart,

} from "react-native-chart-kit";

// import { IMAGENAME } from 'tasks.jpeg';

const screenWidth = Dimensions.get("window").width


export default function HomeScreen({ navigation }) {
  const navigateTo = (page) => {
    navigation.navigate(page)
  }

  const progressData = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      data: [0, 7, 8, 10, 9, 10, 10],
      color: (opacity = 0.8) => `rgba(50, 205, 50, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }]
  }
  return (

    <Screen>
      <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
        <View style={{ flex: 5, flexDirection: 'column', alignitems: 'center', justifyContent: 'center' }}>
          {/* <Image source="/home/hrishikesh/hack/CareMore/assets/images/round_progress.png"></Image> */}
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingBottom: 10, marginTop: 10 }}>

            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Care Dashboard</Text>

          </View>
          <View style={{ flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'green' }}>
            {/* <Image

              styleName="large-banner"
              source={{ uri: 'http://2.bp.blogspot.com/-LAA3H_ug9Ko/U8Varxvm96I/AAAAAAAAAas/yVNufrdcZM4/s1600/Screen+Shot+2014-07-15+at+9.45.17+AM.png' }}
            /> */}
            <View style={{ paddingBottom: 5 }}>
              <LineChart
                data={data}
                width={screenWidth - 20}
                height={160}
                chartConfig={chartConfig}
              />
            </View>

            <Text>Daily Task Completion Track</Text>
          </View>

        </View>
        <View style={{ flex: 12, paddingTop: 6, marginTop: 15 }}>
          <View style={{ flex: 3, flexDirection: 'row' }}>

            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5, paddingRight: 5 }} onPress={() => navigateTo("Tasks")}>
              <Card styleName="flexible" >
                <Image
                  styleName="medium-wide"
                  source={require('./tasks.jpeg')}
                />
                <View styleName="content">
                  <Subtitle style={{ marginBottom: 0 }}>Today's Tasks</Subtitle>
                  <Caption>7 remaining</Caption>
                </View>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5 }} onPress={() => navigateTo('Issues')}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={require('./../assets/images/graphh.png')}
                />
                <View styleName="content">
                  <Subtitle style={{ marginBottom: 0 }}>Track Progress</Subtitle>
                  <Caption>14 parameters and issues</Caption>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, marginTop: 10 }} >
            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5, paddingRight: 5 }} onPress={() => navigateTo('Schedule')}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={require('./../assets/images/visits.jpg')}
                />
                <View styleName="content">
                  <Subtitle style={{ paddingBottom: 0, marginBottom: 0 }}>Doctor Visits and Schedules</Subtitle>
                  {/* <Text style={{ color: 'grey' }}>No visits Today</Text> */}
                  {/* <Caption style={{ paddingTop: 0 }}>No visit today</Caption> */}
                </View>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity styleName="flexible" style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Card styleName="flexible">
                <Image
                  styleName="medium-wide"
                  source={require('./../assets/images/medicines.jpeg')}
                />
                <View styleName="content">
                  <Subtitle style={{ paddingBottom: 0, marginBottom: 0 }}>Meds and Prescriptions</Subtitle>
                  {/* <Text style={{ color: 'grey' }}>No visits Today</Text> */}
                  {/* <Caption style={{ paddingTop: 0 }}>No visit today</Caption> */}
                </View>
              </Card>
            </TouchableOpacity>


          </View>
        </View>
        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, marginTop: 10 }} >
          <TouchableOpacity style={{ paddingLeft: 5 }} onPress={() => navigateTo('Physicians')}>
            <Card styleName="flexible">
              <Image
                styleName="medium-wide"
                source={require('./../assets/images/doctor2.jpg')}
              />
              <View styleName="content">
                <Subtitle style={{ marginBottom: 0 }}>Contact your Doctor</Subtitle>
                <Caption>No calls scheduled</Caption>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingLeft: 5 }} onPress={() => navigateTo('ManageInsurance')}>
            <Card styleName="flexible">
              <Image
                styleName="medium-wide"
                source={require('./../assets/images/humana.jpg')}
              />
              <View styleName="content">
                <Subtitle style={{ marginBottom: 0 }}>Humana Care</Subtitle>

              </View>
            </Card>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </Screen>

  );
}

const chartConfig = {
  backgroundColor: "#DCDCDC",
  backgroundGradientFrom: "#FFF",
  backgroundGradientTo: "#DCDCDC",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 0.7) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
}
HomeScreen.navigationOptions = {
  title: 'Care More',
  headerStyle: {
    fontWeight: 'medium',
    fontSize: '14'
  },
  headerLeft: <Image
    styleName="small"
    style={{height:40, width:40, marginLeft: 20}}
    source={{ uri: 'https://cdn1.iconfinder.com/data/icons/medical-health-care-2-2/380/Heart_Care-512.png' }}
  />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});
