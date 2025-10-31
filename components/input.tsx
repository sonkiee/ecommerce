import { colors, radius } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import Label from "./label";

interface InputProps extends TextInputProps {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  const isPassword = label?.toLocaleLowerCase() === "password";

  const [isFocused, setIsFocused] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(
    isPassword ? true : false
  );

  return (
    <View style={{ marginBottom: 20 }}>
      {label && <Label text={label} />}
      <View
        style={[
          styles.inputContainer,
          isFocused && { borderColor: colors.primary, borderWidth: 1 },
        ]}
      >
        <TextInput
          style={styles.input}
          {...props}
          placeholderTextColor={colors.placeholder_dark}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isPassword && (
          <Pressable
            style={{}}
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
            {secureTextEntry ? (
              <Feather name="eye-off" size={18} color="gray" />
            ) : (
              <Feather name="eye" size={18} color="gray" />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border_gray_dark,
    borderRadius: radius.lg,
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: colors.input_dark_bg,
    gap: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text_white,
    // backgroundColor: colors.input_dark_bg,
  },
});

export default Input;
