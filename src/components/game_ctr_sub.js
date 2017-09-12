import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TouchPad from './touch_pad';


class GameContainerSub extends Component{

  render(){
    return(
      <View >
        <TouchPad  />
        <TouchPad />
      </View>

    );
  }

}

export default GameContainerSub;
