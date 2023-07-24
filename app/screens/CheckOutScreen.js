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
import HeaderTriple from "../components/HeaderTriple";
import AppButton from "../components/AppButton";
import TextTwoEnd from "../components/TextTwoEnd";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function CheckOutScreen(props) {
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

  const tipList = [
    {
      id: 1,
      title: "No tip",
    },
    {
      id: 2,
      title: "R5.00",
    },
    {
      id: 3,
      title: "R10.00",
    },
    {
      id: 4,
      title: "R15.00",
    },
  ];
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
      <HeaderTriple
        firstImage={require("../../assets/images/arrrowleftblack.png")}
        title="Corner BBQ"
        secondImage={require("../../assets/images/Search.png")}
        onpress={() => {
          props.navigation.navigate("ViewBasket");
        }}
      />

      <View style={{ marginTop: RFPercentage(3) }} />
      <View
        style={{
          marginTop: RFPercentage(2),
          marginBottom: RFPercentage(2),
          width: "90%",
          flexDirection: "row",
          borderRadius: RFPercentage(5),
          borderColor: Colors.white,
          backgroundColor: Colors.lightWhite,
          alignItems: "center",
          padding: RFPercentage(1),
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
              padding: RFPercentage(1.5),
              backgroundColor: menuid === item.id ? Colors.primary : null,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: RFPercentage(5),
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(3),
                color: menuid === item.id ? Colors.white : Colors.blacky,
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Crunch bruger */}
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginTop: RFPercentage(3),
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                style={{
                  marginTop: RFPercentage(1),
                  width: RFPercentage(8),
                  height: RFPercentage(6.5),
                }}
                source={require("../../assets/images/burger1.png")}
              />
            </TouchableOpacity>

            <View style={{ marginLeft: RFPercentage(2) }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.1),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                Crunch bruger
              </Text>
              <View style={{ marginTop: RFPercentage(1) }} />
              <TouchableOpacity activeOpacity={0.7}>
                <Text
                  style={{
                    fontSize: RFPercentage(2),
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                  }}
                >
                  2 cheese, onions, coke, chips, 1 patty
                </Text>
                <Text
                  style={{
                    marginTop: RFPercentage(1),
                    fontSize: RFPercentage(2.1),
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                  }}
                >
                  R76.00
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              right: 0,
              marginTop: RFPercentage(2),
            }}
          >
            <TouchableOpacity
              style={{
                width: RFPercentage(4.5),
                height: RFPercentage(4.5),
                borderRadius: RFPercentage(0.5),
                backgroundColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                }}
                source={require("../../assets/images/plusicongry.png")}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginHorizontal: RFPercentage(1.5),
                fontSize: RFPercentage(2.4),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
              }}
            >
              1
            </Text>

            <TouchableOpacity
              style={{
                width: RFPercentage(4.5),
                height: RFPercentage(4.5),
                borderRadius: RFPercentage(0.5),
                backgroundColor: Colors.lightWhite,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                }}
                source={require("../../assets/images/minusgry.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Add more items */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <TouchableOpacity
            style={{
              width: RFPercentage(4.5),
              height: RFPercentage(4.5),
              borderRadius: RFPercentage(0.5),
              backgroundColor: Colors.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(2),
                height: RFPercentage(2),
              }}
              source={require("../../assets/images/whiteplus.png")}
            />
          </TouchableOpacity>

          <View style={{ marginLeft: RFPercentage(2) }} />
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                fontSize: RFPercentage(2.5),
                color: Colors.primary,
                fontFamily: FontFamily.semiBold,
              }}
            >
              Add more items
            </Text>
          </TouchableOpacity>
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
              width: RFPercentage(5),
              height: RFPercentage(5),
            }}
            source={require("../../assets/images/addnoteicon.png")}
          />

          <View style={{ marginLeft: RFPercentage(1.5) }} />
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                fontSize: RFPercentage(2.5),
                color: Colors.grey,
                fontFamily: FontFamily.semiBold,
              }}
            >
              Add notes
            </Text>
          </TouchableOpacity>
        </View>

        {/* line */}
        <View
          style={{
            width: "100%",
            marginTop: RFPercentage(5),
            height: RFPercentage(1),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(1),
          }}
        />

        {/* map */}
        <View style={styles.container}>
          {menuid === 1 ? (
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
          ) : (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -25.9953, // Midrand latitude
                longitude: 28.1222, // Midrand longitude
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: -25.9953, longitude: 28.1222 }}
                style={{ width: 10, height: 10 }}
                title={"Zinger King"}
                description={"The Delicious Burger Center"}
                image={require("../../assets/images/locicon.png")}
              />
            </MapView>
          )}
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
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/shopicon.png")}
          />

          <View style={{ marginLeft: RFPercentage(2) }}>
            <Text
              style={{
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
              }}
            >
              Corner BBQ
            </Text>
            <Text
              style={{
                marginTop: RFPercentage(0.8),
                fontSize: RFPercentage(1.8),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              1003 7th Rd, Carswald, Midrand, 1685
            </Text>
          </View>
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
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/manlogo.png")}
          />

          <View style={{ marginLeft: RFPercentage(2) }}>
            <Text
              style={{
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontFamily: FontFamily.regular,
              }}
            >
              Pickup 1.8 km Ready in 15-25 min
            </Text>
          </View>
        </View>

        {/* line */}
        <View
          style={{
            width: "100%",
            marginTop: RFPercentage(3),
            height: RFPercentage(1),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(1),
          }}
        />

        {menuid === 2 ? (
          <>
            <View
              style={{
                width: "90%",
                justifyContent: "center",
                marginTop: RFPercentage(3),
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.2),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                Tip the courier guy
              </Text>
            </View>

            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginTop: RFPercentage(3),
              }}
            >
              {tipList.map((item, i) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={i}
                  style={{
                    width: "23%",
                    padding: RFPercentage(1.5),
                    backgroundColor: Colors.lightWhite,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: RFPercentage(3),
                    marginRight: "2%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FontFamily.semiBold,
                      fontSize: RFPercentage(2),
                      color: Colors.blacky,
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* line */}
            <View
              style={{
                width: "100%",
                marginTop: RFPercentage(4),
                height: RFPercentage(1),
                backgroundColor: Colors.lightWhite,
                borderRadius: RFPercentage(1),
              }}
            />
          </>
        ) : null}
        {/* promocode */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(4),
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: RFPercentage(4),
              height: RFPercentage(4),
            }}
            source={require("../../assets/images/promocodelogo.png")}
          />
          <Text
            style={{
              marginLeft: RFPercentage(3),
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.2),
              color: Colors.blacky,
            }}
          >
            Add a promo code
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ position: "absolute", right: 0 }}
          >
            <Image
              style={{
                width: RFPercentage(2),
                height: RFPercentage(2),
              }}
              source={require("../../assets/images/rightarrowlogo.png")}
            />
          </TouchableOpacity>
        </View>

        {/* money detail */}
        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(3),
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.8),
              color: Colors.blacky,
            }}
          >
            Subtotal
          </Text>
          <View style={{ position: "absolute", right: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.bold,
                fontSize: RFPercentage(2.8),
                color: Colors.blacky,
              }}
            >
              R 76.00
            </Text>
          </View>
        </View>

        <TextTwoEnd title="Tips" subtitle="R0.00" />
        <TextTwoEnd title="Pickup  fee" subtitle="R0.00" />
        <TextTwoEnd title="Service fee" subtitle="R0.00" />

        <View
          style={{
            width: "90%",
            marginTop: RFPercentage(4),
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.bold,
              fontSize: RFPercentage(2.8),
              color: Colors.blacky,
            }}
          >
            Total
          </Text>
          <View style={{ position: "absolute", right: RFPercentage(2) }}>
            <Text
              style={{
                fontFamily: FontFamily.bold,
                fontSize: RFPercentage(2.8),
                color: Colors.blacky,
              }}
            >
              R 76.00
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: "90%",
            marginTop: RFPercentage(3),
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
          <View style={{ marginLeft: RFPercentage(2) }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: RFPercentage(1),
                  height: RFPercentage(1),
                  borderRadius: RFPercentage(2),
                  backgroundColor: Colors.blacky,
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
            </View>

            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: Colors.green,
                fontFamily: FontFamily.regular,
              }}
            >
              Change
            </Text>
          </View>
        </TouchableOpacity>

        {/* placebutton */}
        <TouchableOpacity
          style={styles.loginbutton}
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ProcessingScreen");
          }}
        >
          <AppButton title="Place order" buttonColor={Colors.primary} />
        </TouchableOpacity>
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
  container: {
    width: "90%",
    height: RFPercentage(23),
    marginTop: RFPercentage(3),
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
});
