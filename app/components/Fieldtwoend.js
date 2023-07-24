import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function Fieldtwoend({ inputTitle, imageSource }) {
  return (
    <View
      style={{
        width: "90%",
        justifyContent: "center",
        marginTop: RFPercentage(2),
      }}
    >
      <Text
        style={{
          fontFamily: FontFamily.semiBold,
          fontSize: RFPercentage(2.8),
          color: Colors.blacky,
        }}
      >
        {inputTitle}
      </Text>
      <View style={{ position: "absolute", right: RFPercentage(2) }}>
        <Image
          style={{
            width: RFPercentage(2),
            height: RFPercentage(2),
          }}
          source={imageSource}
        />
      </View>
    </View>
  );
}
