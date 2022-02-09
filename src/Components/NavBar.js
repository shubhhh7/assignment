import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar as rnStatusBar,
} from "react-native";
export const NavigationBar = () => {
  return (
    <View style={styles.navBar}>
      <View>
        <Ionicons name="chevron-back-outline" size={32} color="grey" />
      </View>
      <View>
        <Ionicons name="menu" size={32} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: Dimensions.get("window").width,
    height: 50,
    marginTop: rnStatusBar.currentHeight,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Dimensions.get("window").width * 0.01,
  },
});
