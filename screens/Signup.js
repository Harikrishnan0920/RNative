import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput, Button, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = ({forsignin}) => {
  const navigation = useNavigation();
const [fullName,setFullName]=useState()
const [email,setEmail]=useState()
const [phone,setPhone]=useState()

let otpgenerator=()=>{

  
  navigation.navigate('YourOrders'); // Replace 'AnotherScreen' with the name of your target screen

}


    return (
        <View style={styles.container}>
          {/*<View style={styles.box2}></View>
          <View style={styles.box3}>
            <View style={styles.innerBox}></View>
          </View> */}
          <View style={[styles.box1,{top:"50vh"}]}>
          <Text style={styles.welcome} >Welcome</Text>
          <View >
            <Text style={{right:"30 px",bottom:"17px"}} >Sign Up</Text>
            <TouchableOpacity>
            <TextInput style={[styles.inputbox, ]} value={fullName} onChange={(text)=>{setFullName(text.target.value)}} placeholder='Full Name'></TextInput>
            <TextInput style={[styles.inputbox,]}  value={email} onChange={(text)=>{setEmail(text.target.value)}} placeholder='Email'></TextInput>
            <TextInput style={[styles.inputbox, ]}  value={phone} onChange={(text)=>{setPhone(text.target.value)}} placeholder='Phone Number'></TextInput>

            </TouchableOpacity>
            <TouchableOpacity >
            <Pressable style={[styles.Button]} onPress={() => otpgenerator()}><Text style={{color:"#ffffff",left:"32vw",position: "absolute"}}>Get Otp</Text></Pressable>

            </TouchableOpacity>
          </View>

          <View>
        <Text style={{left:"12vw",top:"94vh",left:"18vw",position: "fixed"}} onPress={(navigation.navigate("Signin"))} >Already have an account? Sign In</Text>
     
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
//   backgroundImage: 'url("../assets/v1_28.png")',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',

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
    left: "47vw",
    color:"#3f4542"
  },

  inputbox: {
backgroundColor: "#ffffff",
  padding: '9px',
  textAlign: 'left',
  borderRadius: '7px',
  width: '73vw',
  margin: '10px',
  },
  Button: {
    width: "74vw",
    height:"6vh",
    margin: '8px',
    paddingLeft: '114px',
    backgroundColor: '#008445',
    position: 'inherit',
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

export default Signup;
