import React from 'react'
import { TextInput } from 'react-native'

const American = ({ value, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
    />
  )
}

export default American