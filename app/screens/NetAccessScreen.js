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
import Fieldtwoend from "../components/Fieldtwoend";

export default function NetAccessScreen(props) {
  const subscribeList = [
    {
      id: 1,
      title:
        "You get 30% OFF 3 meals orders and free delivery all 3 meals must be under 100",
      price: "100",
      bgcolor: Colors.green,
    },
    {
      id: 2,
      title:
        "You get 50% OFF 5 meals orders and free delivery all 5 meals must be under R250",
      price: "250",
      bgcolor: Colors.red,
    },
    {
      id: 3,
      title:
        "You get 70% OFF 10 meals orders and free delivery all 10 meals must be under R500",
      price: "500",
      bgcolor: Colors.primary,
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={{ marginTop: RFPercentage(3) }} />
      <MainHeader
        imageSource={require("../../assets/images/arrrowleftblack.png")}
        title="NetAccess"
        selectColor={Colors.blacky}
        onpress={() => {
          props.navigation.navigate("BottomTab", { screen: "ProfileScreen" });
        }}
      />

      <View style={{ marginTop: RFPercentage(3) }} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 70,
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", flexGrow: 0 }}
      >
        {subscribeList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "90%",
              backgroundColor: item.bgcolor,
              borderRadius: RFPercentage(2),
              padding: RFPercentage(4),
              paddingRight: RFPercentage(12),
              marginTop: RFPercentage(3),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(2.8),
                color: Colors.white,
                fontFamily: FontFamily.semiBold,
              }}
            >
              {item.title}
            </Text>
            <View style={{ marginTop: RFPercentage(3) }} />
            <Text
              style={{
                fontSize: RFPercentage(3),
                color: Colors.white,
                fontFamily: FontFamily.semiBold,
              }}
            >
              R{item.price}/pm
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: RFPercentage(20),
                padding: RFPercentage(1.5),
                marginTop: RFPercentage(2.5),
                backgroundColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: RFPercentage(5),
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2),
                  color: Colors.blacky,
                }}
              >
                Subscribe now
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <View
          style={{
            width: "85%",
            height: RFPercentage(7),
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
            Learn more
          </Text>
          <View style={{ position: "absolute", right: 0 }}>
            <Image
              style={{
                width: RFPercentage(2),
                height: RFPercentage(2),
              }}
              source={require("../../assets/images/rightarrowlogo.png")}
            />
          </View>
        </View>
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
});
