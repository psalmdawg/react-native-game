import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



class ScoreBar extends Component{

  render(){

    return(
      <View style={styles.scoreBar}>
        <Text style={styles.text}>Score: {this.props.score} |</Text>
        <Text style={styles.text}> High Score: {this.props.highScore} </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  scoreBar:{
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
    // flex: 1,

    alignSelf:'flex-end',


    paddingLeft: 6,
    paddingRight: 30,
  },
  text:{
    flexDirection: 'row',
    color:'grey'

  }

})

export default ScoreBar;
