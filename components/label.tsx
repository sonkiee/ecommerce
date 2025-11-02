import { colors } from "@/constants";
import { StyleSheet, Text, TextStyle } from "react-native";

type LabelSize = "s" | "m" | "l" | "xl";

type LabelProps = {
  text?: string;
  size?: LabelSize;
  style?: TextStyle;
};

const Label = ({ text, size = "m", style }: LabelProps) => {
  return (
    <Text style={[styles.label, sizeStyles[size], style]}>
      {text ?? "Default Label"}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "600",
    color: colors.text_white,
    marginBottom: 4,
  },
});

const sizeStyles = StyleSheet.create({
  s: {
    fontSize: 12,
  },
  m: {
    fontSize: 14,
  },
  l: {
    fontSize: 18,
  },
  xl: {
    fontSize: 22,
  },
});

export default Label;
