import React, { Component } from 'react';
import {
  Text,
  View, 
  TouchableOpacity,

} from 'react-native';
import styles from './styles';
export default class Note extends Component {
 
  render() {
    return(
      <View key={this.props.keychoice} style={styles.item}>

      <Text style={styles.noteText}>{this.props.choice.item}</Text>
      

      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
      <Text style={styles.noteDeleteText}>X</Text>
      </TouchableOpacity>

      </View>
    
    );
  }



    }
