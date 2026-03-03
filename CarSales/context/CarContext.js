import React, { createContext, useState } from "react";
import { initialCars } from "../data/initialCars";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(initialCars);

  // CREATE
  const addCar = (name, company, price, modelYear) => {
    const newCar = {
      id: Date.now().toString(),
      name,
      company,
      price,
      modelYear,
      status: "Available",
    };
    setCars((prev) => [...prev, newCar]);
  };

  // DELETE
  const deleteCar = (id) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  // UPDATE
  const updateCar = (id, updatedData) => {
    setCars((prev) =>
      prev.map((car) =>
        car.id === id ? { ...car, ...updatedData } : car
      )
    );
  };

  // MARK AS SOLD
  const markAsSold = (id) => {
    updateCar(id, { status: "Sold" });
  };

  return (
    <CarContext.Provider
      value={{ cars, addCar, deleteCar, updateCar, markAsSold }}
    >
      {children}
    </CarContext.Provider>
  );
};