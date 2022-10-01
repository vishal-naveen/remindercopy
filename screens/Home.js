import React, {useState} from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput, ScrollView, Platform } from 'react-native';
import Constants from 'expo-constants';
import Task from '../components/card'
import DateTimePicker from '@react-native-community/datetimepicker'

export default class Home extends Component {


  constructor() {
    super()
    this.state={
      modalOpen:false,
      setModalOpen:false,
      title: '',
      taskItems:[]
    }
  }
  
  printText() {
    console.log("taskItems: " + this.state.taskItems)
    console.log("title: " + this.state.title)
    this.setState({
      taskItems:[...this.state.taskItems,this.state.title],
      modalOpen:false
    })
  }


  render () {
    
    return (
      <>
        <View style={{fontSize:50}}>
          <Text style={{fontSize:35, fontFamily:"sans-serif-condensed", top:85, left:30}}>My Reminders</Text>
        </View>
        <TouchableOpacity style={styles.plusButttonTouch} onPress={console.log("this is plus button")}>
        <Text style={styles.plusButtonText}>
         +
        </Text>
        </TouchableOpacity>
        <ScrollView>
          {this.state.taskItems.map((items,index)=> {
            return(
              <Task text={items}></Task>
            )
          })}
        </ScrollView>
      </>
    );
  }
}

const styles = (StyleSheet.create = {
     plusButtonTouch: {
         marginLeft:50, marginRight:50, marginTop: -10,
    }
    , plusButtonText: {
         color:"rgb(230,105,110)", fontSize:35, marginLeft:250, marginTop:50
    }
    , 
}
);