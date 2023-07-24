import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import MainHeader from "../components/MainHeader";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function PromotionScreen(props) {
  const [Name, onChangeName] = useState("");
  return (
    <Screen style={styles.screen}>
      <View style={{ marginTop: RFPercentage(3) }} />
      <MainHeader
        imageSource={require("../../assets/images/arrrowleftblack.png")}
        title="Promotions"
        selectColor={Colors.blacky}
        onpress={() => {
          props.navigation.navigate("BottomTab", { screen: "ProfileScreen" });
        }}
      />

      {/* first input */}
      <View style={{ marginTop: RFPercentage(12) }} />
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
          placeholder="Enter promo code"
          placeholderTextColor={Colors.placeholder}
        />
      </View>

      {/* promotion button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("BottomTab", { screen: "ProfileScreen" });
        }}
      >
        <AppButton title="Apply code" buttonColor={Colors.primary} />
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
    marginTop: RFPercentage(2),
  },
});
