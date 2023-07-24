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

//Components
import Screen from "../components/Screen";
import MainHeader from "../components/MainHeader";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import AppLine from "../components/AppLine";

export default function PaymentsScreen(props) {
  const [menuid, setmenuid] = useState(0);
  return (
    <Screen style={styles.screen}>
      {/* header */}
      <View style={{ marginTop: RFPercentage(3) }} />
      <MainHeader
        imageSource={require("../../assets/images/arrrowleftblack.png")}
        title="Payments"
        selectColor={Colors.blacky}
        onpress={() => {
          props.navigation.navigate("BottomTab", { screen: "ProfileScreen" });
        }}
      />

      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(5),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(2.5),
            color: Colors.blacky,
            marginBottom: RFPercentage(4),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Payment details
        </Text>
      </View>
      {/* radio selection card */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setmenuid(1)}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(6),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/visacard.png")}
          />
          <View
            style={{
              width: RFPercentage(1),
              height: RFPercentage(1),
              borderRadius: RFPercentage(2),
              backgroundColor: Colors.blacky,
              marginLeft: RFPercentage(2),
            }}
          />
          <View
            style={{
              width: RFPercentage(1),
              height: RFPercentage(1),
              borderRadius: RFPercentage(2),
              backgroundColor: Colors.blacky,
              marginLeft: RFPercentage(0.7),
            }}
          />
          <View
            style={{
              width: RFPercentage(1),
              height: RFPercentage(1),
              borderRadius: RFPercentage(2),
              backgroundColor: Colors.blacky,
              marginLeft: RFPercentage(0.7),
            }}
          />
          <View
            style={{
              width: RFPercentage(1),
              height: RFPercentage(1),
              borderRadius: RFPercentage(2),
              backgroundColor: Colors.blacky,
              marginLeft: RFPercentage(0.7),
            }}
          />

          <Text
            style={{
              marginLeft: RFPercentage(1),
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            1967
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            right: 0,
            width: RFPercentage(3),
            height: RFPercentage(3),
            borderWidth: RFPercentage(0.5),
            borderRadius: RFPercentage(4),
            borderColor: Colors.grey,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuid == 1 ? (
            <View
              style={{
                width: RFPercentage(1.7),
                height: RFPercentage(1.7),
                borderRadius: RFPercentage(2),
                backgroundColor: Colors.primary,
              }}
            />
          ) : null}
        </View>
      </View>

      {/* 2nd one */}
      <View style={{ marginTop: RFPercentage(3) }} />
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => setmenuid(2)}
          activeOpacity={1}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(6),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/cashicon.png")}
          />

          <Text
            style={{
              marginLeft: RFPercentage(2),
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            Cash
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            right: 0,
            width: RFPercentage(3),
            height: RFPercentage(3),
            borderWidth: RFPercentage(0.5),
            borderRadius: RFPercentage(4),
            borderColor: Colors.grey,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuid == 2 ? (
            <View
              style={{
                width: RFPercentage(1.7),
                height: RFPercentage(1.7),
                borderRadius: RFPercentage(2),
                backgroundColor: Colors.primary,
              }}
            />
          ) : null}
        </View>
      </View>

      {/* tap n pay */}
      {/* 2nd one */}
      <View style={{ marginTop: RFPercentage(3) }} />
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => setmenuid(3)}
          activeOpacity={1}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: RFPercentage(6),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/tapnpaylogo.png")}
          />

          <Text
            style={{
              marginLeft: RFPercentage(2),
              fontSize: RFPercentage(2.6),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            Tap n pay
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            right: 0,
            width: RFPercentage(3),
            height: RFPercentage(3),
            borderWidth: RFPercentage(0.5),
            borderRadius: RFPercentage(4),
            borderColor: Colors.grey,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuid == 3 ? (
            <View
              style={{
                width: RFPercentage(1.7),
                height: RFPercentage(1.7),
                borderRadius: RFPercentage(2),
                backgroundColor: Colors.primary,
              }}
            />
          ) : null}
        </View>
      </View>

      <View style={{ width: "90%", marginTop: RFPercentage(8) }}>
        <AppLine />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("CardScreen");
        }}
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(2),
        }}
      >
        <Image
          style={{
            width: RFPercentage(3.5),
            height: RFPercentage(3.5),
          }}
          source={require("../../assets/images/plusicon.png")}
        />
        <Text
          style={{
            marginLeft: RFPercentage(3),
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          Add card/credit card
        </Text>
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
});
