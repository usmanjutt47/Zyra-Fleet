import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function SignUp() {
  const [isTicked, setIsTicked] = useState(false);
  const navigation = useNavigation();
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
          <Text style={styles.heading}>Create Account</Text>
          <Text style={styles.desc}>Please Setup Your Account</Text>

          <View>
            <Text style={{ marginTop: responsiveHeight(40) }}>Name</Text>
            <View style={styles.inputContainer}>
              <Pressable style={styles.iconContainer}>
                <Image
                  source={require("../../assets/icons/name.png")}
                  style={styles.inputIcon}
                />
              </Pressable>
              <TextInput
                placeholder="Enter Name"
                style={styles.input}
                keyboardType="email-address"
                placeholderTextColor={"#7C7C7C"}
              />
            </View>
          </View>

          <View>
            <Text style={{ marginTop: responsiveHeight(20) }}>Email</Text>
            <View style={styles.inputContainer}>
              <Pressable style={styles.iconContainer}>
                <Image
                  source={require("../../assets/icons/email.png")}
                  style={styles.inputIcon}
                />
              </Pressable>
              <TextInput
                placeholder="Enter Email"
                style={styles.input}
                keyboardType="email-address"
                placeholderTextColor={"#7C7C7C"}
              />
            </View>
          </View>

          <View>
            <Text style={{ marginTop: responsiveHeight(20) }}>Phone</Text>
            <View style={styles.inputContainer}>
              <Pressable style={styles.iconContainer}>
                <Image
                  source={require("../../assets/icons/phone.png")}
                  style={styles.inputIcon}
                />
              </Pressable>
              <TextInput
                placeholder="Enter Phone"
                style={styles.input}
                keyboardType="number-pad"
                placeholderTextColor={"#7C7C7C"}
              />
            </View>
          </View>

          <View>
            <Text style={{ marginTop: responsiveHeight(20) }}>Password</Text>
            <View style={styles.inputContainer}>
              <Pressable style={styles.iconContainer}>
                <Image
                  source={require("../../assets/icons/password.png")}
                  style={styles.inputIcon}
                />
              </Pressable>
              <TextInput
                placeholder="Enter Password"
                style={styles.input}
                placeholderTextColor={"#7C7C7C"}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View>
            <Text style={{ marginTop: responsiveHeight(20) }}>
              Confirm Password
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
              />
            </View>
          </View>

          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
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
