import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function SuccessToast() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          width: "90%",
          height: "100%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: responsiveHeight(250),
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 33,
            // Shadow for iOS
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow position
            shadowOpacity: 0.25, // Shadow transparency
            shadowRadius: 3.84, // Shadow blur
            // Shadow for Android
            elevation: 5, // Use elevation for Android
          }}
        >
          <Image
            source={require("../assets/icons/success.png")}
            style={{
              height: 100,
              width: 100,
              resizeMode: "contain",
              alignSelf: "center",
              marginTop: responsiveHeight(20),
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 24 }}>
            Send Successfully
          </Text>
          <Text style={{ textAlign: "center" }}>
            Your request has been sent successfully
          </Text>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text
              style={{
                textAlign: "center",
                color: "#92499C",
                marginTop: responsiveHeight(27),
                textDecorationLine: "underline", // Adds underline like a link
                fontFamily: "bold",
              }}
            >
              Request Another
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
