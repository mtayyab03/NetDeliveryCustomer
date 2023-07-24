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
import DateCard from "../components/DateCard";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
export default function CardScreen(props) {
  const [num, onChangeNum] = useState("");
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          marginTop: RFPercentage(4),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ProfileScreen");
          }}
        >
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/cancicon.png")}
          />
        </TouchableOpacity>
      </View>

      {/* card field */}
      <View style={{ marginTop: RFPercentage(5) }} />

      {/* number field */}
      <View style={styles.searchmain}>
        <View style={styles.innermain}>
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/cardlogo.png")}
          />
          <View
            style={{
              marginLeft: RFPercentage(2),
              marginBottom: RFPercentage(1),
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: RFPercentage(1.8),
                color: Colors.darkgrey,
                fontFamily: FontFamily.regular,
              }}
            >
              Card number
            </Text>
            <View style={{ marginTop: RFPercentage(1) }} />
            <TextInput
              style={styles.inputtext}
              onChangeText={onChangeNum}
              value={num}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      {/* buttons */}
      <View style={{ marginTop: RFPercentage(5) }} />
      <View
        style={{
          width: "90%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "48%",
            height: RFPercentage(7),
            borderRadius: RFPercentage(1),
            backgroundColor: Colors.lightWhite,
          }}
        >
          <Text
            style={{
              color: Colors.darkgrey,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.4),
            }}
          >
            Expiry date
          </Text>
        </TouchableOpacity>
        <View style={{ marginLeft: "4%" }} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "48%",
            height: RFPercentage(7),
            borderRadius: RFPercentage(1),
            backgroundColor: Colors.lightWhite,
            position: "absolute",
            right: 0,
          }}
        >
          <Text
            style={{
              color: Colors.darkgrey,
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.4),
            }}
          >
            Secure code
          </Text>
        </TouchableOpacity>
      </View>

      {/* Add Card */}
      <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
        <AppButton title="Add card" buttonColor={Colors.primary} />
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
  searchmain: {
    width: "90%",
    backgroundColor: Colors.white,
    padding: RFPercentage(1.5),
    borderWidth: RFPercentage(0.2),
    borderColor: Colors.blacky,
    borderRadius: RFPercentage(1),
    justifyContent: "center",
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
  },

  inputtext: {
    width: "100%",
    fontWeight: "400",
    fontSize: RFPercentage(1.9),
    color: Colors.blacky,
    fontFamily: FontFamily.regular,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(5),
    marginBottom: RFPercentage(5),
  },
});
