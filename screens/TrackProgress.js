import React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
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
    data: [20, 45, 28, 80, 99, 43],
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
    strokeWidth: 2 // optional
  }]
}

function TrackProgress() {
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth - 10}
        height={220}
        chartConfig={chartConfig}
      />
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