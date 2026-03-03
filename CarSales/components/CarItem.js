import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CarItem({ car, onDelete, onMarkSold }) {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 10, margin: 10, backgroundColor: "#eee" }}>
      <Text>Name: {car.name}</Text>
      <Text>Company: {car.company}</Text>
      <Text>Price: {car.price}</Text>
      <Text>Model Year: {car.modelYear}</Text>
      <Text>Status: {car.status}</Text>

      <Button
        title="Edit"
        onPress={() => navigation.navigate("EditCar", { car })}
      />

      {onMarkSold && (
        <Button title="Mark Sold" onPress={() => onMarkSold(car.id)} />
      )}

      {onDelete && (
        <Button title="Delete" onPress={() => onDelete(car.id)} />
      )}
    </View>
  );
}