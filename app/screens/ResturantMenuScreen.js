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

//Components
import Screen from "../components/Screen";
import HeaderTriple from "../components/HeaderTriple";
import AppLine from "../components/AppLine";
import ThrTextEndImg from "../components/ThrTextEndImg";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ResturantMenuScreen(props) {
  const [menuid, setmenuid] = useState(1);

  const menuList = [
    {
      id: 1,
      title: "Burgers",
    },
    {
      id: 2,
      title: "Wings",
    },
    {
      id: 3,
      title: "Nuggets",
    },
    {
      id: 4,
      title: "Breakfast",
    },
    {
      id: 5,
      title: "Salad",
    },
    {
      id: 6,
      title: "Pizza",
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
      <HeaderTriple
        firstImage={require("../../assets/images/arrrowleftblack.png")}
        title="Corner BBQ"
        secondImage={require("../../assets/images/Search.png")}
        onpress={() => {
          props.navigation.navigate("ResturantScreen");
        }}
      />

      {/*services scroll left */}

      <ScrollView
        contentContainerStyle={{
          marginTop: RFPercentage(5),
          marginLeft: RFPercentage(3),
          paddingRight: 30,
          flexDirection: "row",
        }}
        style={{ flexShrink: 0, flexGrow: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {menuList.map((item, i) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setmenuid(item.id)}
            key={i}
            style={{
              alignItems: "center",
              marginRight: RFPercentage(3),
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.2),
                color: menuid === item.id ? Colors.blacky : Colors.grey,
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ marginTop: RFPercentage(2) }} />
      <AppLine />

      {/* shop menu */}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(2),
          marginBottom: RFPercentage(2),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          Burgers
        </Text>
      </View>

      <ThrTextEndImg
        title="Crunch bruger"
        subtitle="2 cheese, onions, coke, chips, 1 patty"
        price="76.00"
        imageSource={require("../../assets/images/burger1.png")}
        onpress={() => {
          props.navigation.navigate("ItemsCollectedScreen");
        }}
      />
      <View style={{ marginTop: RFPercentage(4) }} />
      <ThrTextEndImg
        title="King bruger"
        subtitle="2 cheese, onions, coke, chips, 2 patty, coke"
        price="116.00"
        imageSource={require("../../assets/images/burger2.png")}
        onpress={() => {
          props.navigation.navigate("ItemsCollectedScreen");
        }}
      />

      {/* wings */}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(7),
          marginBottom: RFPercentage(2),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          Wings
        </Text>
      </View>

      <ThrTextEndImg
        title="6 wings"
        subtitle="6 chicken wings, chips, coke"
        price="54.00"
        imageSource={require("../../assets/images/wings1.png")}
        onpress={() => {
          props.navigation.navigate("ItemsCollectedScreen");
        }}
      />
      <View style={{ marginTop: RFPercentage(4) }} />

      <ThrTextEndImg
        title="6 wings"
        subtitle="6 chicken wings, chips, coke"
        price="54.00"
        imageSource={require("../../assets/images/wings1.png")}
        onpress={() => {
          props.navigation.navigate("ItemsCollectedScreen");
        }}
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
