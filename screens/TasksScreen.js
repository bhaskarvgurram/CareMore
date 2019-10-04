import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Checkbox from 'react-native-modest-checkbox'
import { View, Title, Tile, Caption, Icon, Screen, ListView, Divider, TextInput } from '@shoutem/ui'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function TasksScreen() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Take Paracetamol",
      time: "8:00 AM",
      category: "Heart",
      isDone: false,
      icon: 'pills',
      color: 'green'
    },
    {
      id: 2,
      name: "Take a walk",
      time: "8:00 AM",
      category: "Physio",
      isDone: false,
      icon: 'walking',
      color: 'green'
    },
    {
      id: 3,
      name: "Blood Pressure",
      time: "10:00 AM",
      category: "Blood Pressure",
      isDone: false,
      hasInput: true,
      icon: 'tint',
      color: 'red'
    },
    {
      id: 4,
      name: "Take Paracetamol",
      time: "8:00 AM",
      category: "Heart",
      isDone: false,
      icon: 'pills',
      color: 'green'
    },
    {
      id: 5,
      name: "Blood Sugar",
      time: "12:00 PM",
      category: "Blood Sugar",
      isDone: false,
      hasInput: true,
      icon: 'vial',
      color: 'red'
    }
  ])

  const markComplete = (id, checkedObj) => {
    let { checked } = checkedObj
    let updatedTasks = tasks
    updatedTasks = updatedTasks.map(task => {
      if (task.id === id) {
        task.isDone = checked
      }
      return task
    })
    console.log(id, checked, updatedTasks)
    setTasks(updatedTasks)
  }

  const renderRow = ({ id, name, time, category, isDone, hasInput, icon, color }) => <>
    <Tile>
      <View styleName="content" >
        <View styleName="vertical">
          <View styleName="horizontal space-between">
            <View styleName="horizontal">
              <FontAwesome5 name={icon} style={{ ...styles.iconStyle }} />
              <Title>{name}</Title>
            </View>
            <Checkbox
              checked={isDone}
              label=''
              onChange={(checked) => markComplete(id, checked)}
            />
          </View>
          <View>
            {
              hasInput ?
                <TextInput
                  placeholder={`Enter reading`}
                  onChangeText={() => { }}
                  style={styles.textInputStyle}
                /> : null
            }
          </View>
        </View>
        <View styleName="horizontal space-between">
          <Caption>{category}</Caption>
          <Caption>{time}</Caption>
        </View>
      </View>
    </Tile>
    <Divider styleName="line" />
  </>

  return (
    <View style={styles.container}>
      <ListView
        data={tasks}
        renderRow={renderRow}
      />
    </View>
  )
}

TasksScreen.navigationOptions = {
  title: 'Tasks',
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 30,
    marginRight: 10
  },
  container: {
    flex: 1,
    padding: 10
  },
  textInputStyle: {
    padding: 10,
    marginTop: 10,
    borderColor: 'black',
    height: 50,
    width: 200,
    borderWidth: 1
  }
})



export default TasksScreen