import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import PhoneLogin from "../screens/PhoneLogin";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import CardScreen from "../screens/CardScreen";
import MessageScreen from "../screens/MessageScreen";
import AccountEditScreen from "../screens/AccountEditScreen";
import OTPScreen from "../screens/OTPScreen";
import NamesScreen from "../screens/NamesScreen";
import FilterScreen from "../screens/FilterScreen";
import PromotionScreen from "../screens/PromotionScreen";
import NetAccessScreen from "../screens/NetAccessScreen";
import ResturantScreen from "../screens/ResturantScreen";
import ResturantMenuScreen from "../screens/ResturantMenuScreen";
import ItemsCollectedScreen from "../screens/ItemsCollectedScreen";
import ViewBasket from "../screens/ViewBasket";
import CheckOutScreen from "../screens/CheckOutScreen";
import ProcessingScreen from "../screens/ProcessingScreen";

//navigation
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="NamesScreen" component={NamesScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="PromotionScreen" component={PromotionScreen} />
      <Stack.Screen name="NetAccessScreen" component={NetAccessScreen} />
      <Stack.Screen name="ResturantScreen" component={ResturantScreen} />
      <Stack.Screen name="ViewBasket" component={ViewBasket} />
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <Stack.Screen name="ProcessingScreen" component={ProcessingScreen} />

      <Stack.Screen
        name="ResturantMenuScreen"
        component={ResturantMenuScreen}
      />
      <Stack.Screen
        name="ItemsCollectedScreen"
        component={ItemsCollectedScreen}
      />

      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
      <Stack.Screen name="CardScreen" component={CardScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />

      <Stack.Screen name="AccountEditScreen" component={AccountEditScreen} />

      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
