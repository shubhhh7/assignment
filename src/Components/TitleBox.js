import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export const TitleBox = (props) => {
  const { title, children } = props;

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: Dimensions.get("window").width,
  },
  title: {
    color: "grey",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: Dimensions.get("window").width * 0.03,
    marginVertical: Dimensions.get("window").width * 0.03,
  },
});
