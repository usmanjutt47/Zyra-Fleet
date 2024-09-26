import {
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [truckNumber, setTruckNumber] = useState("");
  const [partDescription, setPartDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [userId, setUserId] = useState(null);
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [storeName, setStoreName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("name");
        const storedUserId = await AsyncStorage.getItem("userId");

        if (storedName) {
          setStoreName(storedName);
        }

        if (storedUserId) {
          setUserId(storedUserId);
        }
      } catch (error) {
        Alert.alert("Error", "Failed to load user data");
        console.log("Error loading user data:", error);
      }
    };

    loadUserData();
  }, []);

  const CustomAlert = ({ message, onClose }) => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            width: "90%",
            height: "100%",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: responsiveHeight(250),
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: 33,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Image
              source={require("../assets/icons/success.png")}
              style={{
                height: 100,
                width: 100,
                resizeMode: "contain",
                alignSelf: "center",
                marginTop: responsiveHeight(20),
              }}
            />
            <Text style={{ textAlign: "center", fontSize: 24 }}>
              Send Successfully
            </Text>
            <Text style={{ textAlign: "center" }}>
              Your request has been sent successfully
            </Text>
            <TouchableOpacity
              onPress={() => {
                onClose();
                navigation.navigate("Home");
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#92499C",
                  marginTop: responsiveHeight(27),
                  textDecorationLine: "underline",
                  fontFamily: "bold",
                }}
              >
                Request Another
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const handleSubmit = async () => {
    if (!name || !email || !truckNumber || !partDescription) {
      Alert.alert("Validation Error", "Please fill all required fields");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(
        "http://192.168.10.5:5000/api/users/truck-entry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            name,
            email,
            truckNumber,
            partDescription,
            notes,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        setToastMessage("Truck entry created successfully!");
        setToast(true);

        setName("");
        setEmail("");
        setTruckNumber("");
        setPartDescription("");
        setNotes("");
      } else {
        Alert.alert("Error", data.message || "Failed to create truck entry");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {toast ? (
        <CustomAlert message={toastMessage} onClose={() => setToast(false)} />
      ) : (
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
              Hey,👋 {storeName}
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

              {/* Name Input */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(30),
                    fontFamily: "medium",
                  }}
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
                    value={name}
                    onChangeText={(text) => setName(text)} // Bind name state
                    onSubmitEditing={() => emailInputRef.current.focus()}
                  />
                </View>
              </View>

              {/* Email Input */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(20),
                    fontFamily: "medium",
                  }}
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
                    blurOnSubmit={false}
                    cursorColor={"#92499C"}
                    value={email}
                    onChangeText={(text) => setEmail(text)} // Bind email state
                    onSubmitEditing={() => truckNoInputRef.current.focus()}
                  />
                </View>
              </View>

              {/* Truck No Input */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(20),
                    fontFamily: "medium",
                  }}
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
                    blurOnSubmit={false}
                    cursorColor={"#92499C"}
                    value={truckNumber}
                    onChangeText={(text) => setTruckNumber(text)} // Bind truck number state
                    onSubmitEditing={() => partDescInputRef.current.focus()}
                  />
                </View>
              </View>

              {/* Part Description Input */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(20),
                    fontFamily: "medium",
                  }}
                >
                  Part Description
                </Text>
                <View style={[styles.inputContainer, { height: 100 }]}>
                  <TextInput
                    ref={partDescInputRef}
                    placeholder="Type here"
                    style={[styles.descInput, { paddingLeft: 10, height: 100 }]}
                    placeholderTextColor={"#7C7C7C"}
                    multiline={true}
                    cursorColor={"#92499C"}
                    value={partDescription}
                    onChangeText={(text) => setPartDescription(text)}
                    onSubmitEditing={() => notesInputRef.current.focus()}
                  />
                </View>
              </View>

              {/* Notes Input */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(20),
                    fontFamily: "medium",
                  }}
                >
                  Notes
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={notesInputRef}
                    placeholder="Type here"
                    style={[styles.input, { paddingLeft: 10 }]}
                    placeholderTextColor={"#7C7C7C"}
                    cursorColor={"#92499C"}
                    multiline={true}
                    value={notes}
                    onChangeText={(text) => setNotes(text)}
                  />
                </View>
              </View>

              {/* Submit Button */}
              <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                  {loading ? "Loading..." : "Submit"}
                </Text>
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
                <Pressable onPress={() => navigation.navigate("ContactUs")}>
                  <Text style={{ color: "#7C7C7C", fontFamily: "regular" }}>
                    Contact us
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate("TeamsAndConditions")}
                >
                  <Text style={{ color: "#7C7C7C", fontFamily: "regular" }}>
                    Teams & Conditions
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      )}
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: "90%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    elevation: 2,
  },
  alertText: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#92499C",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
