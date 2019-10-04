import React from 'react'
import { Dimensions, View, StyleSheet, Text } from 'react-native'
import {
  LineChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width



// each value represents a goal ring in Progress chart
const progressData = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [80, 75, 98, 80, 99, 83],
    color: (opacity = 1) => `rgba(255, 191, 0, ${opacity})`, // optional
    strokeWidth: 2 // optional
  }]
}



function TrackProgress() {
  return (
    <View style={{ flex: 1, marginTop: 15, paddingLeft: 15, paddingRight: 25 }}>
      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', paddingBottom: 10 }}>Your History with Blood Pressure</Text>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <LineChart
          data={data}
          width={screenWidth - 10}
          height={220}
          chartConfig={chartConfig}
        />
        <Text style={{ color: 'grey' }}>Blood Pressure monitored over last 6 months</Text>
      </View>
      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Current Status:</Text>
      </View>
      <View >
        <Text style={{ color: 'green', fontSize: 17 }}>Improving with regular medications and monitoring</Text>
      </View>

      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Managed By:</Text>
      </View>
      <View >
        <Text style={{ color: 'green', fontSize: 17 }}>Dr. Bernard</Text>
      </View>
      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Diagnosis History:</Text>
      </View>
      <View >
        <Text style={{ color: 'green', fontSize: 17 }}>Hgh Blood Pressure from August, 2017</Text>
      </View>
      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Related Medication:</Text>
      </View>
      <View >
        <Text style={{ color: 'green', fontSize: 17 }}>Teveten 20MG - Twice a day post meal</Text>
      </View>
    </View>
  )
}

TrackProgress.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.name}`
})

export default TrackProgress


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})

const chartConfig = {
  backgroundColor: "#DCDCDC",
  backgroundGradientFrom: "#FFF",
  backgroundGradientTo: "#DCDCDC",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
}