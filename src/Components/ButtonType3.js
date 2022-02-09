//import liraries
import React, { Component, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// create a component
const ButtonType3 = () => {
  const [text, setText] = useState("OFF");
  const [color, setColor] = useState("grey");
  const [isOn, setOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      setText("ON");
      setColor("green");
    } else {
      setText("OFF");
      setColor("grey");
    }
  }, [isOn]);

  return (
    <TouchableOpacity
      onPress={() => {
        setOn(!isOn);
      }}
      style={styles.container}
    >
      <View style={styles.ButtonContainer}>
        <View style={styles.Button}>
          <Ionicons name="chevron-forward-circle" size={22} color={color} />
        </View>
        <View>
          <Text>Window Roller Blind</Text>
          <Text>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    justifyContent: "flex-start",
  },
  ButtonContainer: {
    flexDirection: "row",
  },
  Button: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").width * 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Dimensions.get("window").width * 0.03,
  },
});

//make this component available to the app
export default ButtonType3;
