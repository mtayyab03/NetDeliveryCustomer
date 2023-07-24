import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function MainHeader({
  imageSource,
  title,
  onpress,
  selectColor,
}) {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={onpress}>
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={imageSource}
        />
      </TouchableOpacity>
      <View style={{ width: "80%", marginLeft: RFPercentage(3) }}>
        <Text
          style={{
            fontSize: RFPercentage(2.5),
            color: selectColor,
            fontFamily: FontFamily.semiBold,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
