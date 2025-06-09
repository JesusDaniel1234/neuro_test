import {Text, View, StyleSheet, FlatList, NativeSyntheticEvent, NativeScrollEvent, Animated} from "react-native";
import React, {useRef, useState} from "react";
import HomeButton from "../../components/HomeButton/HomeButton";
import {images} from "../../constants/images";
import SlideImages from "../../components/SlideImages/SlideImages";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const [index, setIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event([{nativeEvent: {contentOffset: {x: scrollX},}}], {useNativeDriver: false,},)(e);
  }

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log("viewableItems", viewableItems);
    setIndex(viewableItems[0].index);
  }).current

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <SlideImages image={item.image}/>}
          pagingEnabled
          snapToAlignment={"center"}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination data={images} scrollX={scrollX} index={index}/>
      </View>
      <Text style={styles.label}>Bienvenido</Text>
      <View style={styles.rowContainer}>
        <HomeButton label={"Trastornos"}/>
        <HomeButton label={"Diagnósticos"}/>
      </View>
      <View style={styles.rowContainer}>
        <HomeButton label={"Consultas"}/>
        <HomeButton label={"Recursos"}/>
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbf2',
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#3a693b",
    marginVertical: 10
  }
})

