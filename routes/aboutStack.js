import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import About from "../components/screens/about";

const AboutStack = createStackNavigator();
export default function myStacks() {
  return (
    <AboutStack.Navigator initialRouteName="About" headerMode="screen"
    screenOptions={{
        headerShown: false
      }}
    >
      <AboutStack.Screen
        name="About"
        component={About}
        options={{ title: "About" }}
      />
    </AboutStack.Navigator>
  );
}