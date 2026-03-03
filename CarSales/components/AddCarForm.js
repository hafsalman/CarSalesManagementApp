import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function AddCarForm({ onAddCar }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [modelYear, setModelYear] = useState("");

  const submitHandler = () => {
    onAddCar(name, company, price, modelYear);
    setName("");
    setCompany("");
    setPrice("");
    setModelYear("");
  };

  return (
    <View>
      <TextInput placeholder="Car Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Company" value={company} onChangeText={setCompany} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} />
      <TextInput placeholder="Model Year" value={modelYear} onChangeText={setModelYear} />
      <Button title="Add Car" onPress={submitHandler} />
    </View>
  );
}