import React from 'react'
import { StyleSheet, TouchableOpacity, WebView } from 'react-native'
import { ImageBackground, Subtitle, Overlay, Tile, Image, View } from '@shoutem/ui'

function ManageInsurance({navigation}) {

  const navigateTo = (name) => {
    navigation.navigate('Humana')
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigateTo()}>
          <ImageBackground
            styleName="large-banner"
            source={{ uri: "https://khn.org/wp-content/uploads/sites/2/2018/11/health-insurance.jpg?w=1024" }}
          >

            <Tile>
              <Overlay styleName="fill-parent image-overlay">
                <Subtitle styleName="sm-gutter-horizontal">Manage Your Insurance</Subtitle>
                <Image
                  styleName="medium-wide"
                  source={{ uri: "http://www.bondclinic.com/wp-content/uploads/humana-logo-blog-large.jpg" }}
                />
              </Overlay>
            </Tile>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* <View styleName='horizontal h-center' style={{ flex: 1 }}>

      </View> */}
    </View>
  )
}

ManageInsurance.navigationOptions = {
  title: "Manage Insurance"
}

const styles = StyleSheet.create({
  container: {
    // flex: 2
  }
})

export default ManageInsurance;