import Button from "@/components/button";
import Hr from "@/components/hr";
import IconButton from "@/components/icon-button";
import Input from "@/components/input";
import { colors } from "@/constants";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Login to Your Account</Text>

      {/* Form Fields */}
      <View style={styles.form}>
        <Input
          label="Email or Username"
          placeholder="Enter your email or username"
          placeholderTextColor={colors.placeholder_dark}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          placeholderTextColor={colors.placeholder_dark}
        />

        <View>
          <Button
            title="Log in"
            onPress={() => router.navigate("/(app)/(tabs)")}
          />
        </View>
      </View>

      {/* Terms and Conditions */}
      <Link style={styles.termsText} href={"/(auth)/password-reset"}>
        Forgot Password?
      </Link>

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
        Don&apos;t have an account?{" "}
        <Link href="/(auth)" style={styles.link}>
          SignUp
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    // color: colors.text_gray_dark,
    fontSize: 12,
    textAlign: "center",
    marginTop: 16,

    color: colors.primary,
    textDecorationLine: "underline",
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
