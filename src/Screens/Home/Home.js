import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { NavigationBar } from "../../Components/NavBar";
import { TitleBox } from "../../Components/TitleBox";
import ControlsChildren from "../../Components/ControlsChildren";
import GroupChildren from "../../Components/GroupChildren";
import ScenesChildren from "../../Components/ScenesChildren";

const Home = () => {
  return (
    <View style={styles.container}>
      <NavigationBar />
      <ScrollView>
        <View style={styles.HomeView}>
          <Text style={styles.Text1}>Shade Control</Text>
          <Text style={styles.Text2}>Living Room</Text>
        </View>
        <TitleBox title="SCENES" children={<ScenesChildren />} />
        <TitleBox title="GROUP CONTROLS" children={<GroupChildren />} />
        <TitleBox title="CONTROLS" children={<ControlsChildren />} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#F6f8f8",
  },
  HomeView: {
    marginLeft: Dimensions.get("window").width * 0.03,
    marginTop: 10,
  },
  Text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#808080",
  },
  Text2: {
    fontSize: 12,
    color: "#a0a0a0",
  },
});

//make this component available to the app
export default Home;
