import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function YourSubmisions() {
  const navigation = useNavigation();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        if (storedUserId) {
          setUserId(storedUserId);
        } else {
          console.warn("User ID not found");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user ID:", error);
        setLoading(false);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://192.168.100.175:5000/api/users/truck-entry/${userId}`
          );
          setSubmissions(response.data.data);
        } catch (error) {
          console.error("Error fetching submissions:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSubmissions();
  }, [userId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    const formattedTime = `${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}${ampm}`;

    return `${formattedTime}, ${formattedDate}`;
  };

  const renderSubmission = ({ item }) => (
    <View style={styles.submissionContainer}>
      <View style={styles.headerContainer}>
        <Pressable style={styles.dot} />
        <Text style={styles.label}>Name :</Text>
        <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
      </View>
      <Text style={styles.text}>{item.name}</Text>
      <View style={styles.headerContainer}>
        <Pressable style={styles.dot} />
        <Text style={styles.label}>Email :</Text>
      </View>
      <Text style={styles.text}>{item.email}</Text>
      <View style={styles.headerContainer}>
        <Pressable style={styles.dot} />
        <Text style={styles.label}>Truck# :</Text>
      </View>
      <Text style={styles.text}>{item.truckNumber}</Text>
      <View style={styles.headerContainer}>
        <Pressable style={styles.dot} />
        <Text style={styles.label}>Part Description :</Text>
      </View>
      <Text style={styles.text}>{item.partDescription}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ width: "90%", height: "100%", alignSelf: "center" }}>
        <Pressable
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" color="#444444" size={25} />
        </Pressable>
        <View style={{ marginTop: responsiveHeight(20) }}>
          <Text style={{ fontFamily: "semiBold", fontSize: 25, color: "#000" }}>
            Your Submissions
          </Text>
          <Text style={{ color: "#462F4D", marginTop: responsiveHeight(-10) }}>
            Your Old Submissions Request!
          </Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : submissions.length > 0 ? (
          <FlatList
            data={submissions}
            renderItem={renderSubmission}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ paddingBottom: responsiveHeight(20) }}
          />
        ) : (
          <Text>No submissions available.</Text>
        )}
      </View>
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
  submissionContainer: {
    width: "98%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 1,
    marginTop: responsiveHeight(10),
    alignSelf: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 30,
    backgroundColor: "#BDBDBD",
    marginRight: 5,
  },
  label: {
    fontFamily: "bold",
  },
  date: {
    marginLeft: "auto",
    fontFamily: "regular",
    paddingHorizontal: 10,
    backgroundColor: "#92499C",
    color: "#fff",
    borderRadius: 44,
  },
  text: {
    marginLeft: 15,
    fontFamily: "regular",
  },
});
