import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { CarProvider } from "./context/CarContext";

export default function App() {
  return (
    <CarProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CarProvider>
  );
}