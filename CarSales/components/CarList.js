import React from "react";
import { FlatList } from "react-native";
import CarItem from "./CarItem";

export default function CarList({ cars, onDelete, onMarkSold }) {
  return (
    <FlatList
      data={cars}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CarItem
          car={item}
          onDelete={onDelete}
          onMarkSold={onMarkSold}
        />
      )}
    />
  );
}