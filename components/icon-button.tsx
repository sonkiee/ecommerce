import { colors, radius } from "@/constants";
import { Pressable, StyleSheet, Text } from "react-native";

const IconButton = ({
  icon,
  onPress,
  label,
}: {
  icon: React.ReactElement;
  onPress: () => void;
  label: string;
}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {icon}
      <Text style={styles.label}>{label ?? " Default"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: "10",
    borderWidth: 1,
    borderColor: colors.border_gray_dark,
    borderRadius: radius.lg,
  },
  label: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default IconButton;
