import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { slaykenColors } from "./colors";

export default function Footer({
  text = "© 2025 Slayken",
  containerStyle = {},
  textStyle = {},
  colors = slaykenColors.linearGradient,
}) {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[styles.footerContainer, containerStyle]}
    >
      <Text style={[styles.footerText, textStyle]}>{text}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    paddingTop: 14,
    paddingBottom: Platform.OS === "ios" ? 36 : 18,
    paddingHorizontal: 20,
    borderTopWidth: 2,
    borderColor: slaykenColors.accentColorDark,
    shadowColor: slaykenColors.shadowColor,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 20,
  },
  footerText: {
    color: slaykenColors.textColor,
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
    textShadowColor: slaykenColors.accentColorDark,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
});
