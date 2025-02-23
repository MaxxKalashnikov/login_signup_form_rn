import { Pressable, StyleSheet, Text, View, Image, TextInput, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';

export default function LoginForm({navigation}) {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  return (
    <View style={{     
        flex:1,  
        flexDirection: 'column', // MAIN AXIS
        backgroundColor: "rgb(242, 241, 241)"
      }}>

      <View style={{flex: 1,flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-end"}}>
              {/* <AntDesign name="arrowleft" size={44} color="black" style={{margin: 40}}/> */}
              <Image source={require('../assets/orangeThing.png')}/>
      </View>
      <View style={{flex: 2, alignItems: "flex-start", justifyContent: "center", marginLeft: 20}}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please sign in to continue.</Text>
      </View>


      <View style={{alignItems: "center", justifyContent: "center", marginTop: -20,}}>
        <View style={{width: "90%", alignItems: "flex-start", justifyContent: "center", marginLeft: 70}}>
          {isFocusedEmail ? 
              <Text style={[styles.label, isFocusedEmail && styles.labelFocused]}>
                  Email
              </Text>
              :
              ""
          }
        </View>
        <View style={{width: "90%", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginBottom: 15}}>  
          <TextInput 
              style={isFocusedEmail ? {...styles.inputFocused} : {...styles.input}} 
              placeholder= {isFocusedEmail ? "" : "Email"}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
            />
          <FontAwesome name="envelope-o" size={20} color="black" style={{position: "absolute", left: 8}}/>
        </View>
        <View style={{width: "90%", alignItems: "flex-start", justifyContent: "center", marginLeft: 70}}>
          {isFocusedPassword ? 
              <Text style={[styles.label, isFocusedPassword && styles.labelFocused]}>
                  Password
              </Text>
              :
              ""
          }
        </View>
       <View style={{...styles.defaultInputContainer}}>
        <View style={[styles.defaultInputContainerInside]}>
            <TextInput 
                style={[styles.input, isFocusedPassword && styles.inputFocused]} 
                placeholder= {isFocusedPassword ? "" : "Password"}
                onFocus={() => setIsFocusedPassword(true)}
                onEndEditing={() => setIsFocusedPassword(false)}
              />
            <AntDesign name="lock" size={24} color="black" style={{position: "absolute", left: 7}}/>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-end", width: "100%", position: "absolute", right: 20}}> 
              <Pressable onPress={() => alert("Forgot password button pressed")} style={{position: "absolute"}}>
                <Text style={{fontSize: 13, fontWeight: "900", color: "rgb(251, 184, 77)"}}>FORGOT</Text>
              </Pressable>
            </View>
              
        </View>
        </View>        
      </View>


      <View style={{flex: 3, flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-end", marginRight: 20, marginTop: 20}}>
        <View style={styles.shadowContainer}>
          <LinearGradient
            colors={['rgb(251, 206, 133)', 'rgb(251, 184, 77)']} // Gradient colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
            >
            <Pressable style={styles.pressable} onPress={() => alert("LOGIN button pressed")}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.buttonText}>LOGIN</Text>
                <AntDesign name="arrowright" size={24} color="white" style={{ marginLeft: 10 }} />
              </View>
            </Pressable>
          </LinearGradient>
        </View>
      </View>


      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 25 }}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ fontWeight: "bold", color: "rgb(251, 184, 77)", marginLeft: 5 }}>Sign up</Text>
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
    fontWeight: "bold" 
  },
  labelFocused: {
    fontSize: 12,
    fontWeight: "100"
  }
});