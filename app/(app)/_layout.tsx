import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons"; // for a back icon
import { BlurView } from "expo-blur";
import { Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AppLayout() {
  return (
    <Stack>
      {/* Tabs (Main App) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Product Details */}
      <Stack.Screen
        name="product/[id]"
        options={{
          title: "",
          headerTransparent: true,
          header: ({ navigation, options }) => (
            <BlurView intensity={30} tint="dark" style={styles.blurHeader}>
              <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="chevron-back"
                    size={24}
                    color={colors.text_white}
                  />
                </TouchableOpacity>

                <Text style={styles.title}>Product Details</Text>

                {/* Placeholder to balance spacing (same width as back icon) */}
                <View style={{ width: 24 }} />
              </View>
            </BlurView>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  blurHeader: {
    ...StyleSheet.absoluteFillObject,
    height: 100, // enough space for status bar + header
    justifyContent: "flex-end",
    paddingBottom: 12,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    color: colors.text_white,
    fontSize: 18,
    fontWeight: "600",
  },
});
