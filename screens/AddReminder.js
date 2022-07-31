import React, {useState} from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput, ScrollView, Platform, Button, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import Task from '../components/card'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import DatePicker from 'react-native-date-picker'
  
export default class AddReminder extends Component {

  constructor() {
    super()
    this.state = {
      isVisible1:false,
      isVisible2:false,
      selectedDate:"",
      setSelectedDate:"",
      selectedTime:"",
      setSelectedTime:"",
    }
  }

  handlePicker1= (date) => {
    this.setState({
      isVisible1:false,
      setSelectedDate:date
    })
    console.log("A date has been picked: ", date);
  }

  showPicker1= () => {
    this.setState({
      isVisible1:true
    })
  }

  hidePicker1= () => {
    this.setState({
      isVisible1:false
    })
  }

  handlePicker2= () => {
    this.setState({
      isVisible2:false,
      setSelectedTime:"a"
    })
    console.log("A time has been picked: ");
  }

  showPicker2= () => {
    this.setState({
      isVisible2:true
    })
  }

  hidePicker2= () => {
    this.setState({
      isVisible2:false
    })
  }

 render() {
   return(
     <>
     <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#f5fcff'}}>
     

     <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          {this.state.setSelectedDate ? this.state.setSelectedDate.toLocaleDateString() : 'No date selected'}
      </Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          {this.state.setSelectedTime ? this.state.setSelectedTime.toLocaleDateString() : 'No Time selected'}
      </Text>

      <TouchableOpacity onPress={this.showPicker1} style={{width:250,height:50,backgroundColor:'#330066',            borderRadius:30, justifyContent:'center', marginTop:15 }}>
        <Text style={{color:'white'}}> Show DatePicker </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.showPicker2} style={{width:250,height:50,backgroundColor:'#330066',            borderRadius:30, justifyContent:'center', marginTop:15 }}>
        <Text style={{color:'white'}}> Show TimePicker </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={this.state.isVisible1}
        onConfirm={this.handlePicker1}
        onCancel={this.hidePicker1}
        mode={'date'}
        datePickerModeAndriod={'spinner'}
        // date={this.setState.selectedDate}
      />
      <DatePicker
        modal
        open={this.showPicker2}
        onConfirm={this.handlePicker2}
        onCancel={this.hidePicker2}
        mode="time"
      />
 
      
     </View>
     </>
   )
 }
}