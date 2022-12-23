import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./component/Home.js";
import Detail from "./component/Detail.js";
const Stack = createNativeStackNavigator();
export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
