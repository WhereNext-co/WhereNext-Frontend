import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet} from "react-native";
import {Link} from "expo-router";
import Icon from 'react-native-ico-material-design';
import { IconName } from "react-icons/si";

var iconHeight = 26;
var iconWidth = 26;

export default class App extends React.Component{
  state = {
    screenText: 'Press a button'
  }

  changeText = (text) => {
    console.log(text + ' has been pressed!')
    this.setState({
      screenText: text
    })
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <View>
          <Text style={{fontSize:30, color:'white'}}>{this.state.screenText}</Text>
          <StatusBar style='light'/>
         </View>

         <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable onPress={() => this.changeText('Favourites')} style={styles.IconBehave}
            android_ripple={{borderless:true, radius:50}}>
              <IconName name='Si3M' height={iconHeight} width={iconWidth} color = '#448aff'/>
            </Pressable>
          </View>
        </View>
       </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3962FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    NavContainer: {
      position: 'absolute',
      alignItems: 'center',
      bottom: 20,
    },

    NavBar: {
      backgroundColor: '#eee',
      width: '90%',
      justifyContent: 'space-evenly',
      borderRadius: 40
    },

    IconBehave: {
      padding: 14
    }
});