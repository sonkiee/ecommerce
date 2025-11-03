import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Vintage Leather Watch",
    seller: "@seller_username",
    price: "$120.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKpHBL-7lAYDWxKRZSP1hJ0dkckn6fRNzuYTuGs7GPaZhAWsd6uMS830LrjkAdsE4DOibqxJ9cxX1JR_FXpbBbxWokbdzR9ovRl9K05pc9lRAsPIHA3k_qoHBz2ZPVf-W6waZ5CPVcJSCPuIKdmzil5do6XfVecXVqykU4qTqTheN5eNCiAkvTeu03bhdOGgIElA2zehmsmM0-hOy0ED8pCBfhsDUX-WMJyuN7x01Qt2LK8xs_spbhh-bS-2HUkni7eIvWXE9W0tYh",
  },
  {
    id: "2",
    name: "Modern Smartwatch",
    seller: "@tech_guru",
    price: "$250.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj7SxT25tsR5tL7Ij3cp-_teSCi_wrcnYZKviYiiMgFAlcpEsMSVApe0AfFJeQtPcDy291cU-RfQ3m8LLVIdlX3H7Wf_vdBgFRoat2yFo_PW0CyTz4PoWEM7X-I7f-28oTSIkg1-IHGSfgX9ilkOeO0biOdwsz5HXmR09r1yYzS9XfH1EITBYhU8tK4-Z1Zk2plM3-NiqUOhgaUXaLQ31GoRmYVctZdFFjj551XeUSVndzCDE_9b8J9F4YckM_BcY-WgnXu4ZSK9dL",
  },
  {
    id: "3",
    name: "Classic Gold Watch",
    seller: "@luxury_finds",
    price: "$450.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtdJSOOs8G5WxSa5p1LFBfTgnC1QKuABw4oaLt6z269mAjxMXiBp8ULl5z7a62tMLa80YSey0tB0rJ8zT2jHSbkrGZm9g-E41nT-gyK4cWovzgC3NDBoQkVMPwWcSloLmVB_u2rHJMOEzHA_vhHKPyTIYiSbdTifgsA_XPaK7x84AxGycF6EKkXKMzpraql-sBnbM8PUzB0UOtfhJqnTM17T6Nd4XAFpo6tNGMxiIWqsAks1m6iyQAJ1grIPXMJMxq4xuaXsjrHBgP",
  },
  {
    id: "4",
    name: "Sporty Digital Watch",
    seller: "@active_life",
    price: "$75.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCB089U6OKbuTEi27TdLEeGMLXfp7-WNStjYRuwf29IQ2x4jJz9aRIRON-4_NS2BITK6Ax9jFJI5bNw5K1wTggGknzBdpaBxEKKghiJfXGpjcr0RvDjebhojWxvLu2AsguCQVho8_UfSVjxXaaolRVLpinH9IfjkgZeWGHuQw5jFS0MoL_k3brV5rWW1yhFCBZkUkyaVf3Tmzil2xriPfBnindxGbjldZjQ-3qmoA1O3igTwsLHN4DFExL3bzzgII7IZtN51A8xiIQA",
  },
];

export default function ProductListingScreen() {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={20} color="#888" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search products..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilter(true)}
        >
          <MaterialIcons name="tune" size={22} color="#ea2a33" />
        </TouchableOpacity>
      </View>

      {/* Sort Dropdown */}
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort by:</Text>
        <Text style={styles.sortValue}>Newest</Text>
        <MaterialIcons name="expand-more" color="#888" />
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.cardImage}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={styles.overlay} />
              <TouchableOpacity style={styles.replayButton}>
                <MaterialIcons name="replay" size={20} color="#fff" />
              </TouchableOpacity>
            </ImageBackground>

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.cardSeller}>{item.seller}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.navbar}>
        {[
          { icon: "home", label: "Home", active: true },
          { icon: "search", label: "Explore" },
          { icon: "add-circle", label: "Post" },
          { icon: "inbox", label: "Inbox" },
          { icon: "person", label: "Profile" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <MaterialIcons
              name={item.icon}
              size={24}
              color={item.active ? "#ea2a33" : "#888"}
            />
            <Text
              style={[
                styles.navText,
                { color: item.active ? "#ea2a33" : "#888" },
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filter Modal */}
      <Modal visible={showFilter} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.filterModal}>
            <TouchableOpacity
              onPress={() => setShowFilter(false)}
              style={styles.modalHandle}
            >
              <View style={styles.handleBar} />
            </TouchableOpacity>
            <Text style={styles.filterTitle}>Filters</Text>

            {/* Example Category */}
            <Text style={styles.filterLabel}>Category</Text>
            <View style={styles.filterRow}>
              {["Fashion", "Electronics", "Home", "Books"].map((c, i) => (
                <TouchableOpacity key={i} style={styles.filterChip}>
                  <Text style={styles.filterChipText}>{c}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setShowFilter(false)}
            >
              <Text style={styles.applyButtonText}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#2C2C2E",
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  searchInput: { flex: 1, color: "#fff", marginLeft: 6, height: 40 },
  filterButton: {
    height: 40,
    width: 40,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: "rgba(234,42,51,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  sortContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  sortLabel: { color: "#aaa", fontSize: 13, marginRight: 4 },
  sortValue: { color: "#fff", fontSize: 13, marginRight: 2 },
  card: {
    backgroundColor: "#1C1C1E",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    width: "48%",
  },
  cardImage: { height: 150, justifyContent: "flex-end" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
  },
  replayButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 20,
    padding: 4,
  },
  cardContent: { padding: 8 },
  cardTitle: { color: "#fff", fontWeight: "600", fontSize: 13 },
  cardSeller: { color: "#888", fontSize: 11, marginTop: 2 },
  cardPrice: { color: "#fff", fontWeight: "bold", marginTop: 4 },
  navbar: {
    position: "absolute",
    bottom: 0,
    height: 70,
    borderTopWidth: 1,
    borderColor: "#2C2C2E",
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 10, marginTop: 2 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  filterModal: {
    backgroundColor: "#1C1C1E",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  modalHandle: { alignItems: "center", marginBottom: 10 },
  handleBar: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#555",
  },
  filterTitle: {
    textAlign: "center",
    color: "#888",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  filterLabel: { color: "#fff", fontWeight: "600", marginBottom: 6 },
  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  filterChip: {
    backgroundColor: "rgba(234,42,51,0.15)",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  filterChipText: { color: "#ea2a33", fontSize: 13 },
  applyButton: {
    backgroundColor: "#ea2a33",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  applyButtonText: { color: "#fff", fontWeight: "bold" },
});
