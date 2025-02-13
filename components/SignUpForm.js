import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import InputField from './InputFieldPassword';
import InputFieldConfirmPassword from './InputFieldConfirmPassword';
import InputFieldEmail from './InputFIeldEmail';
import InputFieldFullName from './InputFieldFullName';

export default function SignUpForm({navigation}) {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedFullName, setIsFocusedFullName] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false)
  const [isFocusedConfirm, setIsFocusedConfirm] = useState(false)

  return (
    <View style={{     
        flex:1,  
        flexDirection: 'column', // MAIN AXIS
        backgroundColor: "rgb(242, 241, 241)"
      }}>

      <View style={{flex: 2,flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between"}}>
                <Pressable onPress={() => navigation.navigate("Login")}>
                <AntDesign name="arrowleft" size={35} color="black" style={{marginTop: 60, marginLeft: 20}}/> 
                </Pressable>
              <Image source={require('../assets/orangeThing.png')}/>
      </View>
      <View style={{flex: 2, alignItems: "flex-start", justifyContent: "center", marginLeft: 20}}>
        <Text style={styles.title}>Create account</Text>
      </View>


      <View style={{alignItems: "center", justifyContent: "center", marginTop: -20,}}>
        <InputFieldFullName isFocusedFullName={isFocusedFullName} setIsFocusedFullName={setIsFocusedFullName}/>
        <InputFieldEmail isFocusedEmail={isFocusedEmail} setIsFocusedEmail={setIsFocusedEmail}/>
        <InputField isFocusedPassword = {isFocusedPassword} setIsFocusedPassword = {setIsFocusedPassword}/>
        <InputFieldConfirmPassword isFocusedConfirm={isFocusedConfirm} setIsFocusedConfirm={setIsFocusedConfirm}/>
      </View>

      

      <View style={{flex: 3, flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-end", marginRight: 20, marginTop: 20}}>
        <View style={styles.shadowContainer}>
          <LinearGradient
            colors={['rgb(251, 206, 133)', 'rgb(251, 184, 77)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
            >
            <Pressable style={styles.pressable} onPress={() => alert("SIGN UP button clicked")}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.buttonText}>SIGN UP</Text>
                <AntDesign name="arrowright" size={24} color="white" style={{ marginLeft: 10 }} />
              </View>
            </Pressable>
          </LinearGradient>
        </View>
      </View>


      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 25 }}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold", color: "rgb(251, 184, 77)", marginLeft: 5 }}>Sign in</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  defaultInputContainer: {
    width: "90%", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "flex-start", 
    marginBottom: 15
  },
  defaultInputContainerInside: {
    width: "90%", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "flex-start", 
    marginBottom: 15,
    width: "100%",
  },
  focusedInput: {
    width: "90%", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "flex-start", 
    marginBottom: 15,
    height: 50,
    borderRadius: 25, 
    fontWeight: "bold", 
  },
  shadowContainer: {
    width: "40%",
    height: 50,
    borderRadius: 25, 
    backgroundColor: "transparent", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 5, 
  },
  shadowInputContainer: {
    width: "100%", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "flex-start", 
    marginBottom: 15,
    height: 50,
    borderRadius: 25, 
    backgroundColor: "transparent", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 10, 
    elevation: 10, 
  },
  
  title: { 
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  subtitle: {
    fontSize: 16,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgb(242, 241, 241)",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    paddingStart: 40,
  },
  gradientButton: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputFocused: {
    width: "100%",
    height: 50,
    backgroundColor: "rgb(242, 241, 241)",
    paddingStart: 40,
    borderColor: "rgb(85, 85, 85)",
    borderWidth: 2,
    fontWeight: "bold",
    
  },
  labelFocused: {
    fontSize: 12,
    fontWeight: "100"
  }
});