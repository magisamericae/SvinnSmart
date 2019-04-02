import React from 'react';
import {
  TouchableOpacity, 
  TouchableWithoutFeedback,
  Keyboard,  
  Text, 
  View, 
  TextInput,
  ScrollView,


} from 'react-native';

import Note from './Note';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import Datepicker from 'react-native-datepicker'
import Moment from 'moment'
import 'moment/locale/sv'


class HomeScreen extends React.Component {
  

  static navigationOptions = { header: null }
  
  render(){
    
    return (
      
     

       <View style={styles.wrapper}>
          
       
          <Text style={styles.headline}>SvinnSmart</Text>   
          
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Add')}> 
          
           
          <View style={styles.button}>
        
          <Text style={styles.buttonText}>Börja här</Text>
     
          </View>
         
          </TouchableOpacity>
    
          </View>
          
     
        
       

    );
  }
}


class SecondScreen extends React.Component {
  
  static navigationOptions = { 
    headerStyle: {
      backgroundColor: '#DDDFEA',
   },
  };

  constructor(props){
    super(props)
      this.state ={
        noteArray: [],
        noteText: '',
        date: '',
     

      };
   
  }
    
  render() {
    let notes = this.state.noteArray.map((choice, key) => {
      return <Note key={key} keychoice={key} choice={choice}
              deleteMethod={() => this.deleteNote(key)} />


    });
    
    
    return (
      <Swiper style={styles.wrapper} 
      showsButtons={false}
      loop={false}
      dot={<View style={{backgroundColor:'rgba(0,0,0,.1)', width: 20, height: 20,borderRadius: 10, marginLeft: 12, marginRight: 12, marginTop: 3, marginBottom: 5,}} />}
      activeDot={<View style={{backgroundColor: '#4D5FF3', width: 20, height: 20, borderRadius: 10, marginLeft: 12, marginRight: 12, marginTop: 3, marginBottom: 5,}} />}>

       <DissmissKeyboard>
      <View style={styles.wrapper2}>
       
    <Text style={styles.headline2}>Lägg till matvara</Text>

      <Text style={styles.description}>Produktbeskrivning</Text>

     <TextInput style= {styles.textInput}
     onChangeText={(noteText) => this.setState({noteText})}
     value={this.state.noteText}
     placeholder='Tillexempel "mjölk"' 
     placeholderTextColor='black'
     underlineColorAndroid='transparent'>

     </TextInput>
  
      
      <Datepicker style= {styles.datePicker}
      androidMode ="spinner"
      format="DD-MM-YYYY"
      date={this.state.date}
      mode="date"
      placeholder="Välj utgångsdatum"
      showIcon={false}
      customStyles={{
        dateText:{
          fontSize: 25,
        
        },
      placeholderText:{
        color:'black',
        fontSize: 25,
       
        
      },
     
        }
      }
    
      
      onDateChange={(date) => this.setState({date})}
      >

      </Datepicker>
      
      

   
     <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
       <Text style={styles.addButtonText}>+</Text>
     </TouchableOpacity>

    
      </View>  
      </DissmissKeyboard>
      
      <View style={styles.slide2}>
      <Text style={styles.matvarorText}>Dina matvaror</Text>
      <ScrollView style={styles.scrollContainer}>
        {notes}

     </ScrollView>

    
          
       </View>

    </Swiper>
    );
  }  

  addNote() {
    
   var vardate = Moment(this.state.date, "DD-MM-YYYY").fromNow();
   var item = this.state.noteText +'\n' + vardate;


 
      this.state.noteArray.push({item});

      this.setState({ noteArray:this.state.noteArray})
      this.setState({ noteText:''});
      
  
   

  }
    
deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray})
  }



  
    }
  

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
   
  },
  Add: {
    screen: SecondScreen,
  },

});
 
const DissmissKeyboard =({children}) =>(
  <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);



export default createAppContainer(AppNavigator);
