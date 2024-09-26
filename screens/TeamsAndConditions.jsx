import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function TeamsAndConditions() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ height: "100%", width: "90%", alignSelf: "center" }}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" color="#444444" size={25} />
        </Pressable>
        <Text
          style={{
            marginTop: responsiveHeight(30),
            fontFamily: "medium",
            fontSize: responsiveFontSize(28),
          }}
        >
          Terms & Conditions
        </Text>
        <Text style={{ fontFamily: "regular" }}>
          A dwarf who brings a standard along with him to measure his own size,
          take my word,
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            marginTop: responsiveHeight(20),
            color: "#92499C",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(20) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(5) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(5) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(5) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(5) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(5) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(5) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(5) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(5) }}>
          <Pressable
            style={{
              backgroundColor: "#868686",
              height: responsiveHeight(10),
              width: responsiveWidth(10),
              borderRadius: 99,
              flexDirection: "row",
              marginTop: responsiveHeight(4),
            }}
          ></Pressable>
          <Text
            style={{
              fontFamily: "regular",
              paddingLeft: responsiveHeight(5),
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    width: responsiveWidth(37),
    height: responsiveHeight(35),
    backgroundColor: "#f1f1f1",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
