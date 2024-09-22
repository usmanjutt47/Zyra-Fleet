import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/auth/LoginScreen";
import SignUp from "./screens/auth/SignUp";
import ForgotPassword from "./screens/auth/ForgotPassword";
import HomeScreen from "./screens/HomeScreen";
import YourSubmisions from "./screens/YourSubmisions";
import SuccessToast from "./screens/SuccessToast";
import ContactUs from "./screens/ContactUs";
import TeamsAndConditions from "./screens/TeamsAndConditions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);
  let [fontsLoaded] = useFonts({
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    // AsyncStorage se userId ko check karo
    const checkUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          setInitialRoute("Home"); // Agar userId mil jaye to Home show karo
        } else {
          setInitialRoute("OnBoarding"); // Nahi to OnBoarding show karo
        }
      } catch (error) {
        console.log("Error checking userId from AsyncStorage:", error);
      }
    };

    checkUserId();
  }, []);

  if (!fontsLoaded || initialRoute === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="YourSubmisions" component={YourSubmisions} />
        <Stack.Screen name="SuccessToast" component={SuccessToast} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen
          name="TeamsAndConditions"
          component={TeamsAndConditions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
