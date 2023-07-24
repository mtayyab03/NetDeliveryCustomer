import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MapView, { Marker, Polyline } from "react-native-maps";

//Components
import Screen from "../components/Screen";
import ThrTextEndImg from "../components/ThrTextEndImg";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AddRemoveProducr({ title, price }) {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: RFPercentage(2),
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: RFPercentage(3.5),
            height: RFPercentage(3.5),
            borderRadius: RFPercentage(0.5),
            backgroundColor: Colors.lightWhite,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(2),
              height: RFPercentage(2),
            }}
            source={require("../../assets/images/plusicongry.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginHorizontal: RFPercentage(1.5),
            fontSize: RFPercentage(2.4),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          1
        </Text>

        <TouchableOpacity
          style={{
            width: RFPercentage(3.5),
            height: RFPercentage(3.5),
            borderRadius: RFPercentage(0.5),
            backgroundColor: Colors.lightWhite,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(2),
              height: RFPercentage(2),
            }}
            source={require("../../assets/images/minusgry.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{ position: "absolute", right: 0, alignItems: "flex-end" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2),
              color: Colors.blacky,
              fontFamily: FontFamily.regular,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: RFPercentage(0.5),
            fontSize: RFPercentage(2),
            color: Colors.blacky,
            fontFamily: FontFamily.medium,
          }}
        >
          R{price}
        </Text>
      </View>
    </View>
  );
}
