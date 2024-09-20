import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const rf = (size) => (size * width) / 375;
const rp = (size) => (size * width) / 375;
const rw = (size) => (size * height) / 812;
const rh = (size) => (size * width) / 375;

export default function OnBoardingScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Image
        source={require("../assets/images/onBoarding.png")}
        style={styles.mainImg}
      />
      <View style={styles.headingContainer}>
        <View
          style={{
            width: "90%",
            alignItems: "center",
          }}
        >
          <Text style={styles.heading}>Register Your Truck</Text>
          <Text style={styles.headingDesc}>
            Register your truck by entering details like model and license plate
            for easy tracking, compliance, and fleet management.
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Image
              source={require("../assets/icons/next.png")}
              style={styles.buttonImage}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: rw(100),
    height: rh(55),
    resizeMode: "contain",
  },
  mainImg: {
    width: "100%",
    height: "75%",
  },
  headingContainer: {
    width: rw(370),
    height: rh(233),
    backgroundColor: "#92499C",
    borderRadius: 35,
    position: "absolute",
    bottom: rh(40),
    alignItems: "center",
  },
  heading: {
    fontSize: rf(24),
    fontFamily: "semiBold",
    color: "#fff",
    textAlign: "center",
    marginTop: rh(30),
  },
  headingDesc: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "regular",
  },
  button: {
    width: rw(100),
    height: rh(42),
    backgroundColor: "#FFFFFF",
    borderRadius: 35,
    justifyContent: "center",
    marginTop: rh(30),
  },
  buttonImage: {
    width: rw(30),
    height: rh(30),
    resizeMode: "contain",
    alignSelf: "center",
  },
});
