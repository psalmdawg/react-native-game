import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight, ScrollView, TouchableOpacity} from 'react-native';




class TouchPad extends Component{

  constructor(props){
    super(props);
    this.colorClick = this.colorClick.bind(this);
  }


  colorClick(){
    console.log('clicked in tpad')
    // this.setState({ guessedColor :  this.color})
    // console.log(this.props.color)
    // console.log(this.color)
  }

  render(){
    // console.log('something tp')
    const tpColor = this.props.color || '#000';
    return(

      <View style = {{
        backgroundColor: tpColor,
        width: 150,
        height: 150,
        // margin:20,
        justifyContent: 'center',
        borderRadius: 75,
        borderWidth: 2.6,
        borderColor: 'black',
      }}>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  touchPad: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    alignSelf: "center"

  },
  touchPadColor: {
    width: 100,
    height: 100,
    margin:20,
    borderRadius: 75,
    justifyContent: 'center',
  }
})

export default TouchPad;
