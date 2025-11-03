import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function DeliveryAddressScreen() {
  const [isDefault, setIsDefault] = useState(false);
  const [tab, setTab] = useState("new");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Address</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === "new" && styles.tabActive]}
          onPress={() => setTab("new")}
        >
          <Text
            style={[
              styles.tabText,
              tab === "new" ? styles.tabTextActive : styles.tabTextInactive,
            ]}
          >
            Add a New Address
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, tab === "saved" && styles.tabActive]}
          onPress={() => setTab("saved")}
        >
          <Text
            style={[
              styles.tabText,
              tab === "saved" ? styles.tabTextActive : styles.tabTextInactive,
            ]}
          >
            Saved Addresses
          </Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <ScrollView
        style={styles.form}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Input label="Full Name" placeholder="e.g. John Doe" />
        <Input label="Address Line 1" placeholder="Street Address" />
        <Input
          label="Address Line 2 (Optional)"
          placeholder="Apartment, suite, etc."
        />
        <View style={styles.row}>
          <Input label="City" placeholder="e.g. New York" style={{ flex: 1 }} />
          <Input
            label="State/Province"
            placeholder="e.g. California"
            style={{ flex: 1, marginLeft: 12 }}
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Zip/Postal Code"
            placeholder="e.g. 10001"
            style={{ flex: 1 }}
          />
          <Input
            label="Phone Number"
            placeholder="(123) 456-7890"
            style={{ flex: 1, marginLeft: 12 }}
          />
        </View>

        {/* Checkbox */}
        <View style={styles.checkboxRow}>
          <Switch
            value={isDefault}
            onValueChange={setIsDefault}
            thumbColor={isDefault ? "#ea2a33" : "#ccc"}
          />
          <Text style={styles.checkboxLabel}>Save as default address</Text>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save & Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Reusable Input Field
function Input({ label, placeholder, style }) {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181111",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    backgroundColor: "#2d1b1b",
    borderRadius: 12,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: {
    backgroundColor: "#181111",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#fff",
  },
  tabTextInactive: {
    color: "#888",
  },
  form: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    color: "#fff",
    fontWeight: "500",
    marginBottom: 8,
    fontSize: 15,
  },
  input: {
    backgroundColor: "#261c1c",
    color: "#fff",
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#3a2a2a",
  },
  row: {
    flexDirection: "row",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxLabel: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
  },
  footer: {
    padding: 16,
    borderTopWidth: 0.5,
    borderColor: "#2d2d2d",
  },
  saveButton: {
    backgroundColor: "#ea2a33",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
