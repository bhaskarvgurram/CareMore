import React from 'react'
import { StyleSheet, TouchableOpacity, WebView } from 'react-native'
import { ImageBackground, Subtitle, Overlay, Tile, Image, View, Title, Caption, ListView, GridRow, Card, Divider } from '@shoutem/ui'

const data = [
  {
    title: 'Start Date',
    subTitle: '6th August, 2019'
  },
  {
    title: 'End Date',
    subTitle: '6th August, 2020'
  },
  {
    title: 'Price',
    subTitle: '1000$'
  },
  {
    title: 'Used',
    subTitle: '200$'
  }
]
function ManageInsurance({ navigation }) {
  const renderRow = (rowData, sectionId, index) => {

    const cellViews = rowData.map((restaurant, id) => {
      return (
        <TouchableOpacity key={id} styleName="flexible">
          <Card styleName="flexible">
            <View styleName="content">
              <Subtitle numberOfLines={3}>{restaurant.title}</Subtitle>
              <View styleName="horizontal">
                <Caption styleName="collapsible" numberOfLines={2}>{restaurant.subTitle}</Caption>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      );
    });

    return (
      <GridRow columns={2}>
        {cellViews}
      </GridRow>
    );
  }


  const navigateTo = (name) => {
    navigation.navigate('Humana')
  }
  const groupedData = GridRow.groupByRows(data, 2);
  return (
    <View style={styles.container}>
      <View >
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

      <View styleName='horizontal h-center' style={{ flex: 0.2, marginTop: 20 }}>
        <Tile styleName="text-centric">
          <Title styleName="sm-gutter-bottom">Hi, Weider Yu!</Title>
          <Caption>Here's your plan details</Caption>
        </Tile>
      </View>

      <View style={{ flex: 1, marginTop: 20 }}>
        <ListView
          data={groupedData}
          renderRow={renderRow}
        />
        <Divider styleName="line" />
      </View>
    </View>
  )
}

ManageInsurance.navigationOptions = {
  title: "Manage Insurance"
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  }
})

export default ManageInsurance;