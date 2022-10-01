import React, { useState } from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      passwordVisible: true,
      eTop:330,
      eLeft:300,
      hTop:1000,
      hLeft:30
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
          <Text style={styles.SignInText}>Sign In</Text>
          <Text style={styles.HelloText}>Hi there! Nice to see you again.</Text>
          <Text
            style={{
              top: 310,
              color: 'rgb(230,105,110)',
              fontSize: 17,
              left: 45,
            }}>
            Email
          </Text>
          <Text
            style={{
              color: 'rgb(230,105,110)',
              fontSize: 17,
              left: 45,
              top: 400,
            }}>
            Password
          </Text>
        </View>

        <View>
          <AwesomeTextInput
            label=""
            customStyles={{
              inputContainer: { width: 300, left: 40, top: 295 },
            }}
          />
          <AwesomeTextInput
            label=""
            customStyles={{
              inputContainer: { width: 300, left: 45, top: 370 },
            }}
            secureTextEntry={this.state.passwordVisible}
          />
        </View>
        <View>
        
          <TouchableOpacity onPress={this.handleShowPassword}>
            <Icon name="eye" size={20} style={{ top: this.state.eTop, left: this.state.eLeft}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleHidePassword}>
            <Icon name="eye-slash" size={20} style={{ top: this.state.hTop, left: this.state.hLeft}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{backgroundColor:"rgb(230,105,110)", width:250, top:360, left:70, borderRadius:10, height:50}} onPress={()=> this.props.navigation.navigate("Home")}>
          <Text style={{fontSize:25, color:"white", top:10, left:90}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("SignUpScreen")}>
          <Text style={{fontSize:15, color:"rgb(230,105,110)", top:450, left:270}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:130,height:50, top:420, left:80}}>
          <Text style={{fontSize:15, color:"gray", top:15, left:0}}>Forgot Password?</Text>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = (StyleSheet.create = {
     SignInText: {
         top: 270, fontSize: 35, left: 45, 
    }
    , HelloText: {
         color: 'gray', fontSize: 15, top: 280, left: 45, 
    }
    , 
}
);
