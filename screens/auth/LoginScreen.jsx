import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [isTicked, setIsTicked] = useState(false);

  const handleLogin = async () => {
    if (!email) {
      Alert.alert("Error", "Email is required");
      return;
    }
    if (!password) {
      Alert.alert("Error", "Password is required");
      return;
    }

    try {
      const response = await fetch(`http://192.168.10.9:5000/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        try {
          await AsyncStorage.setItem("userId", data.user._id);
          const savedUserId = await AsyncStorage.getItem("userId");
          console.log("Saved User ID:", savedUserId);

          Alert.alert("Login Successful", data.message);
          navigation.navigate("Home");
        } catch (storageError) {
          Alert.alert("Error", "Could not save user data locally");
        }
      } else {
        Alert.alert("Login Failed", data.message || "Something went wrong");
      }
    } catch (networkError) {
      console.log("Network Error:", networkError);
      Alert.alert("Error", "Network error, please try again");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "90%", height: "100%", alignSelf: "center" }}>
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
            <Text
              style={{ marginTop: responsiveHeight(40), fontFamily: "medium" }}
            >
              Email
            </Text>
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
                cursorColor={"#92499C"}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View>
            <Text
              style={{ marginTop: responsiveHeight(20), fontFamily: "medium" }}
            >
              Password
            </Text>
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
                cursorColor={"#92499C"}
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View
            style={[
              styles.forgetPasswordContainer,

              styles.forgetPasswordContainer2,
            ]}
          >
            <Pressable
              style={{ flexDirection: "row" }}
              onPress={() => setIsTicked(!isTicked)}
            >
              <Pressable style={styles.container}>
                {isTicked ? <Text style={styles.tickIcon}>✔</Text> : null}
              </Pressable>
              <Text style={styles.savePasswword}>Save password</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </Pressable>
          </View>
          <Pressable style={styles.buttonContainer} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
          <Pressable style={styles.textOuterContainer}>
            <View style={styles.textMainContainer}>
              <Pressable>
                <Text>Do not have an account? </Text>
              </Pressable>
              <Pressable
                style={styles.textContainer}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text style={styles.signUpText}>Sign up</Text>
              </Pressable>
            </View>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: responsiveHeight(40),
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#C7C7C7" }} />
            <Text style={{ marginHorizontal: 10 }}>or</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#C7C7C7" }} />
          </View>
          <View style={{ marginTop: responsiveHeight(40) }}>
            <Pressable style={styles.facebook}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Pressable
                  style={{
                    height: responsiveHeight(30),
                    width: responsiveWidth(30),
                    borderRadius: 99,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EvilIcons name="sc-facebook" size={30} color="#4267B2" />
                </Pressable>
                <Text
                  style={{
                    marginLeft: responsiveHeight(5),
                    fontWeight: "regular",
                  }}
                >
                  Continue with Facebook
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.facebook, { marginTop: responsiveHeight(10) }]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Pressable
                  style={{
                    height: responsiveHeight(30),
                    width: responsiveWidth(30),
                    borderRadius: 99,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: -20,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/google.png")}
                    style={{ height: 17, width: 17 }}
                  />
                </Pressable>
                <Text
                  style={{
                    marginLeft: responsiveHeight(5),
                    fontWeight: "regular",
                    fontWeight: "regular",
                  }}
                >
                  Continue with Google
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.facebook,
                {
                  marginTop: responsiveHeight(10),
                  marginBottom: responsiveHeight(40),
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Pressable
                  style={{
                    height: responsiveHeight(30),
                    width: responsiveWidth(30),
                    borderRadius: 99,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: -30,
                  }}
                >
                  <AntDesign name="apple1" size={17} color="black" />
                </Pressable>
                <Text
                  style={{
                    marginLeft: responsiveHeight(5),
                    fontWeight: "regular",
                  }}
                >
                  Continue with Apple
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
  heading: {
    fontSize: responsiveFontSize(28),
    fontFamily: "semiBold",
    marginTop: responsiveHeight(20),
  },
  desc: {
    fontSize: responsiveFontSize(12),
    fontFamily: "regular",
    color: "#9D9D9D",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    height: responsiveHeight(48),
    marginTop: responsiveHeight(5),
  },
  input: {
    fontSize: responsiveFontSize(12),
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
    height: responsiveHeight(27),
    width: responsiveWidth(27),
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  forgetPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: responsiveHeight(20),
  },
  forgetText: {
    textAlign: "right",
    color: "#92499C",
    fontFamily: "regular",
    fontWeight: "bold",
  },
  savePasswword: {
    fontSize: responsiveFontSize(12),
    color: "#7C7C7C",
    fontFamily: "regular",
  },
  container: {
    height: responsiveHeight(15),
    width: responsiveWidth(15),
    borderWidth: 1,
    borderColor: "#D2D2D2",
    marginRight: responsiveWidth(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  forgetPasswordContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  buttonContainer: {
    height: responsiveHeight(48),
    width: "100%",
    backgroundColor: "#92499C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: responsiveHeight(40),
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "regular",
    color: "#ffff",
  },
  signUpText: {
    color: "#92499C",
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  textMainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textOuterContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: responsivePadding(10),
  },
  facebook: {
    height: responsiveHeight(48),
    width: "100%",
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    borderRadius: 10,
  },
  tickIcon: {
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: responsiveHeight(12),
    color: "#D2D2D2",
    fontSize: 10,
  },
});
