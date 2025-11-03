import { MaterialIcons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type Tx = {
  id: string;
  title: string;
  subtitle: string;
  amount: number; // positive for deposit, negative for withdrawal
  date: string;
  type: "deposit" | "withdrawal" | "purchase";
};

const initialTx: Tx[] = [
  {
    id: "t1",
    title: "Deposit from Visa ****1234",
    subtitle: "Oct 26, 2023, 10:00 AM",
    amount: 500.0,
    date: "2023-10-26T10:00:00Z",
    type: "deposit",
  },
  {
    id: "t2",
    title: "Withdrawal to Bank Account",
    subtitle: "Oct 25, 2023, 03:30 PM",
    amount: -200.0,
    date: "2023-10-25T15:30:00Z",
    type: "withdrawal",
  },
  {
    id: "t3",
    title: "Purchase of 'Denim Jacket'",
    subtitle: "Oct 24, 2023, 08:15 AM",
    amount: -75.5,
    date: "2023-10-24T08:15:00Z",
    type: "purchase",
  },
  {
    id: "t4",
    title: "Deposit from Mastercard ****5678",
    subtitle: "Oct 23, 2023, 11:45 AM",
    amount: 1000.0,
    date: "2023-10-23T11:45:00Z",
    type: "deposit",
  },
];

export default function WalletScreen() {
  const [transactions, setTransactions] = useState<Tx[]>(initialTx);
  const [filter, setFilter] = useState<
    "All" | "Deposits" | "Withdrawals" | "Purchases"
  >("All");

  const balance = useMemo(
    () => transactions.reduce((s, t) => s + t.amount, 1250.0), // base + transactions (kept 1250 visible like HTML)
    [transactions]
  );

  const filteredTx = useMemo(() => {
    switch (filter) {
      case "Deposits":
        return transactions.filter((t) => t.type === "deposit");
      case "Withdrawals":
        return transactions.filter((t) => t.type === "withdrawal");
      case "Purchases":
        return transactions.filter((t) => t.type === "purchase");
      default:
        return transactions;
    }
  }, [filter, transactions]);

  const onFund = () => {
    Alert.alert("Fund Wallet", "Open fund flow (placeholder)");
  };
  const onWithdraw = () => {
    Alert.alert("Withdraw", "Open withdraw flow (placeholder)");
  };
  const onNav = (key: string) => {
    Alert.alert("Nav", `Go to ${key} (placeholder)`);
  };

  const renderTx = ({ item }: { item: Tx }) => {
    const positive = item.amount > 0;
    return (
      <View style={styles.txRow}>
        <View
          style={[
            styles.txIcon,
            item.type === "deposit" ? styles.iconDeposit : styles.iconWithdraw,
          ]}
        >
          <MaterialIcons
            name={
              item.type === "deposit"
                ? "add"
                : item.type === "withdrawal"
                ? "remove"
                : "shopping_cart"
            }
            size={18}
            color={item.type === "deposit" ? "#16A34A" : "#EF4444"}
          />
        </View>
        <View style={styles.txBody}>
          <Text style={styles.txTitle}>{item.title}</Text>
          <Text style={styles.txSubtitle}>{item.subtitle}</Text>
        </View>
        <Text
          style={[
            styles.txAmount,
            positive ? styles.positive : styles.negative,
          ]}
        >
          {positive
            ? `+$${item.amount.toFixed(2)}`
            : `-$${Math.abs(item.amount).toFixed(2)}`}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => onNav("back")}
          style={styles.headerIcon}
        >
          <MaterialIcons name="arrow-back" size={22} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Wallet</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Balance Card */}
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.smallLabel}>Current Balance</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balance}>${balance.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.primaryBtn} onPress={onFund}>
            <Text style={styles.primaryBtnText}>Fund Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn} onPress={onWithdraw}>
            <Text style={styles.secondaryBtnText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* Filters */}
        <View style={styles.chips}>
          {(["All", "Deposits", "Withdrawals", "Purchases"] as const).map(
            (c) => (
              <TouchableOpacity
                key={c}
                style={[styles.chip, filter === c && styles.chipActive]}
                onPress={() => setFilter(c)}
              >
                <Text
                  style={[
                    styles.chipText,
                    filter === c && styles.chipTextActive,
                  ]}
                >
                  {c}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Transactions */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={filteredTx}
          keyExtractor={(t) => t.id}
          renderItem={renderTx}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 24 }}
        />
      </ScrollView>

      {/* Bottom nav (sticky) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => onNav("Home")}>
          <MaterialIcons name="home" size={22} color="#9CA3AF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNav("Discover")}
        >
          <MaterialIcons name="search" size={22} color="#9CA3AF" />
          <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onNav("Reels")}>
          <MaterialIcons name="video-library" size={22} color="#9CA3AF" />
          <Text style={styles.navText}>Reels</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNav("Wallet")}
        >
          <MaterialIcons
            name="account-balance-wallet"
            size={22}
            color="#1173d4"
          />
          <Text
            style={[styles.navText, { color: "#1173d4", fontWeight: "700" }]}
          >
            Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onNav("Profile")}
        >
          <MaterialIcons name="person" size={22} color="#9CA3AF" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* Styles */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#101922",
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    backgroundColor: "#101922",
  },
  headerIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    backgroundColor: "#101922",
  },
  card: {
    padding: 12,
    paddingHorizontal: 16,
  },
  cardInner: {
    backgroundColor: "#0f171b",
    borderRadius: 12,
    padding: 18,
    shadowColor: "#000",
    elevation: 2,
  },
  smallLabel: {
    color: "#94a3b8",
    fontSize: 14,
  },
  balanceRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  balance: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "800",
  },

  actionsRow: {
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#1173d4",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginRight: 6,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "700",
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: "#18232a",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginLeft: 6,
  },
  secondaryBtnText: {
    color: "#fff",
    fontWeight: "700",
  },

  chips: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  chip: {
    backgroundColor: "#0f171b",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: "#1173d4",
  },
  chipText: {
    color: "#cbd5e1",
    fontWeight: "600",
    fontSize: 13,
  },
  chipTextActive: {
    color: "#fff",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    paddingHorizontal: 12,
    marginTop: 8,
    marginBottom: 8,
  },

  txRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f171b",
    padding: 12,
    borderRadius: 12,
  },
  txIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: "rgba(255,255,255,0.03)",
  },
  iconDeposit: {
    backgroundColor: "rgba(16,185,129,0.08)",
  },
  iconWithdraw: {
    backgroundColor: "rgba(239,68,68,0.06)",
  },
  txBody: {
    flex: 1,
  },
  txTitle: {
    color: "#fff",
    fontWeight: "700",
  },
  txSubtitle: {
    color: "#94a3b8",
    fontSize: 12,
    marginTop: 4,
  },
  txAmount: {
    marginLeft: 12,
    fontWeight: "700",
  },
  positive: {
    color: "#10B981",
  },
  negative: {
    color: "#EF4444",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0f171b",
    borderTopWidth: 1,
    borderTopColor: "#0b1114",
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 4,
  },
});
