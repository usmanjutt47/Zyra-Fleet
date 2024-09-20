import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const rf = (size) => (size * width) / 375;
const rp = (size) => (size * width) / 375;
const rw = (size) => (size * height) / 812;
const rh = (size) => (size * width) / 375;

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ width: "95%", height: "100%", alignSelf: "center" }}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" color="#444444" size={25} />
        </Pressable>
        <Text style={styles.heading}>Login Account</Text>
        <Text style={styles.desc}>
          Fill the information and for create a account?
        </Text>

        <View>
          <Text style={{ marginTop: rh(40) }}>Email</Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../../assets/icons/email.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Enter your email address"
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor={"#7C7C7C"}
            />
          </View>
        </View>

        <View>
          <Text style={{ marginTop: rh(20) }}>Password</Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../../assets/icons/password.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Enter your Password"
              style={styles.input}
              placeholderTextColor={"#7C7C7C"}
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    width: rw(37),
    height: rh(35),
    backgroundColor: "#f1f1f1",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: rf(28),
    fontFamily: "semiBold",
    marginTop: rh(20),
  },
  desc: {
    fontSize: rf(12),
    fontFamily: "regular",
    color: "#9D9D9D",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    height: rh(48),
    marginTop: rh(5),
  },
  input: {
    fontSize: rf(12),
    flex: 1,
    borderRadius: 8,
    color: "#000",
  },
  inputIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  iconContainer: {
    height: rh(27),
    width: rw(27),
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
