import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OrderConfirmationScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm Your Order</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Order Items */}
        <View style={styles.item}>
          <View style={styles.itemInfo}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1oUEVcA19DypuYSXcLSDgE1S649L4_t2KLFhUzcQa8lD7NV8rs7WHejVKYEhFK7NMlI5H9IyBbayAlFWTrnuTI731qaQ4-Y-EStv3HSePK-nVl_yZvtp0ZwM2VNLzcnXlvl3iA6kRkTeERBK1sU_asSMZk3504ObAmeuqHaAJZUH4nZGarfmUDmfzWsCHKHaY6voGsjZECJXoH6D7b-N_ML8ukZcMGRUTLzqjNQ1E9AjYrU7zvYDKXGSGKYHKsuj8OjlD5YClXk7S",
              }}
              style={styles.image}
            />
            <View>
              <Text style={styles.itemName}>Classic T-shirt</Text>
              <Text style={styles.itemDetail}>Black, M, Qty: 1</Text>
            </View>
          </View>
          <Text style={styles.price}>$24.99</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.itemInfo}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCLDWDauJ_KOBCZpqE1llzK-Q6qzhm9XyXKAwpqIplAt2R-LCOx_IsWiuoNZ2v17CZt9gxvkvuUkVTLwPikkU8LyK6ExXZi1z40xZhnsA9gPEQWG6gajcfUWTzRo8odLHVwrAYRvABphgC4KvTWJT6HuxMxVAFJdcN_X5yzd2r6fSqvOxOKiN362ZHb_UrvOCAk_40Gl35p5nOf26aAR7SZbTo6fwxzfRTBRA_7BadnPQP2AR7LMaZ5vvHXyvUGWqG3GNRNj_MIe9_",
              }}
              style={styles.image}
            />
            <View>
              <Text style={styles.itemName}>Vintage Jeans</Text>
              <Text style={styles.itemDetail}>Blue, 32, Qty: 1</Text>
            </View>
          </View>
          <Text style={styles.price}>$59.99</Text>
        </View>

        {/* Shipping */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping to</Text>
          <View style={styles.sectionRow}>
            <View style={styles.sectionIcon}>
              <MaterialIcons name="map" size={22} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>Jane Doe</Text>
              <Text style={styles.itemDetail}>
                123 Main St, Anytown, USA 12345
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.sectionRow}>
            <View style={styles.sectionIcon}>
              <MaterialIcons name="credit-card" size={22} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>Visa **** 1234</Text>
              <Text style={styles.itemDetail}>Expires 12/25</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.summary}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.itemDetail}>Subtotal</Text>
            <Text style={styles.itemName}>$84.98</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.itemDetail}>Shipping</Text>
            <Text style={styles.itemName}>$5.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.itemDetail}>Taxes</Text>
            <Text style={styles.itemName}>$7.20</Text>
          </View>
          <View style={styles.divider} />
          <View style={[styles.summaryRow, { marginTop: 6 }]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalLabel}>$97.18</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryButton}>
          <MaterialIcons name="lock" size={20} color="#fff" />
          <Text style={styles.primaryButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ---------- STYLES ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181111",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingBottom: 8,
    justifyContent: "space-between",
    backgroundColor: "#181111",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  itemName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  itemDetail: {
    color: "#b89d9f",
    fontSize: 13,
  },
  price: {
    color: "#fff",
    fontSize: 15,
  },
  section: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#2a1d1d",
    paddingBottom: 8,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#382929",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#ea2a33",
    fontWeight: "500",
  },
  summary: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: "#2a1d1d",
    marginVertical: 8,
  },
  totalLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#181111",
    borderTopWidth: 1,
    borderColor: "#2a1d1d",
  },
  primaryButton: {
    backgroundColor: "#ea2a33",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
