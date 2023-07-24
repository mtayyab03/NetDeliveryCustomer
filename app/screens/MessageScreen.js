import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

//Components
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
export default function MessageScreen(props) {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const onSend = () => {
    if (inputText.length > 0) {
      const newMessage = {
        _id: messages.length + 1,
        text: inputText.trim(),
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Your Name",
        },
      };

      setMessages(GiftedChat.append(messages, newMessage));
      setInputText("");
    }
  };
  return (
    <Screen style={styles.screen}>
      {/* header */}
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: RFPercentage(3),
          marginBottom: RFPercentage(3),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ProcessingScreen");
          }}
          style={{ position: "absolute", left: 0 }}
        >
          <Image
            style={{
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/crossicon.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: RFPercentage(2.7),
            color: Colors.blacky,
            fontFamily: FontFamily.regular,
          }}
        >
          Corner BBQ
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ProfileScreen");
          }}
          style={{ position: "absolute", right: 0 }}
        >
          <Image
            style={{
              width: RFPercentage(6),
              height: RFPercentage(6),
            }}
            source={require("../../assets/images/yelphonelogo.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.97 }}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1,
            name: "Your Name",
          }}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  right: {
                    backgroundColor: Colors.primary,
                  },
                  left: {
                    backgroundColor: "#f0f0f0",
                  },
                }}
                textStyle={{
                  right: {
                    color: "#fff",
                  },
                  left: {
                    color: "#000",
                  },
                }}
              />
            );
          }}
          renderInputToolbar={() => (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextInput
                style={{
                  backgroundColor: "#fff",
                  height: 50,
                  borderRadius: 5,
                  paddingHorizontal: 20,
                  marginHorizontal: 10,
                  marginBottom: 10,
                  width: "80%",
                }}
                value={inputText}
                onChangeText={(text) => setInputText(text)}
                placeholder="Type your message here..."
                returnKeyType="send"
                onSubmitEditing={onSend}
              />
              <TouchableOpacity
                onPress={onSend}
                style={{
                  backgroundColor: Colors.primary,
                  borderRadius: 25,
                  marginRight: 10,
                  marginBottom: 10,
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(4),
                    height: RFPercentage(4),
                  }}
                  source={require("../../assets/images/sendlogo.png")}
                />
              </TouchableOpacity>
            </View>
          )}
        />
        {Platform.OS === "android" && (
          <KeyboardAvoidingView behavior="padding" />
        )}
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
});
