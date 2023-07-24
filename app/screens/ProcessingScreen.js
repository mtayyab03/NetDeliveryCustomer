import React, { useState, useRef } from "react";
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
import MapViewDirections from "react-native-maps-directions";

//Components
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ProcessingScreen(props) {
  const region = {
    latitude: -25.9953, // Midrand latitude
    longitude: 28.1222, // Midrand longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const source = {
    latitude: -25.9953,
    longitude: 28.1222,
  };

  const destination = {
    latitude: -25.9339, // Destination latitude
    longitude: 28.1377, // Destination longitude
  };

  const mapRef = React.useRef();
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(3),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
          }}
        >
          Processing order
        </Text>
        <View style={{ position: "absolute", right: RFPercentage(2) }}>
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/progressglogo.png")}
          />
        </View>
      </View>
      {/* Order Accepted */}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(3),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
          }}
        >
          Order Accepted
        </Text>
        <View style={{ position: "absolute", right: RFPercentage(2) }}>
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/acceptlogo.png")}
          />
        </View>
      </View>

      {/* Preparing order */}
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(3),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.8),
            color: Colors.blacky,
          }}
        >
          Preparing order
        </Text>
        <View style={{ position: "absolute", right: RFPercentage(2) }}>
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/preparelogo.png")}
          />
        </View>
      </View>

      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginTop: RFPercentage(4),
        }}
      >
        <Text
          style={{
            fontSize: RFPercentage(3),
            color: Colors.blacky,
            marginBottom: RFPercentage(4),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Courier picking up order
        </Text>
      </View>

      {/* delivery process lines */}

      <View
        style={{ width: "90%", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={require("../../assets/images/acceptlogo.png")}
        />
        <View
          style={{
            marginHorizontal: RFPercentage(1),
            width: RFPercentage(18),
            height: RFPercentage(0.5),
            backgroundColor: Colors.primary,
            borderRadius: RFPercentage(1),
          }}
        />
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={require("../../assets/images/acceptlogo.png")}
        />
        <View
          style={{
            marginHorizontal: RFPercentage(1),
            width: RFPercentage(18),
            height: RFPercentage(0.5),
            backgroundColor: Colors.white,
            borderRadius: RFPercentage(1),
          }}
        />
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={require("../../assets/images/acceptlogo.png")}
        />
      </View>
      {/* map */}
      <View style={styles.container}>
        <MapView style={styles.map} region={region} ref={mapRef}>
          <Marker
            coordinate={source}
            image={require("../../assets/images/locicon.png")}
          />
          <Marker
            coordinate={destination}
            image={require("../../assets/images/locicon.png")}
          />
          <MapViewDirections
            origin={source}
            destination={destination}
            apikey="AIzaSyB0-gJxTm_H1nYZadu1TnHygMXeKtTi4cA"
            strokeWidth={5}
            strokeColor={Colors.primary}
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(
                `Started routing between "${params.origin}" and "${params.destination}"`
              );
            }}
            onReady={(result) => {
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
              });
            }}
            onError={(errorMessage) => {
              console.log("Error:", errorMessage);
            }}
          />
        </MapView>
      </View>

      {/* Add more items */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: RFPercentage(3),
        }}
      >
        <Image
          style={{
            width: RFPercentage(2.5),
            height: RFPercentage(2.5),
          }}
          source={require("../../assets/images/timeicon.png")}
        />

        <View style={{ marginLeft: RFPercentage(2) }} />

        <Text
          style={{
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          Estimated arrival time
        </Text>

        <View style={{ marginLeft: RFPercentage(2) }} />

        <Text
          style={{
            fontSize: RFPercentage(2.2),
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
          }}
        >
          13:66
        </Text>
      </View>

      {/* profile */}
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(4),
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
              fontSize: RFPercentage(2.1),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            James is picking up your order
          </Text>
        </View>
      </View>

      {/* search */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          marginTop: RFPercentage(3),
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ width: "15%" }}
          onPress={() => {
            props.navigation.navigate("FilterScreen");
          }}
        >
          <Image
            style={{
              width: RFPercentage(7),
              height: RFPercentage(7),
            }}
            source={require("../../assets/images/yelophonelogo.png")}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: "3%" }} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MessageScreen");
          }}
          activeOpacity={0.7}
          style={styles.searchmain}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.1),
              color: Colors.placeholder,
              fontFamily: FontFamily.semiBold,
            }}
          >
            Send courier a message
          </Text>
        </TouchableOpacity>
        <View style={{ marginLeft: "3%" }} />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  container: {
    width: "90%",
    height: RFPercentage(23),
    marginTop: RFPercentage(4),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(4),
  },
  searchmain: {
    width: "80%",
    backgroundColor: Colors.lightWhite,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(1),
    height: RFPercentage(6),
    justifyContent: "center",
    paddingHorizontal: RFPercentage(2),
  },
});
