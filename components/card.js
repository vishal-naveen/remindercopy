import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
const Task = (props) => {
  return (
        <TouchableOpacity
          style={{
            width: 300,
            justifyContent:"center",
            height: 70,
            backgroundColor: 'yellow',
            borderRadius: 20,
            marginLeft: 5,
            marginBottom: 5,
            alignItems:"center",
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginLeft: 25,
              textAlign:"center",
            }}>
            {props.text}
          </Text>
        </TouchableOpacity>
  );
};
export default Task;
