# 🚗 Car Sales Management App

A mobile application built using **React Native with Expo** that allows users to manage car inventory and sales efficiently.

This project demonstrates merged navigation using **Drawer Navigation** and **Bottom Tab Navigation**, along with full CRUD operations for managing car records.

---

## Objective

To develop a car sales management mobile application using:
- Drawer Navigation
- Bottom Tab Navigation
- Component-based architecture
- State management using useState
- FlatList for dynamic data rendering

---

## Navigation Structure

### Drawer Navigation (Main Menu)
- Dashboard
- Car Management
- Settings

### Bottom Tabs (Inside Car Management)
- All Cars
- Add Car
- Sold Cars

---

## Tech Stack
- React Native
- Expo
- JavaScript (ES6)
- React Navigation (Drawer + Bottom Tabs)
- React Hooks (useState)
- FlatList
- Git & GitHub

---

### 1️⃣ Clone the Repository

``` bash
git clone https://github.com/hafsalman/CarSalesManagementApp
```

### 2️⃣ Initialize Expo Project 

``` bash
npx create-expo-app CarSales --template expo-template-blank
```

### 3️⃣ Navigate to Project Folder

``` bash
cd CarSales
```
(Replace the default App.js with the cloned App.js and add the rest of the folders and ```babel.config.js```.)

### 4️⃣ Install Dependencies 

``` bash
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install react-native-vector-icons

npx expo install react-native-vector-icons

npx expo install react-native-screens@~4.16.0
```

``` bash
npm install @react-navigation/native
npm install @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler react-native-reanimated
npm install react-native-vector-icons	
npx expo install @expo/vector-icons  
npm install react-native-screens@~4.16.0
npm uninstall react-native-reanimated
npm install react-native-reanimated@~3.6.0
npm install react-native-reanimated@~4.1.1
npm install --save-dev babel-preset-expo  
npm install react-native-worklets@0.7.4  
npm install react-native-reanimated@latest
npx react-native start --reset-cache
```

Add the following ``` "@react-native-community/cli": "latest", ``` under "devDependencies" in the file "package.json" like this:

```
  "devDependencies": {
    "@react-native-community/cli": "latest",
  }
```

Continue to run the following commands on terminal:

``` bash
npm install react-native-reanimated@~4.1.1 react-native-worklets@0.5.1
npm uninstall react-native-reanimated react-native-worklets
npm install expo@latest
npx expo install --fix 
```

``` bash
npx expo install @react-navigation/native-stack
```

### 5️⃣ Start the Development Server

``` bash
npx expo start
```
