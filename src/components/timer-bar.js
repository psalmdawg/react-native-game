import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';



class TimerBar extends Component{


  render(){

    return(
      <View>
        <View style={styles.TimerBar}>

          <View style={{flex:1,backgroundColor: this.props.t1Col}}></View>
          <View style={{flex:1,backgroundColor: this.props.t2Col}}></View>
          <View style={{flex:1,backgroundColor: this.props.t3Col}}></View>
          <View style={{flex:1,backgroundColor: this.props.t4Col}}></View>
          <View style={{flex:1,backgroundColor: this.props.t5Col}}></View>
          <View style={{flex:1,backgroundColor: this.props.t6Col}}></View>

        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  TimerBar:{
    marginTop: 20,
    height: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Time1:{
    flex:1,
    backgroundColor: this.stat,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  Time2:{
    flex:1,
    // backgroundColor: 'blue',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  Time3:{
    flex:1,
    // backgroundColor: 'purple',
    borderWidth: 0.5,
    borderColor: 'black',

  },
  Time4:{
    flex:1,
    // backgroundColor: 'orange',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  Time5:{
    flex:1,
    // backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  Time6:{
    flex:1,
    // backgroundColor: 'brown',
    borderWidth: 0.5,
    borderColor: 'black',
  },

})

export default TimerBar;
