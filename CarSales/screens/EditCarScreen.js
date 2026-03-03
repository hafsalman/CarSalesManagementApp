import React, { useContext, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { CarContext } from "../context/CarContext";

export default function EditCarScreen({ route, navigation }) {
  const { car } = route.params;
  const { updateCar } = useContext(CarContext);

  const [name, setName] = useState(car.name);
  const [company, setCompany] = useState(car.company);
  const [price, setPrice] = useState(car.price);
  const [modelYear, setModelYear] = useState(car.modelYear);

  const handleUpdate = () => {
    updateCar(car.id, { name, company, price, modelYear });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} />
      <TextInput value={company} onChangeText={setCompany} />
      <TextInput value={price} onChangeText={setPrice} />
      <TextInput value={modelYear} onChangeText={setModelYear} />
      <Button title="Update Car" onPress={handleUpdate} />
    </View>
  );
}