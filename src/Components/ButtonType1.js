//import liraries
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// create a component
const ButtonType1 = (props) => {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="rocket" size={22} color="#C61837" />
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").width * 0.15,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    paddingHorizontal: "8%",
    alignItems: "center",
    flexDirection: "row",
  },
  ButtonText: {
    color: "#a0a0a0",
    fontSize: 14,
    fontWeight: "600",
  },
});

//make this component available to the app
export default ButtonType1;
