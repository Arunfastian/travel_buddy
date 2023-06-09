import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { scale } from "react-native-size-matters";
const { HeroImage } = require("../assets/images");
const HomeScreen = ({navigation}:any) => {

  const handleOnPress = () => {
    navigation.navigate("Discover");
  };

  return (
    <View style={styles.container}>
      {/* First Section */}
      <View style={styles.firstSection}>
        <View style={styles.goStyles}>
          <Text style={styles.goText}>Go</Text>
        </View>
        <Text style={styles.travelText}>Travels</Text>
      </View>

      {/* Second Section */}
      <View style={styles.secondSection}>
        <Text style={styles.firstText}>Enjoy the trip with</Text>
        <Text style={styles.secondText}>Good Moments</Text>
        <Text style={styles.thirdText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id
          voluptas odio optio.
        </Text>
      </View>

      {/* Circles Section */}
      <View style={styles.firstCircleStyles}></View>
      <View style={styles.secondCircleStyles}></View>

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Animatable.Image source={HeroImage} style={styles.imageStyles} animation={"fadeIn"} easing={"ease-in-out"}/>
        {/* Go Button */}
        <TouchableOpacity style={styles.buttonContainer} onPress={handleOnPress}>
            <Animatable.View
              style={styles.buttonTouchable}
              animation={"pulse"}
              easing={"ease-in-out"}
              iterationCount={'infinite'}
            >
              <Text style={styles.buttonText}>Go</Text>
            </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    position: "relative",
  },
  firstSection: {
    flexDirection: "row",
    paddingLeft: scale(18),
    paddingRight: scale(18),
    marginTop: scale(24),
    alignItems: "center",
    columnGap: scale(6),
  },
  secondSection: {
    paddingRight: scale(18),
    paddingLeft: scale(18),
    marginTop: scale(32),
    rowGap: scale(10),
  },
  goStyles: {
    width: scale(48),
    height: scale(48),
    backgroundColor: "black",
    borderRadius: scale(64) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  goText: {
    color: "#00BCC9",
    fontSize: scale(24),
    lineHeight: scale(36),
    fontWeight: "700",
  },
  travelText: {
    color: "#2A2B4B",
    fontSize: scale(24),
    lineHeight: scale(36),
    fontWeight: "700",
  },
  firstText: {
    color: "#3C6072",
    fontSize: scale(30),
  },
  secondText: {
    color: "#00BCC9",
    fontSize: scale(28),
    fontWeight: "bold",
  },
  thirdText: {
    color: "#3C6072",
  },
  firstCircleStyles: {
    height: scale(280),
    width: scale(280),
    backgroundColor: "#00BCC9",
    borderRadius: 280 / 2,
    position: "absolute",
    bottom: scale(96),
    right: scale(-90),
  },
  secondCircleStyles: {
    height: scale(280),
    width: scale(280),
    backgroundColor: "#E99265",
    borderRadius: 260 / 2,
    position: "absolute",
    bottom: scale(-48),
    left: scale(-90),
  },
  imageContainer: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    position: "absolute",
    bottom: scale(80),
    width: scale(66),
    height: scale(66),
    borderRightWidth: scale(2),
    borderLeftWidth: scale(2),
    borderTopWidth: scale(4),
    borderColor: "#00BCC9",
    borderRadius: 66 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTouchable: {
    width: scale(54),
    height: scale(54),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCC9",
    borderRadius: 54 / 2,
  },
  buttonText: {
    color: "white",
    fontSize: scale(28),
    fontWeight: "600",
  },
});
