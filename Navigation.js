import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./component/Home.js";
import Detail from "./component/Detail.js";

export function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </NavigationContainer>
  );
}
