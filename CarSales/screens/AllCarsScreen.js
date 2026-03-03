import React, { useContext } from "react";
import { View } from "react-native";
import { CarContext } from "../context/CarContext";
import CarList from "../components/CarList";

export default function AllCarsScreen({ navigation }) {
  const { cars, deleteCar, markAsSold } = useContext(CarContext);

  return (
    <View style={{ flex: 1 }}>
      <CarList
        cars={cars}
        onDelete={deleteCar}
        onMarkSold={markAsSold}
        navigation={navigation}
      />
    </View>
  );
}