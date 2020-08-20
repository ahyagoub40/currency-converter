import React from 'react';
import { View } from 'react-native';
import ConvertButton from '../Components/button';
import { useDispatch, useSelector } from 'react-redux';
import { convertAmount, inputAmount } from '../Store/action';
import Canadian from '../Components/canadian';
import American from '../Components/american';

const SubmitForm = () => {

  const converted = useSelector(state => state.american)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(convertAmount(converted))
  }
  const onChange = (text) => dispatch(inputAmount(Number(text)))
  return (
    <View >
      <Canadian onChangeText={onChange} placeholder="CDN" />
      <American value={converted.toString()} placeholder="USD" />
      <ConvertButton onPress={onSubmit} />
    </View>
  )
}

export default SubmitForm