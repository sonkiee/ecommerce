import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ShoppingCartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Vintage Denim Jacket",
      variant: "Blue / Medium",
      price: 75.0,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCI-3NmPVAaFQUfWDre0Y_5bffNPLf2CmTZ_VyEG-WWLh954Z6yRgZhIC4_P-fh93YXpcXXh7e_CxEONanxXWh8YrEgT5rh-iq3JmDq48QQnETc0rlL_zUyNChAGQtDo9mgjJQBPeI4n5YzyPRjYDHah6Mzr_0hEzIBtjaIm2aLSOKq_fR-bb-1nMkybWnAbT5n1anNBE9au5uUnO4q6aaQpUWb0HcnC0a0kMdyOMcOteiC3X4ax1r0W1GqVXLHTI0lcHXD6j0D_RYD",
    },
    {
      id: 2,
      name: "Classic Leather Belt",
      variant: "Brown / L",
      price: 45.0,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBiP0-1MMNBGQ3mTygfWh-K4IOc4SVXMB1EMj6b_P02gGWkJMSEvTZt0ycn65u_RvkoO0B-2HqN3cwrQB9XgvqY3GF4nih73MKCD0xBfuEERcJATZn_liYvuHuBhBD6LEX1hWd_IA7wFgQSBsW5ECVAzpjwBYbBpTshHMQm7UzHI5LCMc_jclSbWTOI71Q3TnKktfX1Ct6dUO5sRaQ9T9RdwcG2fuAAWkh85tK4JfJENH6TDt8vP0mUAdY98g_P4G5ZexMXxXA5osbv",
    },
  ]);

  const [promo, setPromo] = useState("");

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const taxes = subtotal * 0.08;
  const total = subtotal + shipping + taxes;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Cart Items */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.itemImage}
              imageStyle={{ borderRadius: 8 }}
            />
            <View style={styles.itemInfo}>
              <View style={styles.itemHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemVariant}>{item.variant}</Text>
                  <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <MaterialIcons name="delete" size={22} color="#EF4444" />
                </TouchableOpacity>
              </View>

              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => updateQuantity(item.id, -1)}
                >
                  <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtyCount}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => updateQuantity(item.id, +1)}
                >
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Promo code */}
        <View style={styles.promoContainer}>
          <TextInput
            style={styles.promoInput}
            placeholder="Enter promo code"
            placeholderTextColor="#9CA3AF"
            value={promo}
            onChangeText={setPromo}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>

        {/* Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={styles.summaryValue}>${shipping.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Taxes</Text>
            <Text style={styles.summaryValue}>${taxes.toFixed(2)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotal}>Total</Text>
            <Text style={styles.summaryTotal}>${total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Checkout */}
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
    borderBottomColor: "#1F2937",
    borderBottomWidth: 1,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#1F2937",
    paddingBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#1F2937",
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    color: "#F9FAFB",
    fontSize: 16,
    fontWeight: "600",
  },
  itemVariant: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  itemPrice: {
    color: "#F9FAFB",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#374151",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  qtyCount: {
    color: "#fff",
    marginHorizontal: 12,
    fontSize: 16,
  },
  promoContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  promoInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#374151",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 12,
    color: "#fff",
    backgroundColor: "#1F2937",
  },
  applyButton: {
    backgroundColor: "#EF4444",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  applyText: {
    color: "#fff",
    fontWeight: "600",
  },
  summaryContainer: {
    marginTop: 24,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  summaryLabel: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  summaryValue: {
    color: "#F9FAFB",
    fontSize: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#1F2937",
    marginVertical: 8,
  },
  summaryTotal: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#EF4444",
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 24,
  },
  checkoutText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});
