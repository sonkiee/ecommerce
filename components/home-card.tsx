import { AntDesign, Feather } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { router } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function HomeCard({ item }) {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={[styles.page, { width, height }]}>
      <Image source={{ uri: item.image }} style={[styles.image]} />

      {/* Overlay content */}
      <View style={[styles.overlay, { paddingBottom: tabBarHeight + 20 }]}>
        {/* LEFT SECTION */}
        <View style={styles.leftSection}>
          <View style={styles.textContainer}>
            <Text style={styles.creator}>@{item.creator}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          {/* Shop Now Card */}
          <View style={styles.shopCard}>
            <View style={styles.shopLeft}>
              <View style={styles.sellerImagePlaceholder}>
                <Text style={{ color: "#ccc", fontSize: 10 }}>Img</Text>
              </View>
            </View>

            <View style={styles.shopMiddle}>
              <Text style={styles.shopItemName}>red dress</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <TouchableOpacity
              style={styles.shopButton}
              onPress={() =>
                router.navigate({
                  pathname: "/product/[id]",
                  params: {
                    id: String(item.id), // ✅ dynamic route param required
                    item: JSON.stringify(item), // ✅ your actual product data
                  },
                })
              }
            >
              <Text style={styles.shopButtonText}>Shop now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* RIGHT SECTION */}
        <View style={styles.rightSection}>
          <View style={styles.iconBlock}>
            <TouchableOpacity style={styles.iconButton}>
              <AntDesign name="heart" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.iconText}>{item.likes}</Text>
          </View>

          <View style={styles.iconBlock}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="message-circle" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.iconText}>{item.comments}</Text>
          </View>

          <View style={styles.iconBlock}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="share-2" size={26} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.iconText}>{item.shares}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height,
    width,
  },
  image: {
    width,
    height,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 70, // ⬅️ increased for tab bar space
  },

  leftSection: {
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 60,
    width: "100%",
  },
  textContainer: {
    flexShrink: 1,
  },
  creator: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 10,
  },
  /* --- SHOP CARD --- */
  shopCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(30,30,30,0.85)",
    padding: 10,
    borderRadius: 10,
    gap: 10,
    width: "100%",
  },
  shopLeft: {
    alignItems: "center",
    justifyContent: "center",
  },
  sellerImagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },
  shopMiddle: {
    // flex: 1,
  },
  shopItemName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  price: {
    color: "#00ff9d",
    fontSize: 15,
    fontWeight: "700",
  },
  shopButton: {
    backgroundColor: "#00ff9d",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  shopButtonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 13,
  },

  /* --- RIGHT SIDE ICONS --- */
  rightSection: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
    // borderWidth: 1,
  },
  iconBlock: {
    alignItems: "center",
    marginBottom: 20,
  },
  iconButton: {
    alignItems: "center",
    backgroundColor: "rgba(50,50,50,0.8)",
    width: 58,
    height: 58,
    borderRadius: 9999,
    justifyContent: "center",
  },
  iconText: {
    color: "#fff",
    fontSize: 13,
    marginTop: 4,
  },
});
