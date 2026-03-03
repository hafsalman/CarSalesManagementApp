import React, { useContext } from "react";
import { View } from "react-native";
import { CarContext } from "../context/CarContext";
import CarList from "../components/CarList";

export default function SoldCarsScreen() {
  const { cars } = useContext(CarContext);

  const soldCars = cars.filter((car) => car.status === "Sold");

  return (
    <View style={{ flex: 1 }}>
      <CarList cars={soldCars} />
    </View>
  );
}