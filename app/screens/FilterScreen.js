import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Slider from "@react-native-community/slider";
import MapView, { Marker, Polyline } from "react-native-maps";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import Fieldtwoend from "../components/Fieldtwoend";

export default function FilterScreen(props) {
  const [value, setValue] = useState(50);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const [menuid, setmenuid] = useState(0);
  const categoryList = [
    {
      id: 1,
      title: "Top-rated",
    },
    {
      id: 2,
      title: "Most popular",
    },
    {
      id: 3,
      title: "Delivery time",
    },
    {
      id: 4,
      title: "Distance",
    },
  ];
  const [offerid, setofferid] = useState(0);
  const offerList = [
    {
      id: 1,
      title: "All offers",
    },
    {
      id: 2,
      title: "One day only",
    },
    {
      id: 3,
      title: "Free delivery",
    },
    {
      id: 4,
      title: "Meal deals",
    },
    {
      id: 5,
      title: "Buy 1 get 1 free",
    },
  ];
  const [dietid, setdietid] = useState(0);
  const dietaryList = [
    {
      id: 1,
      title: "Halal",
    },
    {
      id: 2,
      title: "Gluten free",
    },
    {
      id: 3,
      title: "Vegan",
    },
    {
      id: 4,
      title: "Vegetarian",
    },
    {
      id: 5,
      title: "Organic",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(2),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("BottomTab", {
              screen: "HomeScreen",
            });
          }}
          activeOpacity={0.7}
          style={{ position: "absolute", left: 0 }}
        >
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/cancicon.png")}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: RFPercentage(2.8),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            Filter
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={{ marginTop: RFPercentage(4) }} />
        <Fieldtwoend
          inputTitle="Sort"
          imageSource={require("../../assets/images/uparrowlogo.png")}
        />

        {/* radio button title */}
        {categoryList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: RFPercentage(3),
              marginTop: RFPercentage(4),
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setmenuid(item.id)}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                  borderWidth: RFPercentage(0.5),
                  borderRadius: RFPercentage(4),
                  borderColor: Colors.grey,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {menuid === item.id ? (
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
              <Text
                style={{
                  marginLeft: RFPercentage(2),
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* price range */}
        <View style={{ marginTop: RFPercentage(5) }} />
        <Fieldtwoend
          inputTitle="Price range"
          imageSource={require("../../assets/images/uparrowlogo.png")}
        />

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <View style={{ width: "90%" }}>
            <Text
              style={{
                fontSize: RFPercentage(2.4),
                color: Colors.blacky,
                fontFamily: FontFamily.medium,
              }}
            >
              R20
            </Text>
            <View style={{ position: "absolute", right: 0 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                R{value}
              </Text>
            </View>
          </View>
          <Slider
            style={{ width: "90%", height: 40 }}
            minimumValue={20}
            maximumValue={200}
            step={1}
            minimumTrackTintColor={Colors.primary}
            maximumTrackTintColor={Colors.placeholder}
            thumbTintColor={Colors.primary}
            onValueChange={handleValueChange}
          />
        </View>

        {/* offers */}
        <View style={{ marginTop: RFPercentage(4) }} />
        <Fieldtwoend
          inputTitle="Offers"
          imageSource={require("../../assets/images/uparrowlogo.png")}
        />

        {/* radio button title */}
        {offerList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: RFPercentage(3),
              marginTop: RFPercentage(4),
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setofferid(item.id)}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                  borderWidth: RFPercentage(0.5),
                  borderRadius: RFPercentage(4),
                  borderColor: Colors.grey,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {offerid === item.id ? (
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
              <Text
                style={{
                  marginLeft: RFPercentage(2),
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* dietry */}
        <View style={{ marginTop: RFPercentage(5) }} />
        <Fieldtwoend
          inputTitle="Dietary"
          imageSource={require("../../assets/images/uparrowlogo.png")}
        />

        {/* radio button title */}
        {dietaryList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: RFPercentage(3),
              marginTop: RFPercentage(4),
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setdietid(item.id)}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                  borderWidth: RFPercentage(0.5),
                  borderRadius: RFPercentage(4),
                  borderColor: Colors.grey,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {dietid === item.id ? (
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
              <Text
                style={{
                  marginLeft: RFPercentage(2),
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Add Card */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("BottomTab", {
              screen: "HomeScreen",
            });
          }}
          style={styles.loginbutton}
          activeOpacity={0.7}
        >
          <AppButton title="Apply" buttonColor={Colors.primary} />
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
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(7),
    marginBottom: RFPercentage(5),
  },
});
