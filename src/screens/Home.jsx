import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <Text>Home</Text>
      <TouchableOpacity style={StyleSheet.navButton} onPress={() => navigation.navigate("Perfil")}>
          <Text>Perfil</Text>
          </TouchableOpacity>
      <TouchableOpacity style={StyleSheet.navButton} onPress={() => navigation.navigate("Contato")}>
          <Text>Contato</Text>
          </TouchableOpacity>
    </View>
  )

};
