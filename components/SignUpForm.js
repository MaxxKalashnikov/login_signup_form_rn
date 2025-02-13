import { Pressable, StyleSheet, Text, View, Image, TextInput, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';

export default function SignUpForm() {
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
                <Pressable onPress={() => alert("Back arrow pressed")}>
                <AntDesign name="arrowleft" size={35} color="black" style={{marginTop: 60, marginLeft: 20}}/> 
                </Pressable>
              <Image source={require('../assets/orangeThing.png')}/>
      </View>
      <View style={{flex: 2, alignItems: "flex-start", justifyContent: "center", marginLeft: 20}}>
        <Text style={styles.title}>Create account</Text>
      </View>


      <View style={{alignItems: "center", justifyContent: "center", marginTop: -20,}}>
      <View style={{width: "90%", alignItems: "flex-start", justifyContent: "center", marginLeft: 70}}>
          {isFocusedFullName ? 
              <Text style={[styles.label, isFocusedFullName && styles.labelFocused]}>
                  Full name
              </Text>
              :
              ""
          }
        </View>
        <View style={{width: "90%", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginBottom: 15}}>  
          <TextInput 
              style={isFocusedFullName ? {...styles.inputFocused} : {...styles.input}} 
              placeholder= {isFocusedFullName ? "" : "Full name"}
              onFocus={() => setIsFocusedFullName(true)}
              onBlur={() => setIsFocusedFullName(false)}
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
            />
          <MaterialIcons name="person-outline" size={24} color="black" style={{position: "absolute", left: 8}}/>
        </View>
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
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
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
                placeholderTextColor="rgba(0, 0, 0, 0.3)"
                secureTextEntry
              />
            <AntDesign name="lock" size={24} color="black" style={{position: "absolute", left: 7}}/>
        </View>
        </View> 

        <View style={{width: "90%", alignItems: "flex-start", justifyContent: "center", marginLeft: 70}}>
          {isFocusedConfirm ? 
              <Text style={[styles.label, isFocusedConfirm && styles.labelFocused]}>
                  Confirm password
              </Text>
              :
              ""
          }
        </View>
       <View style={{...styles.defaultInputContainer}}>
        <View style={{...styles.defaultInputContainerInside}}>
            <TextInput 
                style={[styles.input, isFocusedConfirm && styles.inputFocused]} 
                placeholder= {isFocusedConfirm ? "" : "Confirm password"}
                onFocus={() => setIsFocusedConfirm(true)}
                onEndEditing={() => setIsFocusedConfirm(false)}
                placeholderTextColor="rgba(0, 0, 0, 0.3)"
                secureTextEntry
              />
            <AntDesign name="lock" size={24} color="black" style={{position: "absolute", left: 7}}/>
        </View>
        
        </View>        
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
        <Pressable onPress={() => alert("Sign in text clicked")}>
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