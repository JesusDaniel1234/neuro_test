import {TouchableOpacity, Text, StyleSheet} from "react-native";
import React from "react";

interface HomeButtonProps {
  label: string,
  style?: object
}

const HomeButton = ({label, style}: HomeButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={() => {
    }} style={[styles.button, {...style}]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default HomeButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#edf7e5',
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#edf7e5',
    width: '45%',
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color:"#3a693b",
    textAlign: "center",
  }
})