import { Pressable, StyleSheet, Text, View, Image, TextInput, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import LoginForm from './components/LoginForm.js';
import SignUpForm from './components/SignUpForm.js';

export default function App() {
    return (
      <SignUpForm/>
    )
}
