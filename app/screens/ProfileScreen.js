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
import ProfileMain from "../components/ProfileMain";
import LogoTitle from "../components/LogoTitle";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ProfileScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={{ marginTop: RFPercentage(4) }} />
      <ProfileMain
        imageSource={require("../../assets/images/profilepic.png")}
        title="Trotric Mabuso"
        subtitle="+27 674055339"
      />

      <View style={{ marginTop: RFPercentage(4) }} />

      {/*Profile buttons list */}

      <LogoTitle
        imageSource={require("../../assets/images/paymentslogo.png")}
        title="Payments"
        onpress={() => {
          props.navigation.navigate("PaymentsScreen");
        }}
      />

      <LogoTitle
        imageSource={require("../../assets/images/profilelogo.png")}
        title="Profile"
        onpress={() => {
          props.navigation.navigate("EditProfileScreen");
        }}
      />
      <LogoTitle
        imageSource={require("../../assets/images/promologo.png")}
        title="Promotions"
        onpress={() => {
          props.navigation.navigate("PromotionScreen");
        }}
      />
      <LogoTitle
        imageSource={require("../../assets/images/netacclogo.png")}
        title="NetAccess"
        onpress={() => {
          props.navigation.navigate("NetAccessScreen");
        }}
      />
      <LogoTitle
        imageSource={require("../../assets/images/pplogo.png")}
        title="Privacy Policy"
      />
      <LogoTitle
        imageSource={require("../../assets/images/helplogo.png")}
        title="Help"
      />
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
});
