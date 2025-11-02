import Button from "@/components/button";
import Label from "@/components/label";
import { colors } from "@/constants";
// import { Button } from "@react-navigation/elements";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function ProductScreen() {
  const { item } = useLocalSearchParams();
  const thing = JSON.parse(item as string);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background_dark }}
      edges={["bottom"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* === Product Image === */}
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: thing.image }}
            style={styles.image}
            contentFit="cover"
          />

          {/* Floating Actions (like favorite & chat) */}
          <View style={styles.overlayRight}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.icon}>♡</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.icon}>💬</Text>
              <Text style={styles.count}>1.2k</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {/* === Title and Price === */}
          <View style={styles.content}>
            <Text style={styles.title}>{thing.title}</Text>
            <Text style={styles.price}>${thing.price}</Text>

            {/* === Vendor Info === */}
            <View style={styles.vendorCard}>
              <Image
                source={{
                  uri:
                    thing.vendorImage ??
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCJMkSBknGnRgRmppn55ixl7wHxnCosjGR0SGtAcTq1fMLZAFGf_sUHf50ltZpMAcGYJhEeARXGxSUPtmAeIzpaDHge0yPfpwjTlU0T0-EcH8P1GVDpyFHNvFeeirCVWjRGbq9LA5oCrGMpKmdACEjPqZjE3vhHsvy_o-HKBSGRCVUlRilQrAB4kNORNCGKZRoTudFm8ljdKTJYKGN8CXMjY8NR1pz3KmA3KZV7JR33Uhxx-j2dzG6RDj9OO04LqmG1mh7bp2ZeXF8g",
                }}
                style={styles.vendorAvatar}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.vendorName}>RetroFits Co.</Text>
                <Text style={styles.vendorRating}>⭐ 4.8 (2.1k reviews)</Text>
              </View>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>

            {/* === Options === */}
            <View style={styles.section}>
              <Label
                text="Options"
                size="l"
                style={{ color: colors.text_white }}
              />
              <View style={styles.optionRow}>
                <Option label="Size: M" />
                <Option label="Color: Black" />
                <Option label="Qty: 1" />
              </View>
            </View>

            {/* === Description === */}
            <View style={styles.section}>
              <Label
                text="Description"
                size="l"
                style={{ color: colors.text_white }}
              />
              <Text style={styles.desc}>
                Experience the perfect blend of comfort and style with our
                vintage graphic tee. Made from 100% premium cotton, this t-shirt
                offers a soft, breathable feel for all-day wear.{" "}
                <Text style={styles.link}>Read More</Text>
              </Text>
            </View>

            {/* === Reviews === */}
            <View style={styles.section}>
              <Label
                text="Reviews (1,242)"
                size="l"
                style={{ color: colors.text_white }}
              />
              <View style={styles.reviewCard}>
                <Image
                  source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQNWgorO933v1ZExV6fUG8AgcYVJfJLVcdLMKOsxfwyW4Go9QegAV0HjHML7oG3Pa1PeUVqtjU5yAHyURpok7QCv7qe12NNfhxaIOVqRgXuOTCNhGRkKmjiV9kHEojzhfNMZytyIvH2AnIzS44SA-KnGmV2eOfP5Da3vw4R8sgTiQVqjzm5ygulFAXo5t_gsVdig4rPEkHBdD86qWT7lcBjV7gRExjtY4wSTKd_zfL7hOQ_noevP4LJVknjk0RL8_LZCs2ZBl6Xphm",
                  }}
                  style={styles.reviewerAvatar}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.reviewerName}>Jane Doe</Text>
                  <Text style={styles.reviewerText}>
                    Absolutely love this shirt! The quality is amazing and the
                    fit is perfect. It's my new favorite tee.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* === Bottom Bar === */}

      {/* <View style={{ flexDirection: "row", gap: spacing.sm }}>
        <Button title="Add to Cart" style={{ flex: 1 }} />
        <Button title="Buy Now" variant="primary" style={{ flex: 1 }} />
      </View> */}
      <View style={styles.bottomBar}>
        <Button
          title="Add to Cart"
          style={{ flex: 1 }}
          variant="secondary"
          onPress={() => {}}
        />
        <Button title="Buy Now" style={{ flex: 1 }} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const Option = ({ label }: { label: string }) => (
  <TouchableOpacity style={styles.optionButton}>
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background_dark },
  imageWrapper: { position: "relative", height: height * 0.55, width: "100%" },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  overlayRight: { position: "absolute", bottom: 20, right: 20, gap: 14 },
  actionButton: {
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { color: "#fff", fontSize: 22 },
  count: { color: "#fff", fontSize: 12, marginTop: 4 },
  content: { padding: 16 },
  title: { fontSize: 28, fontWeight: "700", color: "#fff" },
  price: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.primary,
    marginTop: 4,
  },
  vendorCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    padding: 10,
    borderRadius: 12,
    marginTop: 16,
  },
  vendorAvatar: { width: 50, height: 50, borderRadius: 50 },
  vendorName: { color: "#fff", fontWeight: "600" },
  vendorRating: { color: "#bbb", fontSize: 12, marginTop: 2 },
  followBtn: {
    backgroundColor: "rgba(234,42,51,0.2)",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  followText: { color: colors.primary, fontWeight: "600" },
  section: { marginTop: 24 },
  optionRow: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 8 },
  optionButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  optionText: { color: "#fff", fontSize: 14 },
  desc: { color: "#ccc", fontSize: 14, lineHeight: 20, marginTop: 6 },
  link: { color: colors.primary, fontWeight: "600" },
  reviewCard: {
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginTop: 10,
  },
  reviewerAvatar: { width: 40, height: 40, borderRadius: 50 },
  reviewerName: { color: "#fff", fontWeight: "600", marginBottom: 4 },
  reviewerText: { color: "#ccc", fontSize: 13, lineHeight: 18 },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    gap: 12,
    backgroundColor: "rgba(33,17,17,0.95)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
    padding: 16,
    paddingBottom: 30,
    flex: 1,
  },
  bottomBtn: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  bottomBtnText: { fontSize: 16, fontWeight: "700" },
  addToCart: { backgroundColor: "rgba(234,42,51,0.1)" },
  buyNow: { backgroundColor: colors.primary },
});
