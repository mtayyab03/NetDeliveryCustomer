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
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function HomeScreen(props) {
  const [link, onChangeLink] = useState("");
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
  const discountList = [
    {
      id: 1,
      title: "Mcdonalds, Mall Square",
      subtitle: "R15.00 Delivery fee  20-30 min",
      rating: "3.0",
      imageSource: require("../../assets/images/fooddis1.png"),
    },
    {
      id: 2,
      title: "Tasty,Pacakages Mall",
      subtitle: "Service at Home",
      rating: "3.0",
      imageSource: require("../../assets/images/fooddist2.png"),
    },
  ];
  const scrolltwoList = [
    {
      id: 1,
      title: "Corner BBQ",
      subtitle: "R15.00 Delivery fee  20-30 min",
      rating: "4.0",
      imageSource: require("../../assets/images/barbimg.png"),
    },
    {
      id: 2,
      title: "Tasty,Pacakages Mall",
      subtitle: "Service at Home",
      rating: "3.0",
      imageSource: require("../../assets/images/twiimage.png"),
    },
  ];
  const scrollthreeList = [
    {
      id: 1,
      title: "Mcdonalds, Mall Square",
      subtitle: "R15.00 Delivery fee  20-30 min",
      rating: "3.0",
      imageSource: require("../../assets/images/fooddis1.png"),
    },
    {
      id: 2,
      title: "Tasty,Pacakages Mall",
      subtitle: "Service at Home",
      rating: "3.0",
      imageSource: require("../../assets/images/barbimg.png"),
    },
  ];

  return (
    <Screen style={styles.screen}>
      <ScrollView
        scrollEnabled={menuid === 1 ? false : true}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(3),
            marginBottom: RFPercentage(2),
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                }}
                source={require("../../assets/images/locationicon.png")}
              />
            </View>
            <View style={{ marginLeft: RFPercentage(1) }}>
              <Text
                style={{
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(1.6),
                  color: Colors.blacky,
                }}
              >
                Now
              </Text>
              <View
                style={{ flexDirection: "row", marginTop: RFPercentage(0.5) }}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(2),
                    color: Colors.blacky,
                  }}
                >
                  539 Bluegum Street
                </Text>
              </View>
            </View>
          </View>

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

        {menuid === 2 ? (
          <>
            {/* search */}
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginTop: RFPercentage(5),
                alignItems: "center",
              }}
            >
              <View style={styles.searchmain}>
                <View style={styles.innermain}>
                  <Image
                    style={styles.img}
                    source={require("../../assets/images/Search.png")}
                  />

                  <TextInput
                    style={styles.inputtext}
                    onChangeText={onChangeLink}
                    value={link}
                    placeholder="Restaurant, Food, Drinks"
                    placeholderTextColor={Colors.blacky}
                  />
                </View>
              </View>
              <View style={{ marginLeft: "3%" }} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: "15%" }}
                onPress={() => {
                  props.navigation.navigate("FilterScreen");
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(6),
                    height: RFPercentage(6),
                  }}
                  source={require("../../assets/images/filterlogo.png")}
                />
              </TouchableOpacity>
            </View>

            {/* discount food scrolllist */}
            <ScrollView
              contentContainerStyle={{
                marginTop: RFPercentage(5),
                marginLeft: RFPercentage(3),
                paddingRight: 30,
                flexDirection: "row",
              }}
              style={{ flexShrink: 0, flexGrow: 0 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {discountList.map((item, i) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    props.navigation.navigate("ResturantScreen");
                  }}
                  key={i}
                  style={{
                    alignItems: "center",
                    marginRight: RFPercentage(4.5),
                    overflow: "hidden",
                  }}
                >
                  <ImageBackground
                    style={{
                      width: RFPercentage(43),
                      height: RFPercentage(18),
                      alignItems: "center",
                      paddingTop: RFPercentage(1),
                    }}
                    source={item.imageSource}
                  >
                    <View style={{ width: "92%", flexDirection: "row" }}>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                          width: RFPercentage(10),
                          height: RFPercentage(5),
                          backgroundColor: Colors.lightWhite,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: RFPercentage(5),
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: FontFamily.medium,
                            fontSize: RFPercentage(1.7),
                            color: Colors.blue,
                          }}
                        >
                          25% Off
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          position: "absolute",
                          justifyContent: "center",
                          top: RFPercentage(1),
                          right: 0,
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(3),
                            height: RFPercentage(3),
                          }}
                          source={require("../../assets/images/hearticon.png")}
                        />
                      </View>
                    </View>
                  </ImageBackground>

                  <View
                    style={{
                      width: "90%",
                      flexDirection: "row",
                      marginTop: RFPercentage(0.5),
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          marginTop: RFPercentage(1),
                          fontFamily: FontFamily.semiBold,
                          fontSize: RFPercentage(2.2),
                          color: Colors.blacky,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          marginTop: RFPercentage(1),
                          fontFamily: FontFamily.regular,
                          fontSize: RFPercentage(2),
                          color: Colors.subtextcolor,
                        }}
                      >
                        {item.subtitle}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        justifyContent: "center",
                        top: RFPercentage(1),
                        right: 0,
                      }}
                    >
                      <Image
                        style={{
                          width: RFPercentage(2.5),
                          height: RFPercentage(2.5),
                        }}
                        source={require("../../assets/images/staricon.png")}
                      />
                      <Text
                        style={{
                          marginLeft: RFPercentage(1),
                          fontFamily: FontFamily.semiBold,
                          fontSize: RFPercentage(2.2),
                          color: Colors.yellow,
                        }}
                      >
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* 2nd scrolllist */}
            <ScrollView
              contentContainerStyle={{
                marginTop: RFPercentage(5),
                marginLeft: RFPercentage(3),
                paddingRight: 30,
                flexDirection: "row",
              }}
              style={{ flexShrink: 0, flexGrow: 0 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {scrolltwoList.map((item, i) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    props.navigation.navigate("ResturantScreen");
                  }}
                  key={i}
                  style={{
                    alignItems: "center",
                    marginRight: RFPercentage(4.5),
                    overflow: "hidden",
                  }}
                >
                  <ImageBackground
                    style={{
                      width: RFPercentage(43),
                      height: RFPercentage(18),
                      alignItems: "center",
                      paddingTop: RFPercentage(1),
                    }}
                    source={item.imageSource}
                  >
                    <View style={{ width: "92%", flexDirection: "row" }}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          position: "absolute",
                          justifyContent: "center",
                          top: RFPercentage(1),
                          right: 0,
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(3),
                            height: RFPercentage(3),
                          }}
                          source={require("../../assets/images/hearticon.png")}
                        />
                      </View>
                    </View>
                  </ImageBackground>

                  <View
                    style={{
                      width: "90%",
                      flexDirection: "row",
                      marginTop: RFPercentage(0.5),
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          marginTop: RFPercentage(1),
                          fontFamily: FontFamily.semiBold,
                          fontSize: RFPercentage(2.2),
                          color: Colors.blacky,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          marginTop: RFPercentage(1),
                          fontFamily: FontFamily.regular,
                          fontSize: RFPercentage(2),
                          color: Colors.subtextcolor,
                        }}
                      >
                        {item.subtitle}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        justifyContent: "center",
                        top: RFPercentage(1),
                        right: 0,
                      }}
                    >
                      <Image
                        style={{
                          width: RFPercentage(2.5),
                          height: RFPercentage(2.5),
                        }}
                        source={require("../../assets/images/staricon.png")}
                      />
                      <Text
                        style={{
                          marginLeft: RFPercentage(1),
                          fontFamily: FontFamily.semiBold,
                          fontSize: RFPercentage(2.2),
                          color: Colors.yellow,
                        }}
                      >
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* 3rd scrolllist */}
            <ScrollView
              contentContainerStyle={{
                marginTop: RFPercentage(5),
                marginLeft: RFPercentage(3),
                paddingRight: 30,
                flexDirection: "row",
              }}
              style={{ flexShrink: 0, flexGrow: 0 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {scrollthreeList.map((item, i) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    props.navigation.navigate("ResturantScreen");
                  }}
                  key={i}
                  style={{
                    alignItems: "center",
                    marginRight: RFPercentage(4.5),
                    overflow: "hidden",
                  }}
                >
                  <ImageBackground
                    style={{
                      width: RFPercentage(43),
                      height: RFPercentage(18),
                      alignItems: "center",
                      paddingTop: RFPercentage(1),
                    }}
                    source={item.imageSource}
                  >
                    <View style={{ width: "92%", flexDirection: "row" }}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          position: "absolute",
                          justifyContent: "center",
                          top: RFPercentage(1),
                          right: 0,
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(3),
                            height: RFPercentage(3),
                          }}
                          source={require("../../assets/images/hearticon.png")}
                        />
                      </View>
                    </View>
                  </ImageBackground>

                  <View
                    style={{
                      width: "90%",
                      flexDirection: "row",
                      marginTop: RFPercentage(0.5),
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          marginTop: RFPercentage(1),
                          fontFamily: FontFamily.semiBold,
                          fontSize: RFPercentage(2.2),
                          color: Colors.blacky,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          marginTop: RFPercentage(1),
                          fontFamily: FontFamily.regular,
                          fontSize: RFPercentage(2),
                          color: Colors.subtextcolor,
                        }}
                      >
                        {item.subtitle}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        justifyContent: "center",
                        top: RFPercentage(1),
                        right: 0,
                      }}
                    >
                      <Image
                        style={{
                          width: RFPercentage(2.5),
                          height: RFPercentage(2.5),
                        }}
                        source={require("../../assets/images/staricon.png")}
                      />
                      <Text
                        style={{
                          marginLeft: RFPercentage(1),
                          fontFamily: FontFamily.semiBold,
                          fontSize: RFPercentage(2.2),
                          color: Colors.yellow,
                        }}
                      >
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        ) : (
          <View style={{ width: "100%", alignItems: "center" }}>
            <View
              style={{
                width: "90%",
                zIndex: 1,
                flexDirection: "row",
                marginTop: RFPercentage(5),
                alignItems: "center",
              }}
            >
              <View
                style={[styles.searchmain, { backgroundColor: Colors.white }]}
              >
                <View style={styles.innermain}>
                  <Image
                    style={styles.img}
                    source={require("../../assets/images/Search.png")}
                  />

                  <TextInput
                    style={styles.inputtext}
                    onChangeText={onChangeLink}
                    value={link}
                    placeholder="Restaurant, Food, Drinks"
                    placeholderTextColor={Colors.blacky}
                  />
                </View>
              </View>
              <View style={{ marginLeft: "3%" }} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: "15%" }}
                onPress={() => {
                  props.navigation.navigate("FilterScreen");
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(6),
                    height: RFPercentage(6),
                  }}
                  source={require("../../assets/images/filterblacklogo.png")}
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
              {/* container */}
            </MapView>

            {/* card */}
            <View
              style={{
                width: "100%",
                height: RFPercentage(50),
                marginTop: RFPercentage(25),
                alignItems: "center",
                backgroundColor: Colors.white,
                borderRadius: RFPercentage(2),
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: RFPercentage(0.7),
                  backgroundColor: Colors.lightWhite,
                  borderRadius: RFPercentage(1),
                  marginTop: RFPercentage(1.5),
                  marginBottom: RFPercentage(2),
                }}
              />

              {/* 2nd scrolllist */}
              <ScrollView
                contentContainerStyle={{
                  alignItems: "center",
                  paddingBottom: 70,
                  justifyContent: "center",
                }}
                showsVerticalScrollIndicator={false}
                style={{ width: "100%", flexGrow: 0 }}
              >
                {scrollthreeList.map((item, i) => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      props.navigation.navigate("ResturantScreen");
                    }}
                    key={i}
                    style={{
                      width: "100%",
                      alignItems: "center",
                      overflow: "hidden",
                      justifyContent: "center",
                      marginTop: RFPercentage(4),
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: RFPercentage(50),
                        height: RFPercentage(22),
                        alignItems: "center",
                        paddingTop: RFPercentage(1),
                      }}
                      source={item.imageSource}
                    >
                      <View style={{ width: "92%", flexDirection: "row" }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            position: "absolute",
                            justifyContent: "center",
                            top: RFPercentage(1),
                            right: 0,
                          }}
                        >
                          <Image
                            style={{
                              width: RFPercentage(3),
                              height: RFPercentage(3),
                            }}
                            source={require("../../assets/images/hearticon.png")}
                          />
                        </View>
                      </View>
                    </ImageBackground>

                    <View
                      style={{
                        width: "80%",
                        flexDirection: "row",
                        marginTop: RFPercentage(0.5),
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            marginTop: RFPercentage(1),
                            fontFamily: FontFamily.semiBold,
                            fontSize: RFPercentage(2.2),
                            color: Colors.blacky,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            marginTop: RFPercentage(1),
                            fontFamily: FontFamily.regular,
                            fontSize: RFPercentage(2),
                            color: Colors.subtextcolor,
                          }}
                        >
                          {item.subtitle}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          position: "absolute",
                          justifyContent: "center",
                          top: RFPercentage(1),
                          right: 0,
                        }}
                      >
                        <Image
                          style={{
                            width: RFPercentage(2.5),
                            height: RFPercentage(2.5),
                          }}
                          source={require("../../assets/images/staricon.png")}
                        />
                        <Text
                          style={{
                            marginLeft: RFPercentage(1),
                            fontFamily: FontFamily.semiBold,
                            fontSize: RFPercentage(2.2),
                            color: Colors.yellow,
                          }}
                        >
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        )}
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchmain: {
    width: "83%",
    backgroundColor: Colors.lightWhite,
    padding: RFPercentage(1),
    borderRadius: RFPercentage(1),
    height: RFPercentage(8),
    justifyContent: "center",
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFPercentage(2),
  },

  img: { width: RFPercentage(3), height: RFPercentage(3) },

  inputtext: {
    width: "100%",
    paddingLeft: RFPercentage(1.5),
    fontSize: RFPercentage(1.9),
    color: Colors.blacky,
    fontFamily: FontFamily.medium,
  },
});
