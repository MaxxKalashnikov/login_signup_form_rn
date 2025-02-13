import { StyleSheet, Text, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function InputField({isFocusedPassword, setIsFocusedPassword}){
    return (
        <View style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
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
        </View>
    )
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