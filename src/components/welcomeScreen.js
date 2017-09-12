import React, { Component } from 'react';
import {Modal, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';


class WelcomeScreen extends Component{
  state = {
    modalVisible: true,
  }

  setModalVisible(visible) {
    console.log('cliked')
    this.setState({modalVisible: visible});
  }

  render(){
    return(
      <View style={{marginTop: 22}}>
       <Modal

         transparent={false}
         visible={this.state.modalVisible}

         >
        <View style={{marginTop: 22}}>


           <Text style={styles.welcomeHeader}>Welcome to the Bop Bop</Text>
           <View style={styles.welcomeSubCtr}>
             <Text style={styles.welcomeSub}>Here are the things to know...</Text>
             <Text style={styles.welcomeSub}>When a color flashes up, and before the timer runs out, tap the matching color pad</Text>
             <Text style={styles.welcomeSub}>Each correct tap scores a point!</Text>
             <Text style={styles.welcomeSub}>If you match the wrong color, or the timer runs out, the game is over!</Text>

           </View>


           <TouchableOpacity style={styles.continueBtn} onPress={() => {
             this.setModalVisible(!this.state.modalVisible)
           }}>
             <Text style={styles.continueBtnText}>CONTINUE!</Text>
           </TouchableOpacity>


        </View>
       </Modal>



     </View>


    );
  }

}

export default WelcomeScreen;

const styles = StyleSheet.create({
  menubtn:{
    // flex: 2,
    backgroundColor: 'red',
    height: 35,
    // justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    paddingLeft: 30,
    paddingRight: 30,
  },
  welcomeHeader:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    padding: 5
  },
  welcomeSub:{
    margin: 5
  },
  welcomeSubCtr:{

    padding: 30
  },
  continueBtn:{

    padding: 30,
    backgroundColor: 'yellow',
    borderWidth: 2.6,
    borderRadius:5,
    margin:15
  },
  continueBtnText:{
    textAlign: 'center',
    fontSize: 15,

  }

})
