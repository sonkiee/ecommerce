import { colors } from "@/constants";
import { Text } from "react-native";

const Label = ({ text }: { text?: string }) => {
  return (
    <Text
      style={{ fontWeight: "600", color: colors.text_white, marginBottom: 2 }}
    >
      {text ?? "Default Label"}
    </Text>
  );
};

export default Label;
