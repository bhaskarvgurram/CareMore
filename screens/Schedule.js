import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { View, Title, Tile, Caption, Icon, Screen, ListView, Divider, TextInput } from '@shoutem/ui'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const doctors = [
  {
    name: "Dr. Bernard",
    subtitle: "Manages your heart",
    icon: 'user-md',
    color: 'red'
  },
  {
    name: "Dr. Emily",
    subtitle: "Manages your libido",
    icon: 'user-md',
    color: 'blue'
  }
]

function Schedule() {

  const renderRow = ({ id, name, color, subtitle, icon }) => <TouchableOpacity >
    <Tile >
      <View styleName="content" >
        <View styleName="vertical">
          <View styleName="horizontal space-between">
            <View styleName="horizontal">
              <FontAwesome5 name={icon} style={{ ...styles.iconStyle }} />
              <Title>{name}</Title>
            </View>
            <FontAwesome5 name='circle' style={{ ...styles.iconStyle, color }} solid/>
          </View>
        </View>
        <View styleName="horizontal space-between">
          <Caption>{`${subtitle}`}</Caption>
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
          data={doctors}
          renderRow={renderRow}
        />
        <Calendar
          markedDates={{
            '2019-10-04': { selected: true, marked: true, selectedColor: 'blue', disableTouchEvent: true },
            '2019-10-14': { selected: true, marked: true, selectedColor: 'red', disableTouchEvent: true },
          }}
        />
      </View>
    </>

  )
}

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


Schedule.navigationOptions = {
  title: 'Schedule & Visits',
}

export default Schedule