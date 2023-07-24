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

//Components
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function SearchScreen(props) {
  const [link, onChangeLink] = useState("");
  const searchFilterList = [
    {
      id: 1,
      title: "Burgers",
    },
    {
      id: 2,
      title: "Pizza",
    },
    {
      id: 3,
      title: "Chicken",
    },
    {
      id: 4,
      title: "Shisanyamar",
    },
    {
      id: 5,
      title: "Salad",
    },
    {
      id: 6,
      title: "Alappuzha",
    },
    {
      id: 7,
      title: "Sushi",
    },
    {
      id: 8,
      title: "Breakfast",
    },
    {
      id: 9,
      title: "Drinks",
    },
    {
      id: 10,
      title: "Vegan",
    },
  ];
  return (
    <Screen style={styles.screen}>
      {/* search */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          marginTop: RFPercentage(4),
          alignItems: "center",
        }}
      >
        <View style={styles.searchmain}>
          <View style={styles.innermain}>
            <Image
              style={styles.img}
              source={require("../../assets/images/Search.png")}
            />

            <TextInput
              style={styles.inputtext}
              onChangeText={onChangeLink}
              value={link}
              placeholder="Restaurant, Food, Drinks"
              placeholderTextColor={Colors.blacky}
            />
          </View>
        </View>
        <View style={{ marginLeft: "3%" }} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ width: "15%" }}
          onPress={() => {
            props.navigation.navigate("FilterScreen");
          }}
        >
          <Image
            style={{
              width: RFPercentage(6),
              height: RFPercentage(6),
            }}
            source={require("../../assets/images/filterlogo.png")}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(3),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(2.4),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          All categories
        </Text>
      </View>

      {/* food filter search list */}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 30,
          marginTop: RFPercentage(2),
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {searchFilterList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginTop: RFPercentage(2.5),
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
        ))}
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
  searchmain: {
    width: "83%",
    backgroundColor: Colors.lightWhite,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(1),
    height: RFPercentage(8),
    justifyContent: "center",
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFPercentage(2),
  },

  img: { width: RFPercentage(3), height: RFPercentage(3) },

  inputtext: {
    width: "100%",
    paddingLeft: RFPercentage(1.5),
    fontSize: RFPercentage(1.9),
    color: Colors.blacky,
    fontFamily: FontFamily.medium,
  },
});
