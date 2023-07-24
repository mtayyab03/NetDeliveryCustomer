import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";

export default function SplashScreen(props) {
  return (
    <View style={styles.background}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("LoginScreen");
        }}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/images/netlogo.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    color: Colors.purewhite,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: RFPercentage(20),
    height: RFPercentage(20),
  },
});
