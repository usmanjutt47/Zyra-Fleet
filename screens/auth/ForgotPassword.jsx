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
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function ForgotPassword() {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Step 1: Add loading state

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

  // Function to send OTP
  const sendOTP = async () => {
    if (!email) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Email is required",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://192.168.10.5:5000/api/users/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Toast.show({
          type: "success",
          text1: "OTP Sent",
          text2: data.message,
        });

        setTimeout(() => {
          navigation.navigate("OTPScreen", { email });
        }, 1000);
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: data.message,
        });
      }
      setEmail("");
    } catch (error) {
      console.error("Error sending OTP:", error);
      Toast.show({
        type: "error",
        text1: "Network Error",
        text2: "Please try again later.",
      });
    } finally {
      setLoading(false); // Step 3: Reset loading state
    }
  };

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
          <Text style={styles.titleText}>Forgot Password</Text>
          <Text style={styles.subtitleText}>
            Please enter your email to reset your password
          </Text>
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
              source={require("../../assets/icons/lock.png")}
              style={{ resizeMode: "contain", height: 40, width: 40 }}
            />
          </Pressable>
        </View>

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

        <Pressable
          style={styles.buttonContainer}
          onPress={sendOTP}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "Next"}
          </Text>
        </Pressable>

        <Toast />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Your existing styles
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
    marginTop: responsiveHeight(150),
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "regular",
    color: "#ffff",
  },
});
