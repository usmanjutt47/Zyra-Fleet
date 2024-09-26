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
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import axios from "axios"; // Ensure you import axios
const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function ChangePassword() {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const route = useRoute();
  const { email } = route.params; // Email ko params se le rahe hain

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

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Error", "New password and confirm password are required");
      console.error("New password and confirm password are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      console.error("Passwords do not match");
      return;
    }

    setLoading(true); // Loading state ko true karen
    try {
      const response = await axios.post(
        "http://192.168.10.5:5000/api/users/change-password",
        { email, newPassword, confirmPassword } // Email ko yahan add kiya gaya
      );
      Alert.alert("Success", response.data.message);
      navigation.navigate("LoginScreen"); // Yahan pe navigation kar rahe hain
    } catch (error) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong"
      );
      console.error("API error:", error); // Console mein error log karte hain
    } finally {
      setLoading(false); // Loading state ko false karen
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
            style={{ marginTop: responsiveHeight(20), fontFamily: "medium" }}
          >
            New Password
          </Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/password.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Enter new password"
              style={styles.input}
              placeholderTextColor={"#7C7C7C"}
              secureTextEntry={!showPassword}
              cursorColor={"#92499C"}
              onChangeText={setNewPassword} // Yahan par value ko handle karne ke liye
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#7C7C7C"
                style={{ marginRight: responsiveHeight(10) }}
              />
            </Pressable>
          </View>
        </View>
        <View>
          <Text
            style={{ marginTop: responsiveHeight(20), fontFamily: "medium" }}
          >
            Confirm Password
          </Text>
          <View style={styles.inputContainer}>
            <Pressable style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/password.png")}
                style={styles.inputIcon}
              />
            </Pressable>
            <TextInput
              placeholder="Confirm your password"
              style={styles.input}
              placeholderTextColor={"#7C7C7C"}
              secureTextEntry={!showPassword}
              cursorColor={"#92499C"}
              onChangeText={setConfirmPassword} // Yahan par value ko handle karne ke liye
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#7C7C7C"
                style={{ marginRight: responsiveHeight(10) }}
              />
            </Pressable>
          </View>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={handleChangePassword} // API call karne ke liye
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
});
