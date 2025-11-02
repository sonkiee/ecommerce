import Button from "@/components/button";
import Hr from "@/components/hr";
import IconButton from "@/components/icon-button";
import Input from "@/components/input";
import { colors } from "@/constants";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegistrationScreen() {
  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={{ flex: 1, backgroundColor: colors.background_dark }}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          paddingVertical: 100,
          justifyContent: "center",
        }}
      >
        {/* Header */}
        <Text style={styles.title}>Create Your Account</Text>

        {/* Form Fields */}
        <View style={styles.form}>
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            placeholderTextColor={colors.placeholder_dark}
          />
          <Input
            label="Email"
            placeholder="your.email@example.com"
            placeholderTextColor={colors.placeholder_dark}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder_dark}
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            placeholderTextColor={colors.placeholder_dark}
          />
          <Button title="Register" />
        </View>

        {/* Terms and Conditions */}
        <Text style={styles.termsText}>
          By signing up, you agree to our{" "}
          <Link href="/terms" style={styles.link}>
            terms of service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" style={styles.link}>
            privacy policy
          </Link>
          .
        </Text>

        {/* Divider */}
        <View style={styles.divider}>
          <Hr />
          <Text style={styles.dividerText}>OR</Text>
          <Hr />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <IconButton
            icon={<AntDesign name="google" size={24} color="#DB4437" />}
            onPress={() => {}}
            label="Continue with Google"
          />
          <IconButton
            icon={<FontAwesome name="facebook" size={24} color="#1877F2" />}
            onPress={() => {}}
            label="Continue with Facebook"
          />
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Link href="/login" style={styles.link}>
            Login
          </Link>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background_dark,
  },
  title: {
    textAlign: "center",
    fontSize: 23,
    color: colors.text_white,
    marginBottom: 20,
  },
  form: {
    gap: 12,
  },
  termsText: {
    color: colors.text_gray_dark,
    fontSize: 12,
    textAlign: "center",
    marginTop: 16,
  },
  link: {
    color: colors.primary,
    textDecorationLine: "underline",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    gap: 10,
  },
  dividerText: {
    color: colors.text_gray_dark,
    fontWeight: "bold",
  },
  socialContainer: {
    marginTop: 12,
    gap: 8,
  },
  footerText: {
    textAlign: "center",
    color: colors.text_gray_light,
    marginTop: 24,
  },
});
