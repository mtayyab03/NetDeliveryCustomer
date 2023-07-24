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
import ThrTextEndImg from "../components/ThrTextEndImg";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ResturantScreen(props) {
  const [menuid, setmenuid] = useState(1);
  const categoryList = [
    {
      id: 1,
      title: "Pickup",
    },
    {
      id: 2,
      title: "Delivery",
    },
  ];
  return (
    <Screen style={styles.screen}>
      {menuid === 2 ? (
        <ImageBackground
          style={{
            width: "100%",
            height: RFPercentage(23),
            alignItems: "center",
            paddingTop: RFPercentage(2),
          }}
          source={require("../../assets/images/barbimg.png")}
        >
          <View style={{ width: "92%", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("BottomTab", {
                  screen: "HomeScreen",
                });
              }}
              activeOpacity={0.7}
              style={{
                width: RFPercentage(5),
                height: RFPercentage(5),
                backgroundColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: RFPercentage(3),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/arrrowleftblack.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                position: "absolute",
                right: 0,
                width: RFPercentage(5),
                height: RFPercentage(5),
                backgroundColor: Colors.white,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: RFPercentage(3),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/Search.png")}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        <View
          style={{
            width: "100%",
            height: RFPercentage(23),
            alignItems: "center",
            paddingTop: RFPercentage(2),
          }}
        >
          <View style={{ width: "92%", flexDirection: "row", zIndex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("BottomTab", {
                  screen: "HomeScreen",
                });
              }}
              activeOpacity={0.7}
              style={{
                width: RFPercentage(5),
                height: RFPercentage(5),
                backgroundColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: RFPercentage(3),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/arrrowleftblack.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                position: "absolute",
                right: 0,
                width: RFPercentage(5),
                height: RFPercentage(5),
                backgroundColor: Colors.white,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: RFPercentage(3),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/Search.png")}
              />
            </TouchableOpacity>
          </View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -33.9249,
              longitude: 18.4241,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: -33.9356, longitude: 18.42 }}
              style={{ width: 10, height: 10 }}
              title={"Zinger King"}
              description={"The Delicious Burger Center"}
              image={require("../../assets/images/locicon.png")}
            />
            <Marker
              coordinate={{ latitude: -33.9271, longitude: 18.4215 }}
              style={{ width: 10, height: 10 }}
              title={"Pizza Zone"}
              description={"The Amazing Lazaniya"}
              image={require("../../assets/images/locicon.png")}
            />
            <Marker
              coordinate={{ latitude: -33.92, longitude: 18.4245 }}
              style={{ width: 10, height: 10 }}
              title={"Pizza Zone"}
              description={"The Amazing Lazaniya"}
              image={require("../../assets/images/locicon.png")}
            />
            <Marker
              coordinate={{ latitude: -33.92, longitude: 18.41499 }}
              style={{ width: 10, height: 10 }}
              title={"Pizza Zone"}
              description={"The Amazing Lazaniya"}
              image={require("../../assets/images/locicon.png")}
            />
          </MapView>
        </View>
      )}
      {/* switch pick / delivery */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(3),
          marginBottom: RFPercentage(2),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("ResturantMenuScreen");
          }}
          activeOpacity={0.7}
          style={{
            width: "50%",
            alignItems: "center",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.8),
              color: Colors.blacky,
            }}
          >
            Corner BBQ
          </Text>
          <View style={{ marginTop: RFPercentage(1) }}>
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2),
                color: Colors.blacky,
              }}
            >
              R15.00 20-30 min
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: "50%",
            position: "absolute",
            right: 0,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: "70%",
              height: RFPercentage(6),
              flexDirection: "row",
              borderRadius: RFPercentage(5),
              borderColor: Colors.white,
              backgroundColor: Colors.lightWhite,
              alignItems: "center",
              padding: RFPercentage(0.5),
              paddingVertical: RFPercentage(1),
            }}
          >
            {categoryList.map((item, i) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setmenuid(item.id)}
                key={i}
                style={{
                  width: "50%",
                  height: RFPercentage(5),
                  backgroundColor: menuid === item.id ? Colors.primary : null,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: RFPercentage(5),
                }}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.semiBold,
                    fontSize: RFPercentage(1.7),
                    color: menuid === item.id ? Colors.white : Colors.blacky,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

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
          marginTop: RFPercentage(5),
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
