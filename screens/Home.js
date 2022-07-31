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
        <View style={styles.titleText}>
          <Text style={styles.titleText}>Reminder App</Text>
        </View>
        <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate("AddReminder")}>
          <Text style={styles.text}> Add Reminder </Text>
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

const styles = StyleSheet.create({
  text: {
    color:"white",
    fontSize:30,
    marginLeft:13,
    marginTop:8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  routeCard: {
        flex:0.1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: -10,
        borderRadius: 30,
        backgroundColor: 'black'
  },
  addRem: {
        width:150,
        length:50,
        borderRadius: 10,
        borderWidth:2,
        backgroundColor: 'black',
        marginTop: 15,
        marginLeft: 90
  },
  titleText: {
    fontSize:50,
  },
  addRemT: {
    fontSize:20,
    color:'yellow'
  },
  modalBg:{
    flex:1,
    backgroundColor:"black",
    justifyContent:'center',
    alignItems:'center'
  },
  textInputS:{
    borderWidth: 2,
    borderColor:'black'
  }
});
