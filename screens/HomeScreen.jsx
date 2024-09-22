import {
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function HomeScreen() {
  const emailInputRef = useRef(null);
  const truckNoInputRef = useRef(null);
  const partDescInputRef = useRef(null);
  const notesInputRef = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: responsiveHeight(120),
          backgroundColor: "#92499C",
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(16),
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Hey,👋 M. Usman
        </Text>
        <Pressable
          style={{
            height: 30,
            width: 30,
            borderRadius: 99,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 22,
            top: 50,
          }}
          onPress={() => navigation.navigate("YourSubmisions")}
        >
          <Image
            source={require("../assets/icons/timer.png")}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </Pressable>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            height: "100%",
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 25,
              fontWeight: "medium",
              fontFamily: "semiBold",
              marginTop: responsiveHeight(30),
            }}
          >
            Create Entry
          </Text>
          <Text style={{ color: "#462F4D" }}>
            Please fill the information !!!
          </Text>

          <View>
            <Text
              style={{ marginTop: responsiveHeight(30), fontFamily: "medium" }}
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
                placeholder="Enter Your Name"
                style={styles.input}
                placeholderTextColor={"#7C7C7C"}
                keyboardType="default"
                returnKeyType="next"
                cursorColor={"#92499C"}
                onSubmitEditing={() => emailInputRef.current.focus()}
              />
            </View>
          </View>

          <View>
            <Text
              style={{ marginTop: responsiveHeight(20), fontFamily: "medium" }}
            >
              Email
            </Text>
            <View style={styles.inputContainer}>
              <Pressable style={styles.iconContainer}>
                <Image
                  source={require("../assets/icons/name.png")}
                  style={styles.inputIcon}
                />
              </Pressable>
              <TextInput
                ref={emailInputRef}
                placeholder="Enter Your Email Address"
                style={styles.input}
                placeholderTextColor={"#7C7C7C"}
                returnKeyType="next"
                blurOnSubmit={false} // This prevents keyboard from closing
                onSubmitEditing={() => truckNoInputRef.current.focus()}
                cursorColor={"#92499C"}
              />
            </View>
          </View>

          <View>
            <Text
              style={{ marginTop: responsiveHeight(20), fontFamily: "medium" }}
            >
              Truck No
            </Text>
            <View style={styles.inputContainer}>
              <Pressable style={styles.iconContainer}>
                <Image
                  source={require("../assets/icons/truckNo.png")}
                  style={styles.inputIcon}
                />
              </Pressable>
              <TextInput
                ref={truckNoInputRef}
                placeholder="Enter Truck No"
                style={styles.input}
                placeholderTextColor={"#7C7C7C"}
                returnKeyType="next"
                blurOnSubmit={false} // Prevent keyboard from closing
                onSubmitEditing={() => {
                  if (partDescInputRef.current) {
                    partDescInputRef.current.focus(); // Focus on next input field
                  }
                }}
                cursorColor={"#92499C"}
              />
            </View>
          </View>

          <View>
            <Text
              style={{ marginTop: responsiveHeight(20), fontFamily: "medium" }}
            >
              Part Description
            </Text>
            <View style={[styles.inputContainer, { height: 100 }]}>
              <TextInput
                ref={partDescInputRef}
                placeholder="Type here"
                style={[styles.descInput, { paddingLeft: 10, height: 100 }]}
                placeholderTextColor={"#7C7C7C"}
                secureTextEntry={false}
                multiline={true}
                returnKeyType="next"
                onSubmitEditing={() => notesInputRef.current.focus()} // Now focus Notes
                cursorColor={"#92499C"}
              />
            </View>
          </View>
          <View>
            <Text
              style={{ marginTop: responsiveHeight(20), fontFamily: "medium" }}
            >
              Notes
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                ref={notesInputRef} // Correct reference for Notes
                placeholder="Type here"
                style={[styles.input, { paddingLeft: 10 }]}
                placeholderTextColor={"#7C7C7C"}
                returnKeyType="done"
                cursorColor={"#92499C"}
              />
            </View>
          </View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("SuccessToast")}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
          <Pressable
            style={{
              width: "70%",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: responsiveHeight(10),
            }}
          >
            <Text style={{ color: "#7C7C7C", fontFamily: "regular" }}>
              Contact us
            </Text>
            <Text style={{ color: "#7C7C7C", fontFamily: "regular" }}>
              Teams & Conditions
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  input: {
    fontSize: responsiveFontSize(12),
    flex: 1,
    borderRadius: 8,
    color: "#000",
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
