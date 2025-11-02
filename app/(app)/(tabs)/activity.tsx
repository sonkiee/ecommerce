import { colors, radius, spacing } from "@/constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

const categories = ["All", "Mentions", "Purchases", "Social"];

const notifications = [
  {
    id: 1,
    type: "message",
    name: "Jane Doe",
    text: "You have a new message from Jane Doe.",
    sub: `"Can't wait to see it!"`,
    time: "2m ago",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCi-_fkUpDjJe8-e7fD_rSTbgm39x_DAc_dlkKs3zygMWtxjlOrDG1u3fEuZ5fhEUFLoMh9O5Y8meqh52AvpUlPBsUIk5uIEVDPW3i5spdelZjjHU8eiIOeX_OV3JG1a5bNb3gUySSDR1ZbLicGfsg91NgmeUybSQiDqQaxbWoOO1yQQ43y-pZrMrkF-y2JxlVdkxlGM1q7GlROLXXwawRuWFj4y7qmkQfqwa6U4fZaa74fwhLZMGHG0XULOnOUEkzeXFvyatAmbwxa",
    icon: "chat-bubble",
    iconColor: "#22c55e",
  },
  {
    id: 2,
    type: "order",
    text: "Your order of a black t-shirt has been shipped.",
    sub: "It will arrive in 3-5 business days.",
    time: "5m ago",
    productImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPRhaH2W0bpoFy3DC2284-_a4B_BMItVqqeKKklk0Bb3MG9iBy7Aw2B6bF07glR8KrEEmFBoxReMBpkOhZdZt9pO3w_tsCfT4M3GWXxCIGeH_Ym4bPhHcttbhcPfbHtK-NRsZM9I5KsGi70NaH5kgriBvRXQ0p_Ai6CDZnBDn51CaeHnkeiDefmQoO10Zhsak65sDpDX3i89633l1ubLaZAj5wMgv_uEA_-U8BOJUpm7g-2xXQmjfaw6TzTRXp3FWcL_tyGciLLkeu",
    icon: "local-shipping",
    iconColor: "#3b82f6",
    action: "View Order",
  },
  {
    id: 3,
    type: "like",
    text: "John Smith liked your video.",
    sub: "15m ago",
    time: "",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_utyxHSGuEqcYVz9gD4UOhvQuSuH2-uJAsPnVt14i3O6Tu2ixEEtV6QZ_412AATSpgNtOnepSNl2fO6zM4xSjoSMwpv6AeU-NLQrZyJHh9ogNg4K52G5k8rHqmoX2bVonYOBpaXYDleB7JiS-jLJvUG2d6p7m12dhoboP4TFpkXATq8VvPYHe5AZM6LiNYqiQKvN6z2bsAU0fT-H-1gUXN_49QXhqP5CZWUTi2bEFCeCuuYd4v5VQk724YAfTXBOeMgSZqpWfckSS",
    icon: "favorite",
    iconColor: "#ef4444",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0WdqizcB3ibF-wO2AHok34gC50r5QgfS4oAsU0dqaV3dV-uK54Hzl167ZpGEqU7BuCcLwGwqmGwsWmd9VWNe-sWEFD8JRGPSiR6eIm2Q3zNGhe0OLjn2Pkb0LS3ef6Odj-lvuVY8iBphrQInOER2cHstBkNzAJAsNgnTB4ZzRu4jXCYRn4iVrN-PlLWg4z0Psy5WwLbsf6yLfcjfe8WWH6OgjJnxtzcmftk05dT_pe_1o0Lysn1xY8Xu9dCF5rvQAFLIgthukUOZl",
  },
];

export default function ActivityScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? colors.background_dark
            : colors.background_light,
        },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back"
            size={24}
            color={isDark ? colors.text_white : colors.text_black}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerTitle,
            { color: isDark ? colors.text_white : colors.text_black },
          ]}
        >
          Notifications
        </Text>
        <TouchableOpacity>
          <Ionicons
            name="settings-outline"
            size={22}
            color={isDark ? colors.text_white : colors.text_black}
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              index === 0
                ? { backgroundColor: colors.primary }
                : {
                    backgroundColor: isDark ? "#27272a" : "#e4e4e7",
                  },
            ]}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color:
                    index === 0
                      ? colors.text_white
                      : isDark
                      ? colors.text_white
                      : colors.text_black,
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Notifications List */}
      <ScrollView>
        {notifications.map((n) => (
          <View
            key={n.id}
            style={[
              styles.item,
              {
                backgroundColor:
                  n.type === "order" || n.type === "like"
                    ? colors.primary + "10"
                    : "transparent",
                borderBottomColor: isDark ? "#27272a" : "#e5e7eb",
              },
            ]}
          >
            <View style={styles.itemLeft}>
              <View>
                <ImageBackground
                  source={{ uri: n.avatar || n.productImage }}
                  style={styles.avatar}
                  imageStyle={{
                    borderRadius: n.thumbnail ? radius.lg : radius.full,
                  }}
                />
                {n.icon && (
                  <View
                    style={[
                      styles.iconBadge,
                      {
                        backgroundColor: n.iconColor,
                        borderColor: isDark
                          ? colors.background_dark
                          : colors.background_light,
                      },
                    ]}
                  >
                    <MaterialIcons
                      name={n.icon as any}
                      size={14}
                      color="#fff"
                    />
                  </View>
                )}
              </View>
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.title,
                    { color: isDark ? colors.text_white : colors.text_black },
                  ]}
                >
                  {n.text}
                </Text>
                {n.sub && (
                  <Text
                    style={[
                      styles.sub,
                      { color: isDark ? "#9ca3af" : "#6b7280" },
                    ]}
                  >
                    {n.sub}
                  </Text>
                )}
              </View>
            </View>
            {n.action && (
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>{n.action}</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  tabs: {
    flexGrow: 0,
    paddingHorizontal: spacing.md,
  },
  tab: {
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.sm,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
  },
  iconBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    borderWidth: 2,
    borderRadius: 999,
    padding: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  sub: {
    fontSize: 13,
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.lg,
  },
  actionText: {
    color: colors.text_white,
    fontSize: 13,
    fontWeight: "500",
  },
});
