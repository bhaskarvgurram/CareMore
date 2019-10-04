import React from 'react'
import { View, Subtitle, Caption, Image, Card, Button, Title, ListView, Divider, Tile, Icon, Text } from '@shoutem/ui';
import { StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const doctors = [
  {
    name: "Dr. Bernard",
    subtitle: "Manages your heart",
    image: 'https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg'
  },
  {
    name: "Dr. Emily",
    subtitle: "Manages your libido",
    image: 'https://image.freepik.com/free-vector/doctor-background-design_1270-62.jpg'
  }
]

function Physicians({ navigation }) {

  const handleChat = (name) => {
    navigation.navigate('Chat', { name })
  }
  const renderRow = ({ name, image, subtitle }) =>
    <>
      <Tile >
        <Card>
          <Image
            styleName="large"
            source={{ uri: image }}
          />
          <View styleName="vertical">
            <View styleName="content h-center">
              <Title>{name}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </View>
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
    fontSize: 20,
    marginRight: 10
  }
})

export default Physicians