import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import CentreConsole from './centre_console';
import TouchPad from './touch_pad';
import GameContainerSub from './game_ctr_sub';
import ScoreBar from './score-bar';
import TimerBar from './timer-bar';
import TimerMixin from 'react-timer-mixin';
import Menu from './menu';
import WelcomeScreen from './welcomeScreen';

class GameContainer extends Component{

  constructor(){

    super();

    this.state = {
      guessedColor: 'Guess Color',
      generatedColor:'white',
      result:'',
      score: 0,
      gameOver: false,
      timer: 0,
      timer1:{bgC:null},
      timer2:{bgC:null},
      timer3:{bgC:null},
      timer4:{bgC:null},
      timer5:{bgC:null},
      timer6:{bgC:null},
      tODisabled: false,
      welcomeMessage:'Tap To Start!',
      consoleDisabled:false,
      highScore:0
    };

    this.tpClickYellow = this.tpClickYellow.bind(this);
    this.tpClickBlue = this.tpClickBlue.bind(this);
    this.tpClickRed = this.tpClickRed.bind(this);
    this.tpClickGreen = this.tpClickGreen.bind(this);
    this.startGame = this.startGame.bind(this)
    this.stopTimer = this.stopTimer.bind(this)

  }

  // componentWillMount(){
  //   this.generateColor()
  // }
////////////////////////////
  startTimer(){
    if(this.state.timer < 6){
      this.setState({
        timer: this.state.timer += 1
      })
      this._interval = setTimeout(() => {
        this.renderTimer();
        this.startTimer()
      }, 50);
    } else {
      console.log("Game Over")
      return;
    }
  }

  highScoreChecker(){
    if(this.state.score > this.state.highScore){
      this.setState({
        highScore : this.state.score
      })
      console.log('NEW HIGH SCORE');
    }
  }

  startGame(){

    this.resetGame();
    this.generateColor();
    this.setState({tODisabled:false})

    this.setState({
      timer:0,
      welcomeMessage:'',
      consoleDisabled:true,

    })
    this._intervalTwo = setTimeout(() => {
      this.renderTimer()
      this.startTimer();
    }, 50)
  }

  resetGame(){

    this.setState({
      timer:0,
      score:0,
      tODisabled: false,
      guessedColor: '',
      consoleDisabled:false
    })


  }

  stopTimer(){
    clearInterval(this._interval)
    this.setState({
      timer:0
    })
    this._intervalTwo = setTimeout(() => {
      this.renderTimer()
    }, 40)

  }

  renderTimer(){
    if(this.state.timer === 0){
      this.setState({
        timer1:{bgC:null},
        timer2:{bgC:null},
        timer3:{bgC:null},
        timer4:{bgC:null},
        timer5:{bgC:null},
        timer6:{bgC:null}
      })
    } else if(this.state.timer === 1){
      this.setState({timer1:{bgC: 'green'}})
    }  else if (this.state.timer === 2){
      this.setState({timer2:{bgC:'blue'}})
    } else if (this.state.timer === 3){
      this.setState({timer3:{bgC:'yellow'}})
    } else if (this.state.timer === 4){
      this.setState({timer4:{bgC:'darkorange'}})
    } else if (this.state.timer === 5){
      this.setState({timer5:{bgC:'red'}})
    } else if (this.state.timer === 6){
      this.setState({
        timer6:{bgC:'purple'},
        gameOver:true
      })
      this.gameOver();
    }
  }

/////////////////////////////////

  checkResultOfTurn(color){
    if(color === this.state.generatedColor){
      this.generateColor();
      this.resetTimer();
      this.setState({
        score: this.state.score += 1
      })

    } else {
      this.state.gameOver = true;
      this.gameOver();
      this.renderTimer()
      clearInterval(this._interval)
    }
  }

  gameOver(){
    console.log('game is over')
    this.highScoreChecker()
    this.setState({
      tODisabled:true,
      welcomeMessage:`Game Over - Tap to restart!`,
      consoleDisabled:false
    })
  }

  resetTimer(){
    console.log('reseting timer')
    this.setState({
      timer:0
    })
  }

  tpClickYellow(){
    this.setState({
      guessedColor:'yellow'
    })
    this.checkResultOfTurn('yellow');

  }
  tpClickRed(){
    this.setState({
      guessedColor:'red'
    })
    this.checkResultOfTurn('red');
  }
  tpClickGreen(){
    this.setState({
      guessedColor:'green'
    })
    this.checkResultOfTurn('green');

  }
  tpClickBlue(){
    this.setState({
      guessedColor:'blue'
    })
    this.checkResultOfTurn('blue');
  }


  generateColor(){
    this.setState({
      generatedColor: 'white'
    })
    this._interval3 = setTimeout(() => {
      this.colors = ['red', 'blue', 'yellow', 'green'];
      const randomNum = Math.floor(Math.random() * 4)
      this.setState({
        generatedColor: this.colors[randomNum]
      })
    }, 100);
  }

  checkIfGameIsOver(){
    if(!this.state.gameOver){
      console.log('game not over')
    } else {
      console.log('game is over')
      this.gameOver();
    }

  }



  render(){
    // console.log('something')
    return(
      <View style={{flex:1}}>
        <WelcomeScreen />
        <TimerBar
          timer={this.state.timer}
          t1Col={this.state.timer1.bgC}
          t2Col={this.state.timer2.bgC}
          t3Col={this.state.timer3.bgC}
          t4Col={this.state.timer4.bgC}
          t5Col={this.state.timer5.bgC}
          t6Col={this.state.timer6.bgC}
        />

        <View style={styles.mainView}>

          <TouchableOpacity
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              margin:5
            }}
            disabled={this.state.tODisabled}
            onPress={this.tpClickYellow}
          >
            <TouchPad color="yellow"/>
          </TouchableOpacity>

          <View style={styles.toolbarTitle}></View>

          <TouchableOpacity
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              margin:5
            }}
            disabled={this.state.tODisabled}
            onPress={this.tpClickGreen}>
            <TouchPad style={styles.touchPadGreen}  color="green"/>
          </TouchableOpacity>

        </View>

        <TouchableOpacity disabled={this.state.consoleDisabled} style={{flex:1, justifyContent:'center'}} onPress={this.startGame} >
          <CentreConsole
            msg={this.state.welcomeMessage}
            isGameOver={this.checkIfGameIsOver}
            gColor={this.state.generatedColor}
            result={this.state.result}
          />
        </TouchableOpacity>

        <View style={styles.mainView}>
          <TouchableOpacity
            onPress={this.tpClickRed}
            disabled={this.state.tODisabled}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              margin:5
            }}
            >
            <TouchPad style={styles.touchPadRed} color="red"/>
          </TouchableOpacity>

          <View style={styles.toolbarTitle}></View>

          <TouchableOpacity
            disabled={this.state.tODisabled}
            onPress={this.tpClickBlue}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              margin:5
            }}>
            <TouchPad style={styles.touchPadBlue} color="blue"/>
          </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ScoreBar score={this.state.score} highScore={this.state.highScore}  />
          <Menu highScore={this.state.highScore} />
        </View>


      </View>
    );
  }

}

const styles = StyleSheet.create({
  toolbar:{
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row',
    height: 150
  },
  scorebar:{
    flex: 0.5,
    height: 10,
    backgroundColor: 'pink',
  },

  mainView:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  toolbarButton:{
    width: 50,
  },
  toolbarTitle:{
    flex:1
  },
  touchPadBlue: {
    width: 160,
    height: 160,
    // margin:20,
    backgroundColor: 'blue',
    borderRadius: 75,
    justifyContent: 'center',
  },
  touchPadRed: {
    width: 160,
    height: 160,
    margin:20,
    backgroundColor: 'red',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',

  },
  touchPadYellow: {
    width: 160,
    height: 160,
    margin:20,
    backgroundColor: 'yellow',
    borderRadius: 75,
    // justifyContent: 'center',
  },
  touchPadGreen: {
    width: 160,
    height: 160,
    margin:20,
    backgroundColor: 'green',
    borderRadius: 75,
    justifyContent: 'center',
  }
})

export default GameContainer;
