import {Dimensions, Image, ImageProps, StyleSheet, View} from "react-native";
import React from "react";

const {width} = Dimensions.get("screen");

const SlideImages = ({image}: {image: ImageProps}) => {
  return (
    <View style={styles.containerImage}>
      <Image source={image} style={styles.image} resizeMethod={"auto"}/>
    </View>
  )
}

export default SlideImages;

const styles = StyleSheet.create({
  containerImage: {
    width,
    height: 300,
    borderRadius: 20,
    marginBottom: 10,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#edf7e5",
    elevation: 5
  }
})