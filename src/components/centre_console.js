import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



class CentreConsole extends Component{

  render(){
    const consoleColor = this.props.gColor || '#000';
    return(
      <View style={{
        width: 250,
        height: 210,
        backgroundColor: consoleColor,
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 2.6,
        borderColor: 'black',

      }}>

        <Text style={styles.consoleText}>{this.props.msg}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  consoleText: {
    width: 150,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'black'
  }
})



export default CentreConsole;
