//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ButtonType2 from "./ButtonType2";

// create a component
const GroupChildren = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Buttons}>
        <ButtonType2 title="More Open" width="45%" />
        <ButtonType2 title="More Close" width="45%" />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: Dimensions.get("window").height * 0.02,
  },
});

//make this component available to the app
export default GroupChildren;
