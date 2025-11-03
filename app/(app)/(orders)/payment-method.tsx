import { MaterialIcons } from "@expo/vector-icons";
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

export default function PaymentMethodScreen() {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [saveCard, setSaveCard] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={22} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment Method</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Wallet Section */}
        <View style={styles.walletBox}>
          <View style={styles.walletHeader}>
            <Text style={styles.subtleText}>Current Balance</Text>
            <View style={styles.walletLabel}>
              <MaterialIcons
                name="account-balance-wallet"
                size={18}
                color="#FF3B30"
              />
              <Text style={styles.walletText}>My Wallet</Text>
            </View>
          </View>
          <Text style={styles.balanceText}>$50.00</Text>

          <TouchableOpacity style={styles.addFundsButton}>
            <MaterialIcons name="add" size={20} color="white" />
            <Text style={styles.addFundsText}>Add Funds</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Methods */}
        {[
          { key: "wallet", label: "My Wallet", icon: "account-balance-wallet" },
          { key: "card", label: "Credit or Debit Card", icon: "credit-card" },
        ].map((method) => (
          <TouchableOpacity
            key={method.key}
            style={styles.methodItem}
            onPress={() => setSelectedMethod(method.key)}
          >
            <View style={styles.methodLeft}>
              <View style={styles.iconBox}>
                <MaterialIcons name={method.icon} size={22} color="white" />
              </View>
              <Text style={styles.methodLabel}>{method.label}</Text>
            </View>
            <View
              style={[
                styles.radio,
                {
                  borderColor:
                    selectedMethod === method.key ? "#FF3B30" : "#555",
                },
              ]}
            >
              {selectedMethod === method.key && (
                <View style={styles.radioDot} />
              )}
            </View>
          </TouchableOpacity>
        ))}

        {/* Card Form */}
        {selectedMethod === "card" && (
          <View style={styles.formBox}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
              placeholder="1234 5678 9876 5432"
              placeholderTextColor="#8E8E93"
              style={styles.input}
            />

            <View style={styles.row}>
              <View style={styles.half}>
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                  placeholder="MM/YY"
                  placeholderTextColor="#8E8E93"
                  style={styles.input}
                />
              </View>
              <View style={styles.half}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  placeholder="123"
                  placeholderTextColor="#8E8E93"
                  style={styles.input}
                />
              </View>
            </View>

            <Text style={styles.label}>Name on Card</Text>
            <TextInput
              placeholder="John Doe"
              placeholderTextColor="#8E8E93"
              style={styles.input}
            />

            <TouchableOpacity
              onPress={() => setSaveCard(!saveCard)}
              style={styles.saveCardRow}
            >
              <View
                style={[
                  styles.checkbox,
                  { backgroundColor: saveCard ? "#FF3B30" : "#1C1C1E" },
                ]}
              />
              <Text style={styles.saveCardText}>
                Save this card for future purchases
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* PayPal / Apple Pay */}
        {[
          {
            key: "paypal",
            label: "PayPal",
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
          },
          {
            key: "apple",
            label: "Apple Pay",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
          },
        ].map((method) => (
          <TouchableOpacity
            key={method.key}
            style={styles.methodItem}
            onPress={() => setSelectedMethod(method.key)}
          >
            <View style={styles.methodLeft}>
              <View style={styles.iconBox}>
                <Image
                  source={{ uri: method.logo }}
                  style={{ width: 24, height: 24, tintColor: "white" }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.methodLabel}>{method.label}</Text>
            </View>
            <View
              style={[
                styles.radio,
                {
                  borderColor:
                    selectedMethod === method.key ? "#FF3B30" : "#555",
                },
              ]}
            >
              {selectedMethod === method.key && (
                <View style={styles.radioDot} />
              )}
            </View>
          </TouchableOpacity>
        ))}

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.lockRow}>
            <MaterialIcons name="lock" size={16} color="#8E8E93" />
            <Text style={styles.lockText}>Your payment is secure</Text>
          </View>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payText}>Pay $24.99</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerText: { color: "white", fontSize: 18, fontWeight: "bold" },
  walletBox: {
    backgroundColor: "#1C1C1E",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 14,
    marginTop: 10,
  },
  walletHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  subtleText: { color: "#8E8E93", fontSize: 13 },
  walletLabel: { flexDirection: "row", alignItems: "center", gap: 5 },
  walletText: { color: "white", fontWeight: "600" },
  balanceText: { color: "white", fontSize: 30, fontWeight: "bold" },
  addFundsButton: {
    backgroundColor: "#2C2C2E",
    marginTop: 12,
    borderRadius: 8,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addFundsText: { color: "white", fontWeight: "600", marginLeft: 6 },
  methodItem: {
    backgroundColor: "#1C1C1E",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },
  methodLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  iconBox: {
    backgroundColor: "#2C2C2E",
    borderRadius: 8,
    padding: 8,
  },
  methodLabel: { color: "white", fontSize: 16, fontWeight: "500" },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  radioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#FF3B30",
  },
  formBox: {
    backgroundColor: "#1C1C1E",
    padding: 16,
    marginTop: 2,
  },
  label: { color: "#8E8E93", fontSize: 13, marginBottom: 6 },
  input: {
    backgroundColor: "#2C2C2E",
    color: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3A3A3C",
    height: 48,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  row: { flexDirection: "row", gap: 12 },
  half: { flex: 1 },
  saveCardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
  },
  checkbox: {
    height: 18,
    width: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#555",
  },
  saveCardText: { color: "white", fontSize: 13, fontWeight: "500" },
  footer: { paddingHorizontal: 16, marginTop: 20, alignItems: "center" },
  lockRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 8,
  },
  lockText: { color: "#8E8E93", fontSize: 12 },
  payButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  payText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
