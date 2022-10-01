import React, {useState} from 'react';
import { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { AwesomeTextInput } from 'react-native-awesome-text-input';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      passwordVisible: true,
      eTop:330,
      eLeft:300,
      hTop:1000,
      hLeft:30,
      schools:["math","science","pe"]
    };
  }
  handleShowPassword(){
    this.setState({
      passwordVisible:false,
      eTop:1000,
      hTop:330,
      hLeft:300
    })
  }
  handleHidePassword(){
    this.setState({
      passwordVisible:true,
      hTop:1000,
      eTop:330,
      eLeft:300
    })
  }

  render() {
    return (
      <>
        <View>
          <Text style={styles.SignInText}>Sign Up</Text>
          <Text
            style={{
              top: 140,
              color: 'rgb(230,105,110)',
              fontSize: 17,
              left: 40,
            }}>
            First Name
          </Text>
          <Text
            style={{
              color: 'rgb(230,105,110)',
              fontSize: 17,
              left: 45,
              top: 200,
            }}>
            Last Name
          </Text>
          <Text
            style={{
              top: 260,
              color: 'rgb(230,105,110)',
              fontSize: 17,
              left: 50,
            }}>
            Email
          </Text>
          <Text
            style={{
              color: 'rgb(230,105,110)',
              fontSize: 17,
              left: 55,
              top: 325,
            }}>
            Password
          </Text>
          
          <Text style={{color:"gray", top:650, left:100}}>Have an account?</Text>
          <Text style={{color:"rgb(230,105,110)", top:380, left:65, fontSize:17}}>School</Text>
          
          
          
        </View>
        
        <View>
          <AwesomeTextInput
            label=""
            placeholder="Your First Name"
            customStyles={{
              inputContainer: { width: 300, left: 35, top: 40 },
            }}
          />
          <AwesomeTextInput
            label=""
            customStyles={{
              inputContainer: { width: 300, left: 35, top: 80 },
            }}
          />
          <AwesomeTextInput
            label=""
            customStyles={{
              inputContainer: { width: 300, left: 40, top: 122 },
            }}
          />
          <AwesomeTextInput
            label=""
            customStyles={{
              inputContainer: { width: 300, left: 45, top: 170 },
            }}
            secureTextEntry={this.state.passwordVisible}
          />
          
        </View>
        
        
        <TouchableOpacity style={{backgroundColor:"rgb(230,105,110)", width:250, top:390, left:70, borderRadius:10, height:50}} onPress={()=> this.props.navigation.navigate("Home")}>
          <Text style={{fontSize:25, color:"white", top:10, left:75}}>Continue</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={()=> this.props.navigation.navigate("LoginScreen")}>
          <Text style={{color:"rgb(230,105,110)", top:412, left:219}}>Sign In</Text>
        </TouchableOpacity>
        
      </>
    );
  }
}

const styles = (StyleSheet.create = {
     SignInText: {
         top: 90, fontSize: 35, left: 40, 
    }
    , HelloText: {
         color: 'gray', fontSize: 15, top: 280, left: 45, 
    }
    , 
}
);