import React from 'react'
import { View, Subtitle, Caption, Image, Card, Button, Title, ListView, Divider, Tile, Icon, Text } from '@shoutem/ui';
import { StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const doctors = [
  {
    name: "Dr. Bernard",
    subtitle: "Manages your heart",
    image: require('./../assets/images/doctor_bernard.jpg')
  },
  {
    name: "Dr. Emily",
    subtitle: "Physio and Occupational Therapy",
    image: require('./../assets/images/emily.jpg')
  }
]

function Physicians({ navigation }) {

  const handleChat = (name) => {
    navigation.navigate('Chat', { name })
  }
  const renderRow = ({ name, image, subtitle }) =>
    <>
      <Tile >
        <Card styleName="vertical">
          <View style={{ flexDirection: 'row', justify_content: 'center', alignItems: 'center' }}>
            <Image
              styleName="medium-avatar"
              source={image}
              justify_content='center'
              alignItems='center'
            />
            <View styleName="content h-center" style={{ marginLeft: 14 }}>
              <Title>{name}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </View>
          </View>
          <View styleName="vertical">

            <View styleName="horizontal space-between">
              <Button styleName="stacked clear" onPress={() => handleChat(name)}>
                <Icon name="comment" />
                <Text>Chat</Text>
              </Button>
              <Button styleName="stacked clear">
                <Icon name="call" />
                <Text>Call</Text>
              </Button>
              <Button styleName="stacked clear">
                <Icon name="about" />
                <Text>Emergency</Text>
              </Button>
            </View>
          </View>
        </Card>
      </Tile>
      <Divider styleName="section-header" />
    </>



  return (
    <>
      {/* <Divider styleName="section-header">
        <Caption>Chat with your doctor</Caption>
      </Divider> */}
      <View style={styles.container}>
        <ListView
          data={doctors}
          renderRow={renderRow}
        />
      </View>
    </>
  )
}

Physicians.navigationOptions = {
  title: 'Physicians'
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 2,
  //   flexDirection: 'column',
  //   paddingRight: 10,

  // },
  iconStyle: {
    padding: 10,
    fontSize: 20,
    marginRight: 10
  }
})

export default Physicians