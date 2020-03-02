import React, { Component } from 'react';
 
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
 
import DocumentPicker from 'react-native-document-picker';
 
export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      singleFileOBJ: '',
    };
    
  }
  
  async SingleFilePicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      
      });
      console.log('c_item', res);

      this.setState({ singleFileOBJ: res });
      
 
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }
  
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
        <View style={styles.file}>
        {this.state.singleFileOBJ }
        </View>

        
 

      <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SingleFilePicker()}>
      </TouchableOpacity>       
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },
 
  button: {
    width: '100%',
    backgroundColor: '#0091EA',
    borderRadius:9,
  },
 
  buttonText: {
    color: '#fff',
    fontSize: 21,
    padding: 10,
    textAlign: 'center'
  },

  file:{
    width: '100%',
    height:'100%',
  },
 
  text: {
    color: '#000',
    fontSize: 16,
    padding: 10,
    textAlign: 'left'
  },
});