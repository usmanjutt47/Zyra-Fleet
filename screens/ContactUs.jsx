import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function ContactUs() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ height: "100%", width: "90%", alignSelf: "center" }}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" color="#444444" size={25} />
        </Pressable>
        <Text
          style={{
            fontSize: responsiveFontSize(28),
            fontFamily: "medium",
            marginTop: responsiveHeight(30),
          }}
        >
          Contact Us
        </Text>
        <View>
          <Text
            style={{
              marginTop: responsiveHeight(30),
              fontFamily: "medium",
            }}
          >
            Name
          </Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/name.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Enter First Name"
              style={styles.input}
              placeholderTextColor={"#7C7C7C"}
              keyboardType="default"
              returnKeyType="next"
              cursorColor={"#92499C"}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: responsiveHeight(30),
              fontFamily: "medium",
            }}
          >
            Last Name
          </Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/name.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Enter Last Name"
              style={styles.input}
              placeholderTextColor={"#7C7C7C"}
              keyboardType="default"
              returnKeyType="next"
              cursorColor={"#92499C"}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: responsiveHeight(30),
              fontFamily: "medium",
            }}
          >
            Email
          </Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/email.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Enter Your Email"
              style={styles.input}
              placeholderTextColor={"#7C7C7C"}
              keyboardType="default"
              returnKeyType="next"
              cursorColor={"#92499C"}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: responsiveHeight(30),
              fontFamily: "medium",
            }}
          >
            Phone
          </Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/phone.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Enter Your Phone"
              style={styles.input}
              placeholderTextColor={"#7C7C7C"}
              keyboardType="default"
              returnKeyType="next"
              cursorColor={"#92499C"}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: responsiveHeight(20),
              fontFamily: "medium",
            }}
          >
            Message
          </Text>
          <View style={[styles.inputContainer, { height: 100 }]}>
            <TextInput
              placeholder="Type here"
              style={[styles.descInput, { paddingLeft: 10, height: 100 }]}
              placeholderTextColor={"#7C7C7C"}
              multiline={true}
              cursorColor={"#92499C"}
            />
          </View>
        </View>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
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
  input: {
    fontSize: responsiveFontSize(12),
    flex: 1,
    borderRadius: 8,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    height: responsiveHeight(48),
    marginTop: responsiveHeight(5),
  },
  iconContainer: {
    height: responsiveHeight(27),
    width: responsiveWidth(27),
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  inputIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  descInput: {
    fontSize: responsiveFontSize(12),
    flex: 1,
    borderRadius: 8,
    color: "#000",
    verticalAlign: "top",
    marginTop: responsiveHeight(10),
  },
  buttonContainer: {
    height: responsiveHeight(48),
    width: "100%",
    backgroundColor: "#92499C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: responsiveHeight(20),
    marginBottom: responsiveHeight(20),
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "regular",
    color: "#ffff",
  },
});
