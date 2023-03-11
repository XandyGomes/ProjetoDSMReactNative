import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Main = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = () => {
    //Aqui poderá implementar a lógica de login
    console.log(`Email: ${email}, Password: ${password}`)
  }

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="E-mail"
      value={email}
      onChangeText={setEmail}
      />
      <TextInput
      style={styles.input}
      placeholder="Senha"
      value={password}
      onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button:{
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default Main;