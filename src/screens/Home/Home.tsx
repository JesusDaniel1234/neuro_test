import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Holaaaa!</Text>
      <TouchableOpacity style={styles.button}>
        <View><Text>Cuestionario</Text></View>
      </TouchableOpacity>
    </View>
)
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#edf7e5',
    padding: 15,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#6d7b67',
  }
})

