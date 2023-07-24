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

export default function PhoneLogin(props) {
  const [num, onChangeNum] = useState("");

  return (
    <Screen style={styles.screen}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/netlogotext.png")}
        />
      </View>

      {/* title Phone number*/}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(12),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
            marginBottom: RFPercentage(3),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Login using phone or email
        </Text>
      </View>
      <View style={{ flexDirection: "row", width: "90%" }}>
        <View
          style={{
            width: "27%",
            borderRadius: RFPercentage(1),
            backgroundColor: Colors.lightWhite,

            height: RFPercentage(7),
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/africaflaglogo.png")}
            />
          </View>
          <View style={{ marginLeft: RFPercentage(0.6) }} />
          <Text
            style={{
              fontSize: RFPercentage(2),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            +27
          </Text>
          <View style={{ marginLeft: RFPercentage(0.6) }} />

          <Image
            style={{
              width: RFPercentage(1.5),
              height: RFPercentage(0.8),
            }}
            source={require("../../assets/images/dropdown.png")}
          />
        </View>

        <View style={{ marginLeft: "3%" }} />
        {/* number field */}
        <View style={styles.searchmain}>
          <View style={styles.innermain}>
            <TextInput
              style={styles.inputtext}
              onChangeText={onChangeNum}
              value={num}
              placeholder={"0674055339"}
              placeholderTextColor={Colors.placeholder}
            />
          </View>
        </View>
      </View>
      {/* signup button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("OTPScreen");
        }}
      >
        <AppButton title="Continue" buttonColor={Colors.primary} />
      </TouchableOpacity>

      {/* or lines */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(4),
        }}
      >
        <View
          style={{
            width: "40%",
            height: RFPercentage(0.1),
            backgroundColor: Colors.grey,
            borderRadius: RFPercentage(1),
          }}
        />
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.2),
              color: Colors.placeholder,
              fontFamily: FontFamily.semiBold,
            }}
          >
            or
          </Text>
        </View>
        <View
          style={{
            width: "40%",
            height: RFPercentage(0.1),
            backgroundColor: Colors.grey,
            borderRadius: RFPercentage(1),
          }}
        />
      </View>

      {/* facebook */}
      <View style={{ marginTop: RFPercentage(3) }} />
      <View
        style={{
          width: "90%",
          height: RFPercentage(7),
          borderRadius: RFPercentage(1),
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(2),
          backgroundColor: Colors.lightWhite,
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: RFPercentage(3), height: RFPercentage(3) }}
          source={require("../../assets/images/flogo.png")}
        />
        <View style={{ marginLeft: RFPercentage(3) }} />
        <Text style={styles.buttontext}>Continue with Facebook</Text>
      </View>

      {/* Google */}
      <View
        style={{
          width: "90%",
          height: RFPercentage(7),
          borderRadius: RFPercentage(1),
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(2),
          backgroundColor: Colors.lightWhite,
          flexDirection: "row",
          paddingRight: RFPercentage(3),
        }}
      >
        <Image
          style={{ width: RFPercentage(3), height: RFPercentage(3) }}
          source={require("../../assets/images/glogo.png")}
        />
        <View style={{ marginLeft: RFPercentage(3) }} />
        <Text style={styles.buttontext}>Continue with Google</Text>
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
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(10),
  },
  logo: {
    width: RFPercentage(32),
    height: RFPercentage(5),
  },
  searchmain: {
    width: "70%",
    backgroundColor: Colors.white,
    padding: RFPercentage(1),
    backgroundColor: Colors.lightWhite,

    borderRadius: RFPercentage(1),
    height: RFPercentage(7),
    justifyContent: "center",
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFPercentage(1),
  },

  inputtext: {
    width: "100%",
    paddingLeft: RFPercentage(1.5),
    fontWeight: "400",
    fontSize: RFPercentage(1.9),
    color: Colors.blacky,
    fontFamily: FontFamily.semiBold,
  },
  buttonmain: {
    position: "absolute",
    right: 0,
    width: RFPercentage(16),
    height: RFPercentage(6),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
  buttontext: {
    color: Colors.blacky,
    fontSize: RFPercentage(2.2),
    fontFamily: FontFamily.semiBold,
  },
});
