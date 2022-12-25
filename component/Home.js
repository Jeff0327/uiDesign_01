import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../publicsource/images/img1.png")} />
        </View>
        <Text style={styles.title}>Lamborghini Aventador</Text>
        <Text style={styles.description}>Lamborghini Aventador</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate("Detail")} style={styles.informationBtn}>
          <Text style={styles.informationText}>Infomation</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "center",
    width: 500,
    height: "80%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  description: {
    color: "white",
    fontSize: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  informationBtn: {
    backgroundColor: "#4682B4",
    shadowOpacity: "50%",
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  informationText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
