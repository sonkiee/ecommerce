import Button from "@/components/button";
import Hr from "@/components/hr";
import Input from "@/components/input";
import { colors } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your full name"
        label="Full Name"
        placeholderTextColor={colors.placeholder_dark}
      />

      <Input
        placeholder="your.email@example.com"
        label="Email"
        placeholderTextColor={colors.placeholder_dark}
      />

      <Input
        placeholder="Enter your password"
        label="Password"
        placeholderTextColor={colors.placeholder_dark}
      />

      <Input
        placeholder="Confirm your password"
        label="Password"
        placeholderTextColor={colors.placeholder_dark}
      />

      <Button title="Register" />

      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text
          style={{
            color: colors.text_gray_dark,
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {" "}
          By signing up, you agree to our terms of service and privacy policy.
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            gap: 10,
          }}
        >
          <Hr />
          <Text style={{ color: colors.text_gray_dark, fontWeight: "bold" }}>
            {" "}
            OR
          </Text>
          <Hr />
        </View>
        <Text> Already have an account? SignIn</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.background_dark,
    // alignItems: "center",
  },
});
