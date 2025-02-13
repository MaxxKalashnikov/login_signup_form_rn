import { Pressable, StyleSheet, Text, View, Image, TextInput, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import LoginForm from './components/LoginForm.js';
import SignUpForm from './components/SignUpForm.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen name="SignUp" component={SignUpForm} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
