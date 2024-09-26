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
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function OTPScreen() {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);
  const route = useRoute();
  const { email } = route.params;

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

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    if (text.length === 1) {
      if (index < otp.length - 1) {
        newOtp[index + 1] = "";
        inputsRef.current[index + 1].focus();
      }
    } else if (text.length === 0) {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }

    setOtp(newOtp);
  };

  // Function to verify OTP
  const verifyOTP = async () => {
    const otpString = otp.join(""); // Combine OTP array into a single string

    if (!otpString || otpString.length < 4) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid OTP",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://192.168.10.5:5000/api/users/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp: otpString }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Toast.show({
          type: "success",
          text1: "OTP Verified",
          text2: data.message,
        });

        setTimeout(() => {
          navigation.navigate("ChangePassword", { email });
        }, 1000);
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: data.message,
        });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      Toast.show({
        type: "error",
        text1: "Network Error",
        text2: "Please try again later.",
      });
    } finally {
      setLoading(false);
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
            Please enter the verification code
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
              source={require("../assets/icons/verificationcode.png")}
              style={{ resizeMode: "contain", height: 40, width: 40 }}
            />
          </Pressable>
        </View>
        <Text style={styles.verificationText}>
          We have sent the code to your email.
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              style={styles.otpInput}
              textAlign="center"
              ref={(ref) => (inputsRef.current[index] = ref)}
              onFocus={() => {
                setOtp((prevOtp) => {
                  const newOtp = [...prevOtp];
                  newOtp[index] = newOtp[index] || "";
                  return newOtp;
                });
              }}
            />
          ))}
        </View>

        <Pressable
          style={styles.buttonContainer}
          onPress={verifyOTP}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "Verify"}
          </Text>
        </Pressable>

        <Toast />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  verificationText: {
    textAlign: "center",
    color: "#7C7C7C",
    marginTop: responsiveHeight(15),
    fontFamily: "regular",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: responsiveHeight(30),
  },
  otpInput: {
    backgroundColor: "#F7F7F7",
    height: responsiveHeight(78),
    width: responsiveWidth(78),
    borderRadius: 8,
    fontSize: responsiveFontSize(24),
    textAlign: "center",
    borderColor: "#92499C",
  },
  buttonContainer: {
    height: responsiveHeight(48),
    width: "100%",
    backgroundColor: "#92499C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: responsiveHeight(100),
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "regular",
    color: "#ffff",
  },
});
