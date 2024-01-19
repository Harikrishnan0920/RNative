
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput, Button, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({forsignin}) => {
  const navigation = useNavigation();
const [otpClicked,setOtpClicked]=useState("")
let otpgenerator=()=>{
if(otpClicked){
  
  navigation.navigate('YourOrders'); // Replace 'AnotherScreen' with the name of your target screen
}else{
  setOtpClicked(Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)))
}
}


    return (
        <View style={styles.container}>
           
          {/*<View style={styles.box2}></View>
          <View style={styles.box3}>
            <View style={styles.innerBox}></View>
          </View> */}
          <View style={[styles.box1,{top:forsignin?"40vh":"68vh"}]}>
          <Text style={styles.welcome} >Welcome</Text> 
          <View >
            <Text style={{right:"30 px"}} >Sign In</Text>
            <TouchableOpacity>
            <TextInput style={[styles.inputbox, forsignin && styles.additionalInputBox]} value={otpClicked} onChange={(text)=>{setOtpClicked(text.target.value)}} placeholder='Please enter your number'></TextInput>

            </TouchableOpacity>
            <TouchableOpacity >
            <Pressable style={styles.Button} onPress={() => otpgenerator()}><Text>{!otpClicked ? "Get OTP" : "Enter OTP"}</Text></Pressable>

            </TouchableOpacity>
          </View>

          <View>

            <Pressable style={{top:"36px"}} onPress={(navigation.navigate("Signup"))}> <Text>Don’t have an account? Register Now</Text></Pressable>
          </View>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  // backgroundImage: 'url("../assets/v1_28.png")',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',

  },
  box1: {
    backgroundColor: "",
    position: "fixed",
    width: '-webkit-fill-available',
    margin: '-20px',
    height: '28vh',
    padding: '54px',
   
    

  },
  welcome: {
position: "absolute",
    bottom: "24vh",
    left: "47vw"
  },

  inputbox: {
    background: '#FFFFFF',
  padding: '9px',
  textAlign: 'center',
  borderRadius: '7px',
  width: '73vw',
  margin: '10px',
  },
  Button: {
    margin: '8px',
    paddingLeft: '114px',
    backgroundColor: '#008445',
    color: '#ddeee5',
    height: '42px',
    position: 'inherit',
    width: '91%',
    borderRadius: '7px',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginTop: 10,
  },
  signInContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  signInText: {
    fontSize: 18,
  },
  phoneNumberContainer: {
    marginTop: 5,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  phoneNumberText: {
    fontSize: 16,
  },
  getOTPContainer: {
    marginTop: 5,
    padding: 10,
    backgroundColor: 'lightgreen',
  },
  getOTPText: {
    fontSize: 16,
  },
  registerContainer: {
    marginTop: 10,
  },
  registerText: {
    fontSize: 16,
    color: 'blue',
  },
  additionalInputBox: {
    position: 'absolute',
    left: 0,
    right: 0,
    // Add other additional input box styles as needed
  },
});

export default HomeScreen;
