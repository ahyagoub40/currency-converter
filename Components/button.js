import React from 'react';
import { Button } from 'react-native';

const ConvertButton = ({ onPress }) => {
  return (
    <Button type="submit" title="Convert" onPress={onPress} />
  )
}

export default ConvertButton