import React, { useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { View, Title, Tile, Caption, Icon, Screen, ListView, Divider, TextInput } from '@shoutem/ui'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Issues({ navigation }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Blood Pressure",
      severity: 'Mild',
      current: 'In Progress',
      icon: 'tint',
    },
    {
      id: 2,
      name: "Blood Sugar",
      severity: 'High',
      current: 'In Progress',
      icon: 'vial',
    },
    {
      id: 3,
      name: "Haemoglobin",
      severity: 'Moderate',
      current: 'In Progress',
      icon: 'eye-dropper',
    },
    {
      id: 3,
      name: "Fever",
      severity: 'Moderate',
      current: 'Cured',
      icon: 'syringe',
    },
  ])

  const navigateTo = (name) => {
    console.log("name", name)
    navigation.navigate('TrackProgress', {
      name
    })
  }

  const renderRow = ({ id, name, severity, current, icon }) => <TouchableOpacity onPress={() => navigateTo(name)}>
    <Tile >
      <View styleName="content" >
        <View styleName="vertical">
          <View styleName="horizontal space-between">
            <View styleName="horizontal">
              <FontAwesome5 name={icon} style={styles.iconStyle} />
              <Title>{name}</Title>
            </View>
          </View>
        </View>
        <View styleName="horizontal space-between">
          <Caption>{`Severity: ${severity}`}</Caption>
          <Caption>{current}</Caption>
        </View>
      </View>
    </Tile>
    <Divider styleName="line" />
  </TouchableOpacity>

  return (
    <>
      <Divider styleName="section-header">
        <Caption>Click on the issue to see more details</Caption>
      </Divider>
      <View style={styles.container}>
        <ListView
          data={tasks}
          renderRow={renderRow}
        />
      </View>
    </>
  )

}

Issues.navigationOptions = {
  title: 'Issues',
}

export default Issues


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  iconStyle: {
    fontSize: 30,
    marginRight: 10
  },
})

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
}