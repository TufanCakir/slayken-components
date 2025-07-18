import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { slaykenColors } from "./src/colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  SlaykenHeader,
  SlaykenFooter,
  SlaykenCalculator,
} from "slayken-components";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <SlaykenHeader
          title="Mein Header"
          containerStyle={{
            borderBottomWidth: 0,
          }}
          textStyle={{
            fontSize: 24,
            color: "#fff", // besser für weißen Hintergrund
            letterSpacing: 1,
          }}
          backgroundColor={["black", "white"]}
        />
      </View>
      <LinearGradient
        colors={slaykenColors.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.footerContainer}
      >
        <SlaykenCalculator />
        <StatusBar style="light" backgroundColor={slaykenColors.accentColor} />
      </LinearGradient>
      <SlaykenFooter
        text="Mein Footer"
        containerStyle={{
          backgroundColor: "white", // nur sichtbar, wenn colors überschrieben wird
          borderTopWidth: 0,
        }}
        textStyle={{
          fontSize: 16,
          color: "#fff",
          letterSpacing: 0.5,
        }}
        colors={["black", "white"]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: slaykenColors.accentColor, // Schwarz
    justifyContent: "center",
  },
  SlaykenHeader: {
    position: "absolute",
    backgroundColor: "fff",
    top: 0,
    width: "100%",
    zIndex: 10,
  },
});
