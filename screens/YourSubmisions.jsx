import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function YourSubmisions() {
  const navigation = useNavigation();
  const [viewHeight, setViewHeight] = useState(0);

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
            Your Submisions
          </Text>
          <Text style={{ color: "#462F4D", marginTop: responsiveHeight(-10) }}>
            Your Old Submisions Request !
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: responsiveHeight(374),
            backgroundColor: "#fff",
            elevation: 1,
            borderRadius: 8,
            marginTop: responsiveHeight(40),
          }}
        >
          <View
            style={{
              height: "100%",
              width: "90%",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                width: "100%",
                height: responsiveHeight(27),
                justifyContent: "space-between",
                marginTop: responsiveHeight(10),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  width: "100%",
                  height: responsiveHeight(20),
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    height: responsiveHeight(20),
                  }}
                >
                  <Pressable
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 30,
                      backgroundColor: "#BDBDBD",
                      marginBottom: responsiveHeight(5),
                    }}
                  ></Pressable>
                  <Text style={{ marginLeft: 5, fontFamily: "bold" }}>
                    Name :
                  </Text>
                </View>
                <Pressable
                  style={{
                    height: 30,
                    borderRadius: 30,
                    backgroundColor: "#92499C",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "regular",
                      paddingHorizontal: 10,
                      color: "#fff",
                    }}
                  >
                    10:42PM ,23 March 2024
                  </Text>
                </Pressable>
              </View>
            </View>
            <Text style={{ marginLeft: 15, fontFamily: "regular" }}>
              Muhammad Usman
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                height: responsiveHeight(20),
                marginTop: responsiveHeight(15),
              }}
            >
              <Pressable
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 30,
                  backgroundColor: "#BDBDBD",
                  marginBottom: responsiveHeight(5),
                }}
              />
              <Text style={{ marginLeft: 5, fontFamily: "bold" }}>Email :</Text>
            </View>
            <Text style={{ marginLeft: 15, fontFamily: "regular" }}>
              usmanjutt04747@gmail.com
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                height: responsiveHeight(20),
                marginTop: responsiveHeight(15),
              }}
            >
              <Pressable
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 30,
                  backgroundColor: "#BDBDBD",
                  marginBottom: responsiveHeight(5),
                }}
              />
              <Text style={{ marginLeft: 5, fontFamily: "bold" }}>
                Truck# :
              </Text>
            </View>
            <Text style={{ marginLeft: 15, fontFamily: "regular" }}>
              ca23AFEF46
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                height: responsiveHeight(20),
                marginTop: responsiveHeight(15),
              }}
            >
              <Pressable
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 30,
                  backgroundColor: "#BDBDBD",
                  marginBottom: responsiveHeight(5),
                }}
              />
              <Text style={{ marginLeft: 5, fontFamily: "bold" }}>
                Part Description :
              </Text>
            </View>
            <Text style={{ marginLeft: 15, fontFamily: "regular" }}>
              I am registering my truck to comply with regulations and ensure
              safe transportation. This will help me operate legally and
              efficiently.
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                height: responsiveHeight(20),
                marginTop: responsiveHeight(15),
              }}
            >
              <Pressable
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 30,
                  backgroundColor: "#BDBDBD",
                  marginBottom: responsiveHeight(5),
                }}
              />
              <Text style={{ marginLeft: 5, fontFamily: "bold" }}>
                Part Description :
              </Text>
            </View>
            <Text style={{ marginLeft: 15, fontFamily: "regular" }}>
              I am registering my truck to comply with regulations and ensure
              safe operation.
            </Text>
          </View>
        </View>
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
});
