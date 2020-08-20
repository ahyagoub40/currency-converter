import React from 'react'
import { TextInput } from 'react-native'

const Canadian = ({ onChangeText, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  )
}

export default Canadian