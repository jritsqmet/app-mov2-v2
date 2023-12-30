import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function ListaImagenesScreen() {
  return (
    <View>
      <Text>ListaImagenesScreen</Text>
      <TextInput 
        placeholder='Ingrese titulo de la imagen'
      />
       <TextInput 
        placeholder='URL'
      />
    </View>
  )
}

const styles = StyleSheet.create({})