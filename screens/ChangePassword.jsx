import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function ChangePassword() {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const scaleAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    scaleAnimation.start();

    return () => scaleAnimation.stop();
  }, [scaleValue]);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={styles.innerContainer}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" color="#444444" size={25} />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Create New Password</Text>
          <Text style={styles.subtitleText}>Enter your new password</Text>
        </View>

        <View style={styles.circleContainer}>
          <Animated.View
            style={[
              styles.animatedCircle,
              { transform: [{ scale: scaleValue }] },
            ]}
          />
          <Pressable style={styles.pressableCircle}>
            <Image
              source={require("../assets/icons/changePassword.png")}
              style={{ resizeMode: "contain", height: 40, width: 40 }}
            />
          </Pressable>
        </View>
        <View>
          <Text
            style={{ marginTop: responsiveHeight(40), fontFamily: "medium" }}
          >
            New Password
          </Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/email.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Enter new password"
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor={"#7C7C7C"}
              cursorColor={"#92499C"}
            />
          </View>
        </View>
        <View>
          <Text
            style={{ marginTop: responsiveHeight(10), fontFamily: "medium" }}
          >
            Confirm Password
          </Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/email.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Confirm your password"
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor={"#7C7C7C"}
              cursorColor={"#92499C"}
            />
          </View>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    height: "100%",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  backButtonContainer: {
    width: responsiveHeight(35),
    height: responsiveHeight(35),
    backgroundColor: "#f1f1f1",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: responsiveHeight(30),
  },
  titleText: {
    fontSize: responsiveFontSize(28),
    fontFamily: "medium",
  },
  subtitleText: {
    fontFamily: "regular",
    color: "#9D9D9D",
    marginTop: responsiveHeight(-10),
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(50),
  },
  animatedCircle: {
    position: "absolute",
    width: responsiveHeight(125),
    height: responsiveHeight(125),
    borderRadius: 130 / 1,
    backgroundColor: "#E6EEEE",
  },
  pressableCircle: {
    height: responsiveHeight(115),
    width: responsiveHeight(115),
    backgroundColor: "#92499C",
    borderRadius: 115 / 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
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
  input: {
    fontSize: responsiveFontSize(12),
    flex: 1,
    borderRadius: 8,
    color: "#000",
  },
  buttonContainer: {
    height: responsiveHeight(48),
    width: "100%",
    backgroundColor: "#92499C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: responsiveHeight(80),
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "regular",
    color: "#ffff",
  },
});
