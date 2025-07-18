import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { slaykenColors } from "./colors";

const buttons = [
  ["C", "±", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "⌫", "="],
];

export default function Calculator() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(null);

  const handleTap = (type) => {
    if (type === "C") {
      setInput("0");
      setResult(null);
      return;
    }
    if (type === "⌫") {
      setInput(input.length > 1 ? input.slice(0, -1) : "0");
      return;
    }
    if (type === "±") {
      setInput(input.charAt(0) === "-" ? input.slice(1) : "-" + input);
      return;
    }
    if (type === "%") {
      setInput((parseFloat(input) / 100).toString());
      return;
    }
    if (type === "=") {
      try {
        // Simple eval: replace x with * and eval string
        let exp = input.replace(/x/g, "*").replace(/÷/g, "/");
        let evalResult = eval(exp);
        setResult(evalResult.toString());
        setInput(evalResult.toString());
      } catch {
        setResult("Error");
        setInput("0");
      }
      return;
    }
    if (["/", "x", "-", "+"].includes(type)) {
      if (["/", "x", "-", "+"].includes(input.slice(-1))) return; // Keine doppelten Operatoren
      setInput(input + type);
      return;
    }
    // Punkt
    if (type === ".") {
      // Kein doppelter Punkt im gleichen Block
      let lastNum = input.split(/[\+\-x\/]/).pop();
      if (lastNum.includes(".")) return;
      setInput(input + ".");
      return;
    }
    // Zahl
    if (input === "0") {
      setInput(type);
    } else {
      setInput(input + type);
    }
  };

  return (
    <LinearGradient
      colors={slaykenColors.linearGradient}
      style={styles.calculatorContainer}
    >
      <View style={styles.display}>
        <Text style={styles.inputText} numberOfLines={1} adjustsFontSizeToFit>
          {input}
        </Text>
        {result !== null && <Text style={styles.resultText}>= {result}</Text>}
      </View>
      <View style={styles.buttonGrid}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((item, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[
                  styles.button,
                  item === "=" && styles.equalsButton,
                  ["/", "x", "-", "+", "="].includes(item) &&
                    styles.operatorButton,
                ]}
                onPress={() => handleTap(item)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    ["/", "x", "-", "+", "="].includes(item)
                      ? styles.operatorText
                      : styles.numberText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  calculatorContainer: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    borderRadius: 22,
    padding: 16,
    shadowColor: slaykenColors.shadowColor,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 15,
    marginVertical: 40,
    borderWidth: 2,
    borderColor: slaykenColors.borderGlowColor,
  },
  display: {
    minHeight: 90,
    borderRadius: 12,
    backgroundColor: "#151515",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 18,
    borderWidth: 2,
    borderColor: slaykenColors.accentColorDark,
    shadowColor: slaykenColors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 4,
  },
  inputText: {
    color: slaykenColors.textColor,
    fontSize: 36,
    fontWeight: "bold",
    textShadowColor: slaykenColors.accentColorDark,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 1,
    marginBottom: 4,
  },
  resultText: {
    color: slaykenColors.accentColorDark,
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1,
  },
  buttonGrid: {
    width: "100%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: slaykenColors.accentColorSecondary,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#2a2a2a",
    shadowColor: slaykenColors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  equalsButton: {
    backgroundColor: slaykenColors.accentColorDark,
    borderColor: slaykenColors.borderGlowColor,
    shadowColor: slaykenColors.accentColorDark,
    shadowOpacity: 0.7,
    elevation: 4,
  },
  operatorButton: {
    backgroundColor: "#191919",
    borderColor: slaykenColors.accentColorDark,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 2,
    textShadowColor: "#1c1c1c",
    textShadowRadius: 1,
  },
  numberText: {
    color: slaykenColors.textColor,
  },
  operatorText: {
    color: slaykenColors.accentColorDark,
  },
});
