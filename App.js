import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/screens/Home/Home";
import {StatusBar} from "expo-status-bar";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import {TouchableOpacity} from "react-native";

const Stack = createNativeStackNavigator();

const InfoIcon = () => {
  return (
    <TouchableOpacity>
      <AntDesign name="infocirlceo" size={24} color="black"/>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: "#f7fbf2"},
          headerTitleAlign: "center",
          headerRight: () => <InfoIcon/>,
        }}>
        <Stack.Screen name="Home" component={Home} options={{title: "NeuroTest"}}/>
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

