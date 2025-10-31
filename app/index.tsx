import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/(auth)" />;
  // <View
  //   style={{
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   }}
  // >
  //   <Text>Edit app/index.tsx to edit this screen.</Text>
  // </View>
}
