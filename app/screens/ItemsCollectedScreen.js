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
import MapView, { Marker, Polyline } from "react-native-maps";

//Components
import Screen from "../components/Screen";
import AddRemoveProducr from "../components/AddRemoveProducr";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ItemsCollectedScreen(props) {
  const [menuid, setmenuid] = useState(0);
  const categoryList = [
    {
      id: 1,
      title: "Sprite",
      price: "2.00",
    },
    {
      id: 2,
      title: "Fanta",
      price: "2.50",
    },
    {
      id: 3,
      title: "Coke",
      price: "2.50",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View
        style={{
          width: "100%",
          height: RFPercentage(25),
          backgroundColor: Colors.purewhite,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ResturantScreen");
          }}
          style={{
            position: "absolute",
            right: RFPercentage(2),
            top: RFPercentage(2),
          }}
        >
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/cancicon.png")}
          />
        </TouchableOpacity>
        <View style={{ marginTop: RFPercentage(5) }} />
        <Image
          style={{
            width: RFPercentage(21),
            height: RFPercentage(17),
          }}
          source={require("../../assets/images/burger2.png")}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: RFPercentage(1.5),
          marginBottom: RFPercentage(1),
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFPercentage(2.8),
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                }}
              >
                Crunch bruger
              </Text>
              <View style={{ marginTop: RFPercentage(1.5) }} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(2.2),
                    color: Colors.blacky,
                    fontFamily: FontFamily.regular,
                  }}
                >
                  2 cheese, onions, coke, chips, 1 patty
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: RFPercentage(1.5),
                  fontSize: RFPercentage(2.1),
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                }}
              >
                R76.00
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View
          style={{
            width: "90%",
            justifyContent: "center",
            marginTop: RFPercentage(5),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.1),
              color: Colors.blacky,
            }}
          >
            Choose drink
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              position: "absolute",
              right: 0,
              padding: RFPercentage(1),
              backgroundColor: Colors.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: RFPercentage(5),
              paddingHorizontal: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.1),
                color: Colors.white,
              }}
            >
              Required
            </Text>
          </TouchableOpacity>
        </View>

        {/* radio button title */}

        {categoryList.map((item, i) => (
          <View
            key={i}
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              height: RFPercentage(8),

              marginTop: RFPercentage(1),
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
                  fontFamily: FontFamily.regular,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setmenuid(item.id)}
              style={{
                position: "absolute",
                right: 0,
              }}
            >
              <Text
                style={{
                  marginLeft: RFPercentage(2),
                  fontSize: RFPercentage(2.4),
                  color: Colors.blacky,
                  fontFamily: FontFamily.regular,
                }}
              >
                R{item.price}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <View
          style={{
            width: "100%",
            marginTop: RFPercentage(2),
            height: RFPercentage(1),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(1),
          }}
        />

        {/* Add/remove sides */}
        <View
          style={{
            width: "90%",
            justifyContent: "center",
            marginTop: RFPercentage(2),
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.8),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            Add/remove sides
          </Text>
        </View>
        <View style={{ marginTop: RFPercentage(2) }} />
        <AddRemoveProducr title="Potato wedges" price="34.00" />
        <View style={{ marginTop: RFPercentage(3) }} />
        <AddRemoveProducr title="Salad" price="34.00" />

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

        {/* Add/remove toppings */}
        <View
          style={{
            width: "90%",
            justifyContent: "center",
            marginTop: RFPercentage(2),
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(2.8),
              color: Colors.blacky,
              fontFamily: FontFamily.semiBold,
            }}
          >
            Add/remove toppings
          </Text>
        </View>
        <View style={{ marginTop: RFPercentage(2) }} />
        <AddRemoveProducr title="Garnish" price="4.00" />
        <View style={{ marginTop: RFPercentage(3) }} />
        <AddRemoveProducr title="Sauce" price="3.00" />

        {/* last button */}

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginTop: RFPercentage(10),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "35%",
              height: RFPercentage(8),
              backgroundColor: Colors.lightWhite,
              padding: RFPercentage(1),
              borderRadius: RFPercentage(1),

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
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
            <Text
              style={{
                marginHorizontal: RFPercentage(2.5),
                fontSize: RFPercentage(2.6),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
              }}
            >
              1
            </Text>

            <TouchableOpacity
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
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
                source={require("../../assets/images/whitemin.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: "5%" }} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("ViewBasket");
            }}
            style={{
              width: "60%",
              height: RFPercentage(8),
              borderRadius: RFPercentage(1),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.primary,
            }}
          >
            <Text style={styles.buttontext}>Add to basket R76.00</Text>
          </TouchableOpacity>
        </View>
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
  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(2.2),
    fontFamily: FontFamily.bold,
  },
});
