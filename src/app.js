import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameContainer from './components/game_container';



class App extends Component{

  render(){
    return(
      <View style={{flex:1}}>
        <GameContainer />
      </View>
    );
  }

}

const styles = StyleSheet.create({

})

export default App;
