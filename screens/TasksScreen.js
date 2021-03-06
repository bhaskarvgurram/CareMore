import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Checkbox from 'react-native-modest-checkbox'
import { View, Title, Tile, Caption, Icon, Screen, ListView, Divider, TextInput, Video } from '@shoutem/ui'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function BloodPressure() {
  return (
    <View styleName="horizontal">
      <TextInput
        placeholder={`High`}
        onChangeText={() => { }}
        style={{
          ...styles.textInputStyle,
          width: 95
        }}
      />
      <TextInput
        placeholder={`Low`}
        onChangeText={() => { }}
        style={{
          ...styles.textInputStyle,
          width: 95,
          marginLeft: 10
        }}
      />
    </View>
  )
}

function TasksScreen() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Take Paracetamol",
      time: "8:00 AM",
      category: "Heart",
      isDone: false,
      icon: 'pills',
      color: '#add8e6'
    },
    {
      id: 2,
      name: "Take a walk",
      time: "8:00 AM",
      category: "Physio",
      isDone: false,
      icon: 'walking',
      color: '#ffbf00'
    },
    {
      id: 3,
      name: "Blood Pressure",
      time: "10:00 AM",
      category: "Blood Pressure",
      isDone: false,
      input: <BloodPressure />,
      icon: 'tint',
      color: '#bb0a1e'
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
      id: 6,
      name: "Physiotherapy Exercise",
      time: "12:00 PM",
      category: "Physiotherapy",
      isDone: false,
      icon: 'walking',
      color: '#ffbf00'
    },
    {
      id: 5,
      name: "Blood Sugar",
      time: "12:00 PM",
      category: "Blood Sugar",
      isDone: false,
      input: <TextInput
        placeholder={`Sugar`}
        onChangeText={() => { }}
        style={styles.textInputStyle}
      />,
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
    setTasks(updatedTasks)
  }

  const renderRow = ({ id, name, time, category, isDone, input, icon, color }) =>
    <>
      {name === 'Physiotherapy Exercise'
        ?
        <Tile>

          <View styleName="content" >
            <View styleName="vertical">
              <View styleName="horizontal space-between" style={{ paddingBottom: 11 }}>
                <View styleName="horizontal">
                  <FontAwesome5 name={icon} style={{ ...styles.iconStyle, color }} />
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
                  input ? input : null
                }
              </View>
              <Video
                source={{ uri: 'https://www.youtube.com/watch?v=Hy1qjQomD8Y' }}
                poster={'https://i.ytimg.com/vi/1tavDv5hXpo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB5H6NLcL2tWeeTPC8snOAqHZGgVw'}
                height={200}
                width={300}
              />
            </View>
          </View>
        </Tile>

        :
        <Tile>
          <View styleName="content" >
            <View styleName="vertical">

              <View styleName="horizontal space-between">
                <View styleName="horizontal">
                  <FontAwesome5 name={icon} style={{ ...styles.iconStyle, color }} />
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
                  input ? input : null
                }
              </View>
            </View>
            <View styleName="horizontal space-between">
              <Caption>{category}</Caption>
              <Caption>{time}</Caption>
            </View>
          </View>
        </Tile>
      }

      <Divider styleName="line" />

    </>

  return (
    <>
      <Divider styleName="section-header">
        <Caption>Tap the checkbox once you've completed the task</Caption>
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
    padding: 5
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