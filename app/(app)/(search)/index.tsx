import { MaterialIcons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type Product = {
  id: string;
  name: string;
  seller: string;
  price: number;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  featured?: boolean;
  createdAt?: string; // ISO date for sorting demo
};

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Floral Sundress",
    seller: "@seller_username",
    price: 49.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxCx4EubTOEwrfsRcJ9q3YKrTOYzW7bDi4Z_vQCE_IGNgiv0u9hwZ7i2JHjMa7vRvgQKkmmVGFRE2GVkKQDqbRdYY3JjFzfzc4_PbpxzMpf3JWBtdKGD3uSnICIjVf8hSNerG4Cr9SHdwEYAcbrr71Dci8evki0YqNE91bI8T-OXYvJdzKHThMQeDAnPuYwqxvv5Yk1uYhQyqGM2lf0ij84SEeM6zrEbauN5Cd7vE_bFigE0iY5wpKAd5_ksGSjMO0Yr9gdKPNqNMN",
    likes: 12300,
    comments: 2100,
    shares: 1500,
    createdAt: "2025-10-28",
  },
  {
    id: "2",
    name: "Striped Maxi Dress",
    seller: "@tech_guru",
    price: 59.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDihONhpdHxOGycxfjSYOFEMAJHhvw_h-C6EZPL1-evj7lcl2f5816_ZhEvkLqXWyaKCfIATG3AewvZwElULqRSHUJPurW9OIgHMo12wvq9LF3lHWyH-U0xXohLuntuweuHbmg23LBJZRTJm6fyxpufVPd1cngcW4j3Y4TsbhN4wl_EVmpZNfu92M5s7ofMkJ8q4ILKK4kJ7-YvWdbjpalluShgvt0bW5ErRpG2pb-CRj2nCrMnebBisjkVR0o1_c-2QZXJfd8PTQTA",
    likes: 10100,
    comments: 1800,
    shares: 1200,
    createdAt: "2025-11-01",
  },
  {
    id: "3",
    name: "White Cotton Dress",
    seller: "@luxury_finds",
    price: 39.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKpB17dMQ-w0Q0NvUxIovaEpxC26vdsUBL5HRlat8ABi1A47YoPaJs33uY_OOrZzdO93FXvQU1MhhzUnM6-UAKDGPx1dTVs0oA2ogTK2MWX98AyLXa5oFwF3fMfuh_vwH1OwCmgLdvO9pQDk2knGI8UJKTBUYAV1xL8Nwm38uus_PfzmDwInfWwcaERtKcF_qkiLC13DNWDp3kPBamnRPn2UMOVdFzw-cLNzFxnZgbfnjSTWnQmOPXeK0mLy2jR1fc8ML9rAABCas2",
    likes: 8700,
    comments: 987,
    shares: 750,
    createdAt: "2025-09-10",
  },
  {
    id: "4",
    name: "Blue Denim Dress",
    seller: "@active_life",
    price: 69.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7EtPM68YRWagQs0hC4A0Z7FBDjhHz8WkcbcHP_ge02JqEHNMCiAqk2BxFimLraqw0im-jhBjPBYBGbjy8CduY_lZQxATGTWI08k_kjA1iyj57xH2UlZyPVlLhU3t5rCBlSIKVIx9G_wMJHDCnv6u9pOLRUbJgQlRlE5pHSb4o8gOqUQ_mQVwXluJB51eg787B6pP9MsJ-y1TmBjf7ZaxSMO3tGeQ2FmtRVn10_j9ZZuegeGrT4AsyOnyAP1qhqLi4T5yGGXhhfg0n",
    likes: 15500,
    comments: 3200,
    shares: 2800,
    createdAt: "2025-10-05",
  },
  {
    id: "5",
    name: "Yellow Off-Shoulder Dress",
    seller: "@bright_style",
    price: 45.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8bG6ANg2yvMMOZTxkQ59u8dSUpndbfzbeaGEmrY4_eVEQgDwY-9ltgVJWRa8CS3rB6ACjXzzs250pED0dn5QHg33NFsXBVlwGsmmaweDPisEhlbC0rwNJ2DBtrfi3pz1lnNjFJdVFSyz2T7kueDqASUCpxpuLeKmGDVavVjV_MBUcLwPJxddWPLeKeBT33hLQmFPbeK-E1AXQt2T6aIvZ4ahWiU5GYnlbt1feQ1flryyv5AOOc_AH3Yo1urTHALipG_piLOBNqm-0",
    likes: 9200,
    comments: 1100,
    shares: 950,
    createdAt: "2025-10-12",
  },
  {
    id: "6",
    name: "Green Linen Dress",
    seller: "@eco_style",
    price: 54.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCy855utfXmCt89Qu7evieswSVfi4QnoZmmZ6HdKxaJ5hAdTIK63EymPK7KhMCyHKTPzsCAQECPGJbMr3dXNHpIDgYL0P8xSYhkb4VruanZGdIMuBpw4mQwB0TY_P3RgPjujFNll_Yvysovnw8w9NahAGKz1iiMtUlGFDKKMqPgcGexPHyeAwedVWMxFGZgmGJiKrwxby1oV2nLauBMFXlf-3vZCXgqqF7ymGgYbLY5pV8iXwYaaWRoiOHHxo3pFbmu8u5QVNZInXRR",
    likes: 7800,
    comments: 800,
    shares: 620,
    createdAt: "2025-08-30",
  },
];

export default function SearchResultsScreen() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [query, setQuery] = useState("Summer dresses");
  const [sortBy, setSortBy] = useState<
    "engagement" | "newest" | "price_low" | "price_high"
  >("engagement");
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [cart, setCart] = useState<Record<string, number>>({});
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  // Filter & sort derived list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.seller.toLowerCase().includes(q) ||
        p.price.toString().includes(q)
    );

    // filter by chip (category simulation)
    if (activeChip && activeChip !== "All") {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(activeChip.toLowerCase())
      );
    }

    // sorting
    switch (sortBy) {
      case "engagement":
        list = list.sort((a, b) => b.likes - a.likes);
        break;
      case "newest":
        list = list.sort(
          (a, b) =>
            (new Date(b.createdAt || "").getTime() || 0) -
            (new Date(a.createdAt || "").getTime() || 0)
        );
        break;
      case "price_low":
        list = list.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        list = list.sort((a, b) => b.price - a.price);
        break;
    }

    return list;
  }, [products, query, sortBy, activeChip]);

  const toggleFavorite = (id: string) => {
    setFavorites((s) => ({ ...s, [id]: !s[id] }));
  };

  const addToCart = (id: string) => {
    setCart((s) => ({ ...s, [id]: (s[id] || 0) + 1 }));
    Alert.alert("Cart", "Added to cart");
  };

  const loadMore = async () => {
    setLoadingMore(true);
    // simulated network / pagination
    setTimeout(() => {
      const next = page + 1;
      const more: Product[] = initialProducts.map((p, idx) => ({
        ...p,
        id: `${p.id}-p${next}`,
        name: p.name + (next === 2 ? " (More)" : ` (Pg ${next})`),
      }));
      setProducts((prev) => [...prev, ...more]);
      setPage(next);
      setLoadingMore(false);
    }, 900);
  };

  const renderProduct = ({ item }: { item: Product }) => {
    return (
      <View style={styles.card}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.cardImage}
          imageStyle={{ borderRadius: 12 }}
        >
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(item.id)}
            activeOpacity={0.8}
          >
            <MaterialIcons
              name={favorites[item.id] ? "favorite" : "favorite-border"}
              size={20}
              color={favorites[item.id] ? "#ea2a33" : "#fff"}
            />
          </TouchableOpacity>

          {/* engagement stack bottom-left */}
          <View style={styles.engagement}>
            <View style={styles.engRow}>
              <MaterialIcons name="favorite" size={14} color="#fff" />
              <Text style={styles.engText}>{formatCount(item.likes)}</Text>
            </View>
            <View style={styles.engRow}>
              <MaterialIcons name="chat_bubble" size={14} color="#fff" />
              <Text style={styles.engText}>{formatCount(item.comments)}</Text>
            </View>
            <View style={styles.engRow}>
              <MaterialIcons name="share" size={14} color="#fff" />
              <Text style={styles.engText}>{formatCount(item.shares)}</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.cardBody}>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => addToCart(item.id)}
            >
              <MaterialIcons name="shopping_cart" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconWrap}
          onPress={() => {
            /* back action */
          }}
        >
          <MaterialIcons name="arrow_back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Results</Text>
        <View style={{ width: 36 }} />
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <View style={styles.searchPrefix}>
            <MaterialIcons name="search" size={22} color="#666" />
          </View>
          <TextInput
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder="Search products..."
            placeholderTextColor="#999"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={() => setQuery("")}
          >
            <MaterialIcons name="cancel" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.chipsRow}>
        <FlatList
          data={[
            { key: "Sort", icon: "swap_vert", label: "Sort by" },
            {
              key: "eng",
              label: "Engagement",
              active: sortBy === "engagement",
            },
            { key: "price", label: "Price" },
            { key: "color", label: "Color" },
            { key: "size", label: "Size" },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(it) => it.key}
          renderItem={({ item }) => {
            const active = item.key === "eng" && sortBy === "engagement";
            return (
              <TouchableOpacity
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => {
                  if (item.key === "eng") setSortBy("engagement");
                  else if (item.key === "price")
                    setSortBy((s) =>
                      s === "price_low" ? "price_high" : "price_low"
                    );
                  else if (item.key === "Sort") setSortBy("newest");
                  else setActiveChip(item.label);
                }}
              >
                {item.icon ? (
                  <MaterialIcons
                    name={item.icon as any}
                    size={20}
                    color={
                      active ? "#fff" : item.key === "Sort" ? "#111" : "#fff"
                    }
                  />
                ) : null}
                <Text
                  style={[styles.chipText, active && styles.chipTextActive]}
                >
                  {item.label}
                </Text>
                {item.key === "eng" ? (
                  <MaterialIcons name="expand_more" size={18} color="#fff" />
                ) : null}
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No results</Text>
          </View>
        )}
      />

      <View style={styles.loadMoreWrap}>
        <TouchableOpacity
          style={styles.loadMoreBtn}
          onPress={loadMore}
          disabled={loadingMore}
        >
          {loadingMore ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loadMoreText}>Load More</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ---------- Helpers & Styles ---------- */

function formatCount(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#211111" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 10,
    justifyContent: "space-between",
    backgroundColor: "#211111",
  },
  iconWrap: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "700" },

  searchRow: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#211111",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    borderRadius: 10,
    overflow: "hidden",
  },
  searchPrefix: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
  },
  searchInput: {
    flex: 1,
    height: 44,
    color: "#fff",
    paddingHorizontal: 8,
    fontSize: 15,
  },
  clearBtn: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  chipsRow: {
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 6,
    backgroundColor: "#211111",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 10,
  },
  chipActive: {
    backgroundColor: "#ea2a33",
  },
  chipText: {
    color: "#fff",
    marginLeft: 6,
    marginRight: 6,
    fontSize: 13,
  },
  chipTextActive: {
    color: "#fff",
    fontWeight: "700",
  },

  listContent: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 120,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 14,
  },
  card: {
    width: (width - 36) / 2,
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    overflow: "hidden",
  },
  cardImage: {
    height: ((width - 36) / 2) * (4 / 3), // approx aspect 3/4
    justifyContent: "flex-end",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.35)",
    padding: 6,
    borderRadius: 18,
  },
  engagement: {
    position: "absolute",
    left: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  engRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  engText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 11,
    fontWeight: "600",
  },

  cardBody: {
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  cardFooter: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: { color: "#D1D1D6", fontSize: 13 },
  cartButton: {
    backgroundColor: "#ea2a33",
    padding: 8,
    borderRadius: 8,
  },

  empty: { padding: 40, alignItems: "center" },
  emptyText: { color: "#999" },

  loadMoreWrap: {
    position: "absolute",
    bottom: 14,
    left: 16,
    right: 16,
    alignItems: "center",
  },
  loadMoreBtn: {
    backgroundColor: "#ea2a33",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 999,
    width: "100%",
    alignItems: "center",
  },
  loadMoreText: { color: "#fff", fontWeight: "700" },
});
