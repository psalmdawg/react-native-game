import React, { Component } from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


class Menu extends Component{
  state = {
    modalVisible: false,
  }



  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  menuBtn(){
    console.log('menu clikced')
  }


  render(){
    return(
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>

            <Text style={styles.menuText}>High Score {this.props.highScore}</Text>



            <TouchableOpacity onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{color:'red',height:30,alignItems:'center',padding: 10}}>Close</Text>
            </TouchableOpacity>

          </View>
         </View>
        </Modal>



        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={styles.menuBtnText}>Menu</Text>
        </TouchableOpacity>

      </View>
    );
  }

}

export default Menu;

const styles = StyleSheet.create({
  menuBtn:{
    // flex: 2,
    // backgroundColor: 'red',
    height: 35,
    // justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',


    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 3
  },
  menuBtnText:{
    fontSize: 17,
    color:'grey'
  },
  menuText:{
    color:'grey'
  }
})
