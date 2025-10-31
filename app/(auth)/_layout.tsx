import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Register" }} />
        <Stack.Screen name="login" options={{ title: "Log In" }} />
        <Stack.Screen
          name="password-reset"
          options={{
            title: "Reset Password",
            headerShown: true,
            headerTransparent: true,
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
