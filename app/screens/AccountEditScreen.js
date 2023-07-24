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
import AppLine from "../components/AppLine";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AccountEditScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(5),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ProfileScreen");
          }}
          style={{ position: "absolute", left: 0 }}
        >
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/leftarrow.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("EditProfileScreen");
          }}
          style={{ position: "absolute", right: 0 }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.5),
              color: Colors.primary,
              fontFamily: FontFamily.regular,
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: RFPercentage(6) }} />
      {/* profile */}
      <ProfileMain
        imageSource={require("../../assets/images/profilepic.png")}
        title="Trot Mabuso"
        subtitle="+27674055339"
      />
      <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
        <AppLine />
      </View>

      {/* mail line */}
      <View
        style={{
          marginLeft: RFPercentage(2),
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(3.5),
        }}
      >
        <View style={{ flexDirection: "row", width: "70%" }}>
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/mailicon.png")}
          />

          <View style={{ marginLeft: RFPercentage(2) }} />
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              trotrictetelo@gmail.com
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "30%",
            position: "absolute",
            right: 0,
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1.5),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.primary,
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2),
              color: Colors.white,
              fontFamily: FontFamily.regular,
            }}
          >
            unverified
          </Text>
        </View>
      </View>

      <View style={{ width: "90%", marginTop: RFPercentage(4) }}>
        <AppLine />
      </View>
      {/* mail line */}
      <View
        style={{
          marginLeft: RFPercentage(2),
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(3.5),
        }}
      >
        <View style={{ flexDirection: "row", width: "70%" }}>
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/bicycle.png")}
          />

          <View style={{ marginLeft: RFPercentage(2) }} />
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Transportion type
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "30%",
            position: "absolute",
            right: 0,
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1.5),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.lightWhite,
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2),
              color: Colors.darkgrey,
              fontFamily: FontFamily.regular,
            }}
          >
            Bicycle
          </Text>
        </View>
      </View>
      <View style={{ width: "90%", marginTop: RFPercentage(4) }}>
        <AppLine />
      </View>
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
