import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function OrderManagementScreen() {
  const [tab, setTab] = useState("Pending");

  const orders = [
    {
      id: "#12345",
      product: "Crimson Wave Hoodie",
      customer: "John Doe",
      price: "$49.99",
      status: "Pending",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwfhnv3NAWkbp6kFomO05jf_HccVXhsC7Ppp0UHvaRkqx8aRK3BqY4ZuFO1U1YgvHV-PYxNPHyVGp3SSqV1gBIbEUKI6ctAkEM0j4yeEFEeC80FBDkrtMaACPBJ0j26d89AIjH6PlUor4VTgW0yoPwz0QgBrtQoNQdMpbmMbCAA306To7qpU9SVaJhwpR16t2PLF7hxkt6coAaxcFC3fgoFmzq7XdLKa0drV0Ju0KvwO_6OhF-RmA1SrWt6bPbpJdpzvPNq4BjQM_v",
    },
    {
      id: "#67890",
      product: "Shadow Blend T-Shirt",
      customer: "Jane Smith",
      price: "$29.99",
      status: "Pending",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAbdhclyVanP-Pdm9dI40p3kKzI5Xe9FQz7BOM2OpYQ6lIOrNQ3KN7m8OFlTrAlttoci9I2ssmsDx99MwvJxXFFS-NWiuofEzSm0pYKVNeNoUbLnyVy23UhXasVIZE5-Eka1cGjVJ-fLhvQbWCvcie59r1k2jZxvUybyRLpUuBggv1SUcAtO3S275W8CteC-1Se35-skPhItaR3ROAWpzLE0d-eXsACgWvHBbNL-GmwCVvB-VyoSZmcjO_dJij1BzVfiXlKQlDt7PEZ",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Management</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={18}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search by Order ID, Customer, Product"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* Filters */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="calendar-today" size={16} color="#666" />
            <Text style={styles.filterText}>All time</Text>
            <MaterialIcons name="expand-more" size={16} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Last 30 days</Text>
            <MaterialIcons name="expand-more" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {["Pending", "Shipped", "Delivered", "Cancelled"].map((t) => (
            <TouchableOpacity
              key={t}
              onPress={() => setTab(t)}
              style={[styles.tabItem, tab === t && styles.tabItemActive]}
            >
              <Text style={[styles.tabText, tab === t && styles.tabTextActive]}>
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Orders */}
        <View style={styles.ordersList}>
          {orders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderRow}>
                <Image source={{ uri: order.image }} style={styles.image} />
                <View style={styles.orderInfo}>
                  <Text style={styles.product}>{order.product}</Text>
                  <Text style={styles.detail}>Customer: {order.customer}</Text>
                  <Text style={styles.detail}>Order ID: {order.id}</Text>
                  <Text style={styles.price}>{order.price}</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={styles.status}>{order.status}</Text>
                </View>
              </View>

              <View style={styles.actions}>
                <TouchableOpacity style={[styles.actionButton, styles.cancel]}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.ship]}>
                  <Text style={styles.shipText}>Mark as Shipped</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f6f6",
  },
  header: {
    backgroundColor: "#211111",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  searchBox: {
    marginHorizontal: 16,
    marginTop: 16,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    top: 12,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 36,
    fontSize: 14,
    color: "#000",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  filters: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  filterText: {
    color: "#333",
    fontSize: 14,
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
  },
  tabItemActive: {
    borderBottomWidth: 3,
    borderBottomColor: "#ea2a33",
  },
  tabText: {
    fontSize: 14,
    color: "#777",
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#ea2a33",
  },
  ordersList: {
    padding: 16,
  },
  orderCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  orderRow: {
    flexDirection: "row",
    gap: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  orderInfo: {
    flex: 1,
    justifyContent: "center",
  },
  product: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  detail: {
    fontSize: 13,
    color: "#666",
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#ea2a33",
    marginTop: 4,
  },
  statusContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  status: {
    backgroundColor: "#fff3cd",
    color: "#856404",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: "hidden",
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 10,
  },
  actionButton: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cancel: {
    backgroundColor: "#eee",
  },
  cancelText: {
    color: "#222",
    fontWeight: "600",
  },
  ship: {
    backgroundColor: "#ea2a33",
  },
  shipText: {
    color: "#fff",
    fontWeight: "600",
  },
});
