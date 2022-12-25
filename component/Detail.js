import React, { useState } from "react";
import { View, Text, Pressable, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Detail() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [isBtn, setIsBtn] = useState(false);
  const [isBtn2, setIsBtn2] = useState(false);

  // const font = [require({ uri: "https://fonts.googleapis.com/css2?family=Oswald&display=swap" })];
  const images = {
    img01: "../images/img1.png",
    img02: "../images/img2.png",
  };
  const contentText = {
    history: `Launched on 28 February 2011 at the Geneva Motor Show, five months after its initial unveiling in Sant'Agata Bolognese, the vehicle, internally codenamed LB834, was designed to replace the then-decade-old Murciélago as the new flagship model.[10][11][12]
    Soon after the Aventador's unveiling, Lamborghini announced that it had sold 12 cars, with deliveries starting in the second half of 2011.[13] By March 2016, Lamborghini had built 5,000 Aventadors, in just five years.`,
  };
  const seccontentText = {
    engineInfo: `The Lamborghini V12 refers to the flagship V12 engine used by Lamborghini. Lamborghini has had two generations of V12 engines through their history, both of which were developed in-house. The first-generation Lamborghini V12 was a sixty degree (60°) V12 petrol engine designed by Lamborghini,[1][2] and was the first internal combustion engine ever produced by the firm.
    It entered production in 1963 as a 3.5 litre displacing 3,465 cubic centimetres (211.4 cu in) fitted on Lamborghini's first car, the Lamborghini 350GT.[1][2] The engine remained in use for almost fifty years; the final version of 6.5 litre displacement was installed in the Lamborghini Murciélago. Lamborghini discontinued their first-generation V12 after the Murcielago, opting for a brand-new V12 that first saw use on the Lamborghini Aventador.`,
  };

  const SeemoreBtn = () => {
    if (!isBtn) {
      setIsBtn(true);
    } else {
      setIsBtn(false);
    }
  };
  const SeemoreBtn2 = () => {
    if (!isBtn2) {
      setIsBtn2(true);
      console.log(isBtn2 + "누름");
    } else {
      setIsBtn2(false);
      console.log(isBtn2 + "누름");
    }
  };
  const HideText = () => {
    if (isBtn || isBtn2) {
      setIsBtn(false);
      setIsBtn2(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height / 3}
        autoPlay={true}
        scrollAnimationDuration={3000}
        data={Object.keys(images)}
        renderItem={({ index }) => (
          <Image style={styles.imgStyle} source={require("../publicsource/images/img2.png")} />
        )}
      />

      <View style={styles.contentTextcontainer}>
        <Text style={styles.contentTextstyle}>{contentText.history}</Text>

        {isBtn === true ? (
          <View style={styles.contentTextstyle}>
            <Text style={styles.secContentTextstyle}>{contentText.history}</Text>
          </View>
        ) : (
          <Pressable onPress={SeemoreBtn}>
            <Text style={styles.seeMoreText}>See More.</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  imgStyle: {
    width: 500,
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "gray",
    shadowOpacity: "50%",
    resizeMode: "center",
  },
  contentTextcontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  seeMoreText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 15,
    color: "white",
    textDecorationLine: "underline",
  },
  contentTextstyle: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 15,
    color: "white",
  },
  secContentTextstyle: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 12,
    color: "white",
  },
});
