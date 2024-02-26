import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const navigation = useNavigation();
  return (
  
    <View style={StyleSheet.container}>
      <TouchableOpacity style={StyleSheet.navButton} onPress={() => navigation.navigate("Inicio")}>
          <Text>Home</Text>
          </TouchableOpacity>
    </View>
  )
}