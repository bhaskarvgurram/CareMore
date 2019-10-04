import React from 'react'
import { WebView } from 'react-native'

function Humana() {
  return (
    <WebView
      source={{ uri: 'https://www.humana.com/' }}
    />
  )
}

Humana.navigationOptions = {
  title: 'Humana'
}

export default Humana