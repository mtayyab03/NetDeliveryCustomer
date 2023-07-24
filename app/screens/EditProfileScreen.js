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

export default function EditProfileScreen(props) {
  const editDetailList = [
    {
      id: 1,
      title: "Trot",
      subtitle: "First name",
    },
    {
      id: 2,
      title: "Mabuso",
      subtitle: "Last name",
    },
    {
      id: 3,
      title: "0674055339",
      subtitle: "Phone numbers",
    },
    {
      id: 3,
      title: "trotric@gmail.com",
      subtitle: "Email Address",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={{ marginTop: RFPercentage(3) }} />
        <MainHeader
          imageSource={require("../../assets/images/arrrowleftblack.png")}
          title="Profile"
          selectColor={Colors.blacky}
          onpress={() => {
            props.navigation.navigate("BottomTab", { screen: "ProfileScreen" });
          }}
        />

        {/* picture profile */}
        <View
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <Image
            style={{
              width: RFPercentage(9),
              height: RFPercentage(9),
              borderRadius: RFPercentage(5),
            }}
            source={require("../../assets/images/profilepic.png")}
          />

          <View style={{ marginTop: RFPercentage(2), alignItems: "center" }}>
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
              }}
            >
              Trotric Mabuso
            </Text>
            <View style={{ marginTop: RFPercentage(0.3) }} />
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  fontSize: RFPercentage(1.6),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                  lineHeight: RFPercentage(3.3),
                }}
              >
                +27 674055339
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: RFPercentage(2) }} />
        {/* details small cards */}
        {editDetailList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "90%",
              marginTop: RFPercentage(2),
              backgroundColor: Colors.lightWhite,
              borderRadius: RFPercentage(1),
              padding: RFPercentage(1),
              paddingHorizontal: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(1.7),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
              }}
            >
              {item.subtitle}
            </Text>
            <View style={{ marginTop: RFPercentage(1) }} />
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              {item.title}
            </Text>
          </View>
        ))}

        {/* services location   */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(4),
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(1.8),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            Saved Locations
          </Text>
        </View>

        {/* ADD HOME */}
        <View
          style={{
            marginLeft: RFPercentage(2),
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(2.5),
          }}
        >
          <Image
            style={{
              width: RFPercentage(2.5),
              height: RFPercentage(2.5),
            }}
            source={require("../../assets/images/homelogo.png")}
          />

          <View style={{ marginLeft: RFPercentage(2) }} />
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
              }}
            >
              Add home
            </Text>
          </TouchableOpacity>
        </View>

        {/* ADD WORK */}
        <View
          style={{
            marginLeft: RFPercentage(2),
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(2.5),
          }}
        >
          <Image
            style={{
              width: RFPercentage(2.5),
              height: RFPercentage(2.5),
            }}
            source={require("../../assets/images/suitcaselogo.png")}
          />

          <View style={{ marginLeft: RFPercentage(2) }} />
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                fontSize: RFPercentage(1.8),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
              }}
            >
              Add work
            </Text>
          </TouchableOpacity>
        </View>

        {/* delete account button */}
        <View style={{ marginTop: RFPercentage(5) }} />
        <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
          <AppButton title="Update" buttonColor={Colors.primary} />
        </TouchableOpacity>
        {/* delete account button */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
          style={styles.loginbutton}
          activeOpacity={0.7}
        >
          <AppButton title="Sign out" buttonColor={Colors.primary} />
        </TouchableOpacity>
        {/* delete account button */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
          style={styles.loginbutton}
          activeOpacity={0.7}
        >
          <AppButton title="Delete Account" buttonColor={Colors.red} />
        </TouchableOpacity>
      </ScrollView>
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
  },
});
