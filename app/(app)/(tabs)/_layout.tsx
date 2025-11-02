import { colors } from "@/constants";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur"; // optional
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

const CreateTabBarIcon = ({
  color,
  size,
  focused,
}: {
  color: string;
  size: number;
  focused: boolean;
}) => (
  <View style={styles.createIconWrapper}>
    <MaterialCommunityIcons
      name={focused ? "plus" : "plus"}
      size={size + 4}
      color={focused ? "#fff" : "#fff"}
    />
  </View>
);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#ccc",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          // bottom: Platform.OS === "ios" ? 20 : 15,
          left: 20,
          right: 20,
          // height: 70,
          paddingTop: 10,
          backgroundColor: "rgba(0,0,0,0.0)",
          borderTopWidth: 0,
          elevation: 0, // remove Android shadow
        },
        tabBarBackground: () => (
          // optional blur overlay instead of flat color
          <BlurView
            intensity={10}
            tint="dark"
            // experimentalBlurMethod={Platform.select({
            //   android: "dimezisBlurView",
            // })}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color, focused }) => (
            <Octicons
              name={focused ? "home-fill" : "home"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          tabBarLabel: "Create",
          tabBarIcon: ({ focused, color, size }) => (
            <CreateTabBarIcon focused={focused} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "bell" : "bell-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  createIconWrapper: {
    backgroundColor: colors.primary,
    width: 55,
    height: 55,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
});
