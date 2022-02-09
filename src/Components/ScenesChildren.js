//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ButtonType1 from "./ButtonType1";
// create a component
const ScenesChildren = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ButtonsLine1}>
        <ButtonType1 title="All Off" />
        <ButtonType1 title="Bright" />
      </View>
      <View style={styles.ButtonsLine2}>
        <ButtonType1 title="All Off" />
        <ButtonType1 title="Bright" />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
  },
  ButtonsLine1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: Dimensions.get("window").height * 0.02,
  },
  ButtonsLine2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

//make this component available to the app
export default ScenesChildren;
