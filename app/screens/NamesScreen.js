import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function NamesScreen(props) {
  const [Name, onChangeName] = useState("");
  const [Last, onChangeLast] = useState("");

  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(20),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
            marginBottom: RFPercentage(4),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Enter your First name & last name
        </Text>
      </View>

      {/* first input */}
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(1),
          backgroundColor: Colors.lightWhite,
          height: RFPercentage(7),
          justifyContent: "center",
          padding: RFPercentage(2),
          paddingLeft: RFPercentage(3),
        }}
      >
        <TextInput
          style={{
            width: RFPercentage(45),
            fontSize: RFPercentage(2.2),
            fontFamily: FontFamily.semiBold,
          }}
          onChangeText={onChangeName}
          value={Name}
          placeholder="First name"
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      {/* 2nd input */}
      <View style={{ marginTop: RFPercentage(2) }} />
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(1),
          backgroundColor: Colors.lightWhite,
          height: RFPercentage(7),
          justifyContent: "center",
          padding: RFPercentage(2),
          paddingLeft: RFPercentage(3),
        }}
      >
        <TextInput
          style={{
            width: RFPercentage(45),
            fontSize: RFPercentage(2.2),
            fontFamily: FontFamily.semiBold,
          }}
          onChangeText={onChangeLast}
          value={Last}
          placeholder="Last name"
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      {/* signup button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("BottomTab", { screen: "HomeScreen" });
        }}
      >
        <AppButton title="Continue" buttonColor={Colors.primary} />
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(5),
  },
});
