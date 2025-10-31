import { colors } from "@/constants";
import { StyleSheet, View } from "react-native";

const Hr = () => {
  return <View style={styles.hr} />;
};

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: colors.border_gray_dark,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // marginVertical: 10,
    flex: 1,
  },
});

export default Hr;
