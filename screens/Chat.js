import React, { useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

function Chat({ }) {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'How are you?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg',
      },
    },
  ])

  const onSend = (newMessage = []) => {
    let prevMessages = messages
    let updatedMessages = GiftedChat.append(prevMessages, newMessage)
    setMessages(updatedMessages)
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}


Chat.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.name}`
})

export default Chat