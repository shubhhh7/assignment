//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

// create a component
const ButtonType2 = (props) => {
  const { title, width } = props;

  return (
    <TouchableOpacity
      style={[styles.container, width ? { width: width } : null]}
    >
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
    justifyContent: "center",
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
export default ButtonType2;
