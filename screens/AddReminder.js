import React, {useState} from 'react';
import { Component } from 'react';
import Constants from 'expo-constants';
import Task from '../components/card';
import DateTimePicker from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput, ScrollView, Platform, Button, StatusBar } from 'react-native';


export default class AddReminder extends Component {

  constructor() {
    super()
    this.state = {
      isVisible1:false,
      isVisible2:false,
      setSelectedDate:"",
      setSelectedTime:"",
      inputHeight: 0,
      subjects:["math","science","pe"]
    }
  }

  handlePicker1= (date) => {
    this.setState({
      isVisible1:false,
      setSelectedDate:date
    })
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

  handlePicker2= (date) => {
    this.setState({
      isVisible2:false,
    })
    console.log("1-raw time: ", date)
    this.clockconvert(date);
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

  clockconvert(date){
    date = date.toString();
    date= date.slice(16,21)
    console.log("2-splited time: ",date)
    

    if(date.substring(0,2)=="01"){
      date=("1:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="02"){
      date=("2:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="03"){
      date=("3:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="04"){
      date=("4:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="05"){
      date=("5:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="06"){
      date=("6:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="07"){
      date=("7:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="08"){
      date=("8:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="09"){
      date=("9:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="10"){
      date=("10:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="11"){
      date=("11:"+date.substring(3,5)+" am")

     console.log(date)
    }
    if(date.substring(0,2)=="12"){
      date=("12:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="13"){
      date=("1:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="14"){
      date=("2:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="15"){
      date=("3:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="16"){
      date=("4:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="17"){
      date=("5:"+date.substring(3,5)+" pm")

     console.log(date)
    }

    if(date.substring(0,2)=="18"){
      date=("6:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="19"){
      date=("7:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="20"){
      date=("8:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="21"){
      date=("9:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="22"){
      date=("10:"+date.substring(3,5)+" pm")

     console.log(date)
    }
    if(date.substring(0,2)=="23"){
      date=("11:"+date.substring(3,5)+" pm")

     console.log(date)
    }

    if(date.substring(0,2)=="00"){
      date=("12:"+date.substring(3,5)+" am")

     console.log(date)
    }

     console.log("4-end date is ", date)

     this.setState({
       setSelectedTime:date
     }) 
  }

  handleSizeChange = event => {
    console.log('_handleSizeChange ---->', event.nativeEvent.contentSize.height);
    
    this.setState({
      inputHeight: event.nativeEvent.contentSize.height
    });
  };

  

 render() {
   return(
     <>
     <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#f5fcff'}}>
     

    

     <Text style={{ fontSize: 27, fontWeight: 'bold', bottom:84, left:61 }}>
          {this.state.setSelectedDate ? this.state.setSelectedDate.toLocaleDateString() : ' '}
      </Text>
      <Text style={{ fontSize: 27, fontWeight: 'bold', bottom:38, left:52 }}>
          {this.state.setSelectedTime ? this.state.setSelectedTime : ' '}
      </Text>

      <TouchableOpacity onPress={this.showPicker1} style={{width:185,height:50, justifyContent:'center', marginTop:-160, marginRight:200, }}>
        <Text style={{color:'#1473D9',fontSize:27}}>  Selected Date: </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.showPicker2} style={{width:185,height:50, justifyContent:'center', marginBottom:400, marginRight:200, top:30,  }}>
        <Text style={{color:'#1473D9', fontSize:27}}>  Selected Time: </Text>
      </TouchableOpacity> 

      <DateTimePicker
        isVisible={this.state.isVisible1}
        onConfirm={this.handlePicker1}
        onCancel={this.hidePicker1}
        mode={'date'}
        datePickerModeAndriod={'spinner'}
        // date={this.setState.selectedDate}
      />
      <DateTimePicker
        isVisible={this.state.isVisible2}
        onConfirm={this.handlePicker2}
        onCancel={this.hidePicker2}
        mode={'time'}
        datePickerModeAndriod={'spinner'}
        is24Hour={false}
      />
      <View style={{bottom:330, right:85}}>
      <SelectDropdown
        data={this.state.subjects}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
      />
      </View>
      <TouchableOpacity style={{flex:0.1,right: 70,marginTop: -10,borderRadius: 30,
        backgroundColor: 'black'}} 
        onPress={()=> this.props.navigation.navigate("Home")}>
          <Text style={{color:"white",fontSize:30,marginLeft:13,marginTop:8}}> Cancel </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:0.1,left:80,marginTop: -43,borderRadius: 30,
        backgroundColor: 'black'}} 
        onPress={()=> this.props.navigation.navigate("Home")}>
          <Text style={{color:"white",fontSize:30,marginLeft:13,marginTop:8}}> Add </Text>
      </TouchableOpacity>
     </View>
     </>
   )
 }
}