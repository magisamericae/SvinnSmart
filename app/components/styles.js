import { StyleSheet} from 'react-native';


export default StyleSheet.create({
    wrapper: {
      flex:1,
      backgroundColor:'#DDDFEA',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      textAlign: 'center'
    
      
      },
      wrapper2:{
        flex: 2, 
        backgroundColor: '#DDDFEA',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center'
        
        
  
      },
      headline:{
        color: '#4D5FF3',
        fontSize:50,
        fontWeight: 'bold',
      
      },
      headline2:{
        color: '#4D5FF3',
        fontSize:45,
        fontWeight: 'bold',
        paddingTop: 50,
        paddingBottom: 20
      },
      description:{
        color: 'black',
        fontSize:30,
      },

      matvarorText:{
        color: '#4D5FF3',
        fontSize:35,
        fontWeight: 'bold',
        alignSelf: 'center'
      
      },
     
      button: {
        height: 100,
        width: 300,
        elevation: 7,
        borderRadius: 20,
        backgroundColor: '#4D5FF3',
        justifyContent: 'center',
      
       
      },
      buttonText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'notoserif',
       
        
      
      },
    
    slide2: {
      flex: 1,
      backgroundColor: '#DDDFEA',
      
    },
   
    
    
    scrollContainer: {
      flex: 1,
      
    },
    
    textInput: {
      alignSelf:'stretch',
      marginLeft:20,
      marginRight:20,
      color: 'black',
      padding: 20,
      backgroundColor: '#DDDFEA',
      borderWidth: 3,
      borderColor: 'black',
      fontSize: 25,
      marginTop: 5,
      marginBottom: 25
    
    },
    addButton: {
      position:'absolute',
      bottom: 0,
      marginBottom: 90,
      width: 90,
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
      borderRadius: 90/2,
      backgroundColor: '#4D5FF3',
      justifyContent: 'center',
    },
    addButtonText: {
      color: 'white',
      fontSize: 44,
    },

    datePicker:{
    alignSelf:'stretch',
    width: null,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 2.5,
    
   
    },
    
    item: {
      flex:1,
      flexDirection: 'row',
      justifyContent:'space-between',
      height:100,
      alignItems: 'center',
      marginBottom:20,
      borderColor: 'black',
      borderWidth: 3,
      margin: 10,
     
     
    },

    noteText: {
      paddingLeft: 20,
      fontSize: 25,
      color: 'black'
    },

    noteDelete:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'tomato',
      padding: 10,
      width: 50,
      height:50,
      marginRight:20,
      borderRadius: 25,
      
    },

    noteDeleteText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize:25,
    }
  
  
  });