import React, { useState, useRef } from "react";
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
export default function OTPScreen(props) {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    if (value.length === 0 || /^[0-9]+$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value.length === 1 && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    // handle OTP verification logic here
  };
  return (
    <Screen style={styles.screen}>
      {/* title Phone number*/}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginBottom: RFPercentage(8),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          Enter code sent to 067 4055 339
        </Text>
      </View>

      {/* otp container 6 */}
      <View style={styles.otpContainer}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={otp[index]}
            onChangeText={(text) => handleOTPChange(index, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
            onSubmitEditing={() => {
              if (index < 5) {
                inputRefs.current[index + 1].focus();
              }
            }}
            returnKeyType={index === 5 ? "done" : "next"}
          />
        ))}
      </View>

      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(6),
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
          Haven’t received code?
        </Text>
      </View>
      <View
        style={{
          width: "90%",
          justifyContent: "center",
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
          Resend (5)
        </Text>
      </View>

      {/*  button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("NamesScreen");
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  otpInput: {
    width: 45,
    backgroundColor: Colors.lightWhite,
    borderRadius: 10,
    padding: 13,
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 5,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
});
