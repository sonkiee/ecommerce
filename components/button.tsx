import { colors, radius } from "@/constants";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary";
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <Pressable {...props} style={[styles.button]}>
      <Text style={styles.buttonText}>{title ?? "Default Button"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.border_gray_dark,
    borderRadius: radius.lg,
    paddingVertical: 16,
    paddingHorizontal: 20,
    // paddingVertical: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.text_white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;

// props.style;
