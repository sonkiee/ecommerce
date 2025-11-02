import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeHeader() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: insets.top, marginLeft: 10 }}>
      <Text> Home Header</Text>
    </View>
  );
}
