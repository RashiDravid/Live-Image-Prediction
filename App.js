import PickImage from './screens/Camera';
import React from 'react';
import { View } from 'react-native';

export default class App extends React.Component {
  render(){
  return (
    <View>
   <PickImage/>
    </View>
  );
}
}
