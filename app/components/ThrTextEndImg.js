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

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ThrTextEndImg({
  title,
  subtitle,
  price,
  imageSource,
  onpress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onpress}
      style={{
        width: "100%",
        alignItems: "center",
        marginTop: RFPercentage(1.5),
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
              }}
            >
              {title}
            </Text>
            <View style={{ marginTop: RFPercentage(1.5) }} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(1.8),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                {subtitle}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: RFPercentage(1.5),
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              R{price}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            position: "absolute",
            right: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(8.5),
              height: RFPercentage(7),
            }}
            source={imageSource}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
