import { Stack } from "expo-router";

export default function MessagingLayout() {
  return (
    <Stack>
      <Stack.Screen name="messages" options={{ headerTitle: "Messages" }} />
    </Stack>
  );
}
