import {Animated, Dimensions, StyleSheet, View} from "react-native";

const Pagination = ({data, scrollX, index}) => {
  const width = Dimensions.get("screen").width;
  return (
    <View style={styles.container}>
      {data.map((item, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width]
        const dotWhdit = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        })
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#c1eba8", "#3a693b", "#c1eba8"],
          extrapolate: "clamp",
        })
        return <Animated.View key={idx.toString()}
                              style={[styles.dot, {width: dotWhdit, backgroundColor}]}/>
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 5,
    backgroundColor: "#c1eba8",
  },
  dotActive: {
    backgroundColor: "#3a693b",

  }
})