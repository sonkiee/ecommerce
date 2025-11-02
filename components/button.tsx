import { colors, radius, spacing } from "@/constants";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
}

const Button = ({
  title,
  variant = "primary",
  style,
  textStyle,
  ...props
}: ButtonProps) => {
  const textColor = variant === "primary" ? colors.text_white : colors.primary;

  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, variantStyles[variant], style]}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, { color: textColor }, textStyle]}>
        {title ?? "Default Button"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // borderWidth: 1,
    // borderColor: colors.border_gray_dark,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: "rgba(234,42,51,0.1)",
  },
});

export default Button;
