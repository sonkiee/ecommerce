import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  Clipboard,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const OrderConfirmationScreen = () => {
  const [isDark] = useState(true);
  const [checkScale] = useState(new Animated.Value(0.5));
  const [checkOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animate check icon on mount
    Animated.parallel([
      Animated.timing(checkScale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(checkOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const orderItems = [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBxtiDij8CILgOKhyTN9SqTJgr5Aix2HdRmSoLSNYI6lbN7zmII95wvQwd0Z53x81EMHR0GSFuOiCF889u_8VqJTmtyJna3G79txvJiUhZDgoc8XqvaMA5G5he_FioqxWEA3Jg0azRi_WgDFhuxnzWgiDAl8kqe-gnP9CF2N7oWsQfTW2UKaprGkGcM0rLvZQenf0pzmOQE61iF1gekUXu70wJy0BeXEGYjWeR__cVRNyWlzYwzbJbi06WLPHiGyh8rcT4LTVsyDBS",
      alt: "A vibrant red and blue patterned hoodie",
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ZeJIMcRRuDXce51E940FpfYT-CpKrKp-nREvwto3NXymY8oBv_RJm9bGCatVnFHunrJOdQjVPPCkzsTxGBdlBWAVWNgOXY35jxQk5vEsB9tDP6etlJzdSj5AbngKia9I23YqxY3Hd6RJXdVWEn4I9z6-YaKMDB8s2NeW4i8GlWWzFvyg9RmzzqOrvOcLKfj38n_q8gW7ikasIc3ZZy--dJz3DGNdYNohteBhdf_M9XEX46Baiom2BgJWKhChGUbi73jW0vciQVrs",
      alt: "A pair of sleek black wireless earbuds",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZfzFxKJ9JEgXzDsq23B4oOD4WH9df4dGIISmtZfq1O6N6J8Ny8BW8-G0ss4y4CXmlgXyvDvOcTCXpqkGXG8u-IiNgN9D4cpzwI7OLopFaduyW-mnNmgHiEbVkCBBJm_KXr_A9yQXI5f6ZktsSeqQM4qCfrNIHSSoBY0AbIgm1IABQ-afk9-GmP31wRWY9fJYfVGr1vgh5iZ3s0lhkPyQHV-untl-wHkfchW69FyxkoZF0SYJ_edjI_aa9VB7FA4K7zTkpG3dgdlxp",
      alt: "A modern minimalist wrist watch with a brown leather strap",
    },
    {
      id: 4,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABhcbMEscZov3PD4bHGcHm8ib0p0-nfYNVmBtZ4CZ1rCRQRkk6LW3Hx9RMCbb2g8Q96YrAAeMIO3v_-6JuB2zAWfXF-GNAXlXxIC_wH0jSe4jXZliEjsq7KsC_L4qRZdIDBpZwvHQDhVrbt7KwDo0nhgT0pbKWvClzRkruTEUcneAaxJAZn3WNBYIUem9da0qCRy_W7NkH7wP8OP3ShQ-u_zNAyV5ZlOTN8B5YaUgtbY_cfKSIqw1DujGQnMYFrZmybLkQ2uZ8WU1o",
      alt: "A stylish blue backpack with multiple compartments",
    },
  ];

  const colors = {
    primary: "#ea2a33",
    success: "#22c55e",
    bgLight: "#f8f6f6",
    bgDark: "#211111",
    textLight: "#000000",
    textDark: "#ffffff",
    textSecondaryLight: "#6b7280",
    textSecondaryDark: "#9ca3af",
    cardBgLight: "#ffffff",
    cardBgDark: "#27272a",
    iconBgLight: "#f8f6f6",
    iconBgDark: "#211111",
    buttonBgLight: "#e5e7eb",
    buttonBgDark: "#3f3f46",
    borderLight: "#e5e7eb",
    borderDark: "#3f3f46",
  };

  const theme = {
    bg: isDark ? colors.bgDark : colors.bgLight,
    text: isDark ? colors.textDark : colors.textLight,
    textSecondary: isDark
      ? colors.textSecondaryDark
      : colors.textSecondaryLight,
    cardBg: isDark ? colors.cardBgDark : colors.cardBgLight,
    iconBg: isDark ? colors.iconBgDark : colors.iconBgLight,
    buttonBg: isDark ? colors.buttonBgDark : colors.buttonBgLight,
    border: isDark ? colors.borderDark : colors.borderLight,
  };

  const handleCopyOrderNumber = () => {
    Clipboard.setString("123456789");
    Alert.alert("Copied!", "Order number copied to clipboard");
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={[styles.headerIcon, { color: theme.text }]}>✕</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Confirmation
        </Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={[styles.headerIcon, { color: theme.text }]}>⬆</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Success Icon */}
        <View style={styles.successContainer}>
          <Animated.View
            style={[
              styles.successCircle,
              {
                backgroundColor: colors.success,
                transform: [{ scale: checkScale }],
                opacity: checkOpacity,
              },
            ]}
          >
            <Text style={styles.checkIcon}>✓</Text>
          </Animated.View>

          <Text style={[styles.successTitle, { color: theme.text }]}>
            Order Placed Successfully!
          </Text>
          <Text
            style={[styles.successSubtitle, { color: theme.textSecondary }]}
          >
            We're getting your order ready!
          </Text>
        </View>

        {/* Order Details Card */}
        <View style={[styles.card, { backgroundColor: theme.cardBg }]}>
          <View style={styles.cardRow}>
            <View style={styles.cardRowContent}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: theme.iconBg },
                ]}
              >
                <Text style={[styles.icon, { color: theme.text }]}>🧾</Text>
              </View>
              <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>
                Order #{" "}
                <Text style={[styles.cardValue, { color: theme.text }]}>
                  123456789
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.copyButton, { backgroundColor: theme.buttonBg }]}
              onPress={handleCopyOrderNumber}
            >
              <Text style={[styles.copyButtonText, { color: theme.text }]}>
                Copy
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.divider, { backgroundColor: theme.border }]} />

          <View style={styles.cardRow}>
            <View style={styles.cardRowContent}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: theme.iconBg },
                ]}
              >
                <Text style={[styles.icon, { color: theme.text }]}>🚚</Text>
              </View>
              <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>
                Estimated Delivery:{" "}
                <Text style={[styles.cardValue, { color: theme.text }]}>
                  3-5 Business Days
                </Text>
              </Text>
            </View>
          </View>
        </View>

        {/* Items Section */}
        <View style={styles.itemsSection}>
          <Text style={[styles.itemsTitle, { color: theme.text }]}>
            Your Items
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.itemsScroll}
          >
            {orderItems.map((item) => (
              <Image
                key={item.id}
                source={{ uri: item.image }}
                style={styles.itemImage}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={[styles.bottomContainer, { backgroundColor: theme.bg }]}>
        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: colors.primary }]}
        >
          <Text style={styles.primaryButtonText}>Continue Exploring</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={[styles.secondaryButtonText, { color: colors.primary }]}>
            View Order Details
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  successContainer: {
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 16,
  },
  successCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    color: "#ffffff",
    fontSize: 56,
    fontWeight: "700",
  },
  successTitle: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 24,
    letterSpacing: -0.5,
  },
  successSubtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 12,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginTop: 32,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 56,
  },
  cardRowContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
  },
  cardLabel: {
    fontSize: 14,
    flex: 1,
  },
  cardValue: {
    fontWeight: "500",
  },
  copyButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 84,
    alignItems: "center",
  },
  copyButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    marginVertical: 16,
  },
  itemsSection: {
    marginTop: 32,
  },
  itemsTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 16,
  },
  itemsScroll: {
    gap: 8,
    paddingBottom: 16,
  },
  itemImage: {
    width: 96,
    height: 96,
    borderRadius: 12,
  },
  bottomContainer: {
    padding: 16,
    gap: 8,
  },
  primaryButton: {
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default OrderConfirmationScreen;
