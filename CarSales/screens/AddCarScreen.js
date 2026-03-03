import React, { useContext } from "react";
import { View } from "react-native";
import AddCarForm from "../components/AddCarForm";
import { CarContext } from "../context/CarContext";

export default function AddCarScreen() {
  const { addCar } = useContext(CarContext);

  return (
    <View>
      <AddCarForm onAddCar={addCar} />
    </View>
  );
}