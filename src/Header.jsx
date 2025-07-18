import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { slaykenColors } from "./colors";

export default function Header({
  title = "Slayken",
  containerStyle = {},
  textStyle = {},
  backgroundColor = slaykenColors.linearGradient,
}) {
  return (
    <LinearGradient
      colors={backgroundColor}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[styles.headerContainer, containerStyle]}
    >
      <Text style={[styles.headerText, textStyle]}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingTop: Platform.OS === "ios" ? 54 : 34,
    paddingBottom: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: slaykenColors.accentColorDark,
    shadowColor: slaykenColors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 10,
  },
  headerText: {
    color: slaykenColors.textColor,
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
    textShadowColor: slaykenColors.accentColorDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
    textAlign: "center",
  },
});
