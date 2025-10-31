import Button from "@/components/button";
import Input from "@/components/input";
import { colors } from "@/constants";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PasswordResetScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* Header / Instructions */}
      {/* <Text style={styles.title}>Reset Your Password</Text> */}
      <Text style={styles.description}>
        Enter your email or username and we'll send you a link to reset your
        password.
      </Text>

      {/* Input */}
      <View style={styles.form}>
        <Input
          label="Email or Username"
          placeholder="Enter your email or username"
          placeholderTextColor={colors.placeholder_dark}
        />
        <Button title="Send Reset Link" />
      </View>

      {/* Optional: footer for navigation */}
      <Text style={styles.footerText}>
        Remember your password?{" "}
        <Link href={"/(auth)/login"} style={styles.link}>
          Log In
        </Link>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_dark,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text_gray_light,
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: colors.text_gray_dark,
    // textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  form: {
    gap: 16,
  },
  footerText: {
    textAlign: "center",
    color: colors.text_gray_light,
    marginTop: 32,
    fontSize: 13,
  },
  link: {
    color: colors.primary,
    fontWeight: "600",
  },
});
