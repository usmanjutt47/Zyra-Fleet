import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const CustomAlert = ({ message, onClose }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.alertBox}>
        <Text style={styles.alertText}>{message}</Text>
        <Pressable style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 280,
    height: 200,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    alignItems: "center",
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

export default CustomAlert;
