import React, { useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { View, Title, Tile, Caption, Icon, Screen, ScrollView, ListView, Divider, TextInput, Image, Text } from '@shoutem/ui'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
    ContributionGraph
} from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width


function Issues({ navigation }) {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Blood Pressure",
            severity: 'Mild',
            current: 'In Progress',
            icon: 'tint',
            color: '#bb0a1e'
        },
        {
            id: 2,
            name: "Blood Sugar",
            severity: 'High',
            current: 'In Progress',
            icon: 'vial',
            color: '#ffbf00'
        },
        {
            id: 3,
            name: "Haemoglobin",
            severity: 'Moderate',
            current: 'In Progress',
            icon: 'eye-dropper',
            color: '#bb0a1e'
        },
        {
            id: 3,
            name: "Fever",
            severity: 'Moderate',
            current: 'Cured',
            icon: 'syringe',
            color: '#add8e6'
        },
    ])

    const navigateTo = (name) => {
        console.log("name", name)
        navigation.navigate('TrackProgress', {
            name
        })
    }

    const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 2 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 }
    ];

    const renderRow = ({ id, name, severity, current, icon, color }) => <TouchableOpacity onPress={() => navigateTo(name)}>
        <Tile >
            <View styleName="content" >
                <View styleName="vertical">
                    <View styleName="horizontal space-between">
                        <View styleName="horizontal">
                            <FontAwesome5 name={icon} style={{ ...styles.iconStyle, color }} />
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


        <ScrollView style={{ paddingLeft: 10 }}>
            <View style={{ flex: 1, paddingTop: 4, marginTop: 10, marginBottom: 0, paddingBottom: 0 }}>
                <Text style={{ fontWeight: 'medium', fontSize: 25, color: 'black' }}>Track Health Challenges</Text>
            </View>
            <View style={{ flex: 2, flexDirection: 'column', alignItems: 'center', marginTop: 0, paddingTop: 0 }}>
                <Image

                    styleName="large"
                    source={require('./../assets/images/incidents.jpeg')} >
                </Image>
                <Text style={{ paddingTop: 0, marginTop: 0 }}>
                    Health Incidents heatmap for last 6 months
                </Text>

            </View>
            {/* <Divider styleName="section-header">
                <Caption>Click on the issue to see more details</Caption>
            </Divider> */}
            <View style={styles.container}>
                <ListView
                    data={tasks}
                    renderRow={renderRow}
                />
            </View>
        </ScrollView>
    )

}

Issues.navigationOptions = {
    title: 'Issues',
}

export default Issues


const styles = StyleSheet.create({
    container: {
        flex: 7,
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