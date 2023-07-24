import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MapView, { Marker, Polyline } from "react-native-maps";

//Components
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function OrdersScreen() {
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          position: "absolute",
          top: RFPercentage(6),
          left: RFPercentage(3),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          My Orders
        </Text>
      </View>

      {/* order image */}
      <View
        style={{
          marginLeft: RFPercentage(2),
          alignItems: "center",
          marginTop: RFPercentage(4),
        }}
      >
        <Image
          style={{
            width: RFPercentage(10),
            height: RFPercentage(10),
          }}
          source={require("../../assets/images/receiptlogo.png")}
        />

        <View style={{ marginTop: RFPercentage(2) }} />
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              fontSize: RFPercentage(2.2),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            No orders found
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
