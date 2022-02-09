//import liraries
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ButtonType2 from "./ButtonType2";
import ButtonType3 from "./ButtonType3";

// create a component
const ControlsChildren = () => {
  return (
    <>
      <ButtonType3 />
      <View style={styles.First3Buttons}>
        <ButtonType2 title="Open" width="31%" />
        <ButtonType2 title="Pause" width="31%" />
        <ButtonType2 title="Close" width="31%" />
      </View>
      <View style={styles.Last2Buttons}>
        <ButtonType2 title="Blackout" width="48%" />
        <ButtonType2 title="Flip+" width="48%" />
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  First3Buttons: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    paddingHorizontal: Dimensions.get("window").width * 0.03,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  Last2Buttons: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    paddingHorizontal: Dimensions.get("window").width * 0.03,
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

//make this component available to the app
export default ControlsChildren;
