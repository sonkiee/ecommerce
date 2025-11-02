import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TrendsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const topSellers = [
    {
      id: "1",
      name: "Alex Doe",
      handle: "@alexdoe",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8FGU_LUBpVamZxWMM54Hp8VjMWYgzu7bd6kMsp0eLPCvch_-xPuHlNuMTVvF359Pjzn_PUuy0_vM1MemAYXGCgRgDA9i6eYCAWrEQUJFC1XWqIYS1_1mZmzI8W0-PH0Lu6cFsDK-ly-lwhHdYHFfFunxlpGpQR1d0FkayQ1BveeNaEAmM5_r1cEZa34hWCJPHueE8ys7dxNA-MlploSjrKGTQb-rTumYBppH5CZ3Pk3dDhpuB6Viyn_fTVGQz464Zq24mYY2Rsnyw",
    },
    {
      id: "2",
      name: "Jane Smith",
      handle: "@janesmith",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6sbZLJGfg0DMGhHgyVTSDknn9FBoy-_SVYaSy1AiHI2DQxjd8GEJueKWTI1mJiaLGuVC8VtAh7aHlIUL6sNE7ktduNCJxoTM7ClZMwoJIj6r6ps5nHkRU6z63SL1ysOzVb6PxXhuo1i1TX6shYO4L0UmbmFWkRSt1Kb8qSFYHyh5kFk7rd9drU6jlfxxLpFJO4h3u9H_DwRha0gmf546T_yOHN6F9-klKocroUmGeunCV6rl6Qz_JD3pp4j7BIpxlagmwaUJfAdlc",
    },
    {
      id: "3",
      name: "Mia Wong",
      handle: "@miawong",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEu_jb1qEmMkVdxUR4iKvNJ2qkj-g71o_XyiXcPxmRcYR1xu8QjxtXA_PIiQ3oOmKsL9UP0ElIOAi_TVILxZCbjfUrMy54QG74cCHn35ZQfy8DlLb0prtwhK3R421SU2Ny6osHfL1QHi_shJyWlemcgujVsZCbBuXvl3-RTK0SpRCo5boamsF7hnHeZRVt-oWVG9fJcB2ZTFnvuWIIC-GenffjMQ8YGjqGBGcxMQRpLe6vXuGjj8ELxHxvBdSQBUMj4898y8NQEHbR",
    },
    {
      id: "4",
      name: "Chris Lee",
      handle: "@chrislee",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuACh3uQcDvcjDs-pQEH0aZs6s2l28MkSCOm2fTg9ZOMpmO3X30aCPLRmhFjVG5JnmPJlFsR83FfqcgfPQF3XgDAuLVdwdFvEXpGSx-C66Cm9MKLsYHvJ30NRj_-3lHEiNHuf8pcvUpf2NARqzD1QvwWufyLcGMJhzJDr-tqb-mIRIOGa6Wx6YJlqgqb-2h169WQAg1KetvO_LbsWQC-V1wGo9rPZe7x--GgL7tQZTnxw1K89sei21BdqCNrSGCxq6GNjTPF7gC6LimU",
    },
    {
      id: "5",
      name: "Samira Khan",
      handle: "@samirak",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA7IFwP9989wGXLUoNVZFKueTxxBQcPId859-jSzly2gu_ZKIKVkBRufBWA-VcI5CwS5e0MS0vdFvHu7eGN5lTUOGIp1sDwZKqQxB91Wx4BCeVYwXnc5Fd_FV2j3C4cX9ZDC1Np4smjb-V7OKK1wip8d95Q_dGnUl-yQDgrvvs9M6yJ64bSdmBxrfsBlXDVR17WbY6O35OgNStTOgTOT4XsyoU2GQAC67HPhx9g4AYl6IBvBjdKoeKEbDr45boNpqLBl6wCFEfBB_Qa",
    },
  ];

  const products = [
    {
      id: "1",
      name: "Urban Backpack",
      price: "$79.99",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCh2UE05AamnMmPoniyZQQko7obe8eshKbY3TOI154RfAmnd6zfMKQ_wgKAEi9snqGDPZIcOgDnHnqDAMU6O3eiWIbMTzFoa_1biwxDNXqHy-MzRxNQOr_LABQ8T5xjwZqVjjbXhVgoRT77Dqo1jK7DyLjhNkhhTxkGFHkaGTdomgzHlB-BT-8XA7mOlhSJo8H-HmzXECWvXXnOBcjGpM-ZwsG6Z4YDcDLkfZRHkjRaiMEzB_Yu7xbzYkl9jj89c4Gf2d2SVfXVKx5r",
    },
    {
      id: "2",
      name: "Wireless Headphones",
      price: "$129.99",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuANWl8UOr59ODkQjZtQJdHrdWCLfvMLsnbskEFp6MvgK3Udvh4nQCsdLQ7X2dteepxR85GSYhuymnM8A-nCiRY6OgD9T7OqKgLP3FNvN4kpaAAIV2IIADpJy0f9ZM-f9nABRIGoyIfAN1aOV8e5G8hI-I2C6UD-21aG-ZbW8_QYtBD8QSW7Q-SyqY2Bz_VtaV0Dgr7_169E4hY2YgqY_gePBwWyOqiC9iUeTYoizaYx5LL73QW_BwwfPfq8SC51Zxr30FWUuopvwc3d",
    },
  ];

  const hashtags = [
    "#DIYCrafts",
    "#SummerVibes",
    "#HealthyLiving",
    "#FashionFinds",
    "#TechGadgets",
    "#HomeDecor",
  ];

  const renderSellerItem = ({ item }: any) => (
    <TouchableOpacity style={styles.sellerCard}>
      <Image source={{ uri: item.image }} style={styles.sellerImage} />
      <View style={styles.sellerInfo}>
        <Text style={styles.sellerName}>{item.name}</Text>
        <Text style={styles.sellerHandle}>{item.handle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trends</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchIconContainer}>
              <Text style={styles.searchIcon}>🔍</Text>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for trends, products, or sellers"
              placeholderTextColor="#b89d9f"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Top Sellers Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Sellers</Text>
          <FlatList
            horizontal
            data={topSellers}
            renderItem={renderSellerItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sellersList}
          />
        </View>

        {/* Top Selling Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Selling Products</Text>
          <View style={styles.productsGrid}>
            {products.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                  <TouchableOpacity style={styles.shopButton}>
                    <Text style={styles.shopButtonText}>Shop Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Trending Hashtags Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Hashtags</Text>
          <View style={styles.hashtagsContainer}>
            {hashtags.map((hashtag, index) => (
              <TouchableOpacity key={index} style={styles.hashtagPill}>
                <Text style={styles.hashtagText}>{hashtag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bottom Spacer */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>🏠</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navLabel}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
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
  backButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 24,
    color: "#fff",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  headerSpacer: {
    width: 48,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#382929",
    borderRadius: 8,
    height: 48,
  },
  searchIconContainer: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  searchIcon: {
    fontSize: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    paddingRight: 16,
    paddingLeft: 8,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sellersList: {
    paddingHorizontal: 16,
    gap: 24,
  },
  sellerCard: {
    alignItems: "center",
    width: 88,
  },
  sellerImage: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginBottom: 12,
  },
  sellerInfo: {
    alignItems: "center",
  },
  sellerName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
  sellerHandle: {
    fontSize: 12,
    color: "#b89d9f",
    textAlign: "center",
    marginTop: 2,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 16,
  },
  productCard: {
    width: "47%",
    backgroundColor: "#382929",
    borderRadius: 12,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    aspectRatio: 1,
  },
  productInfo: {
    padding: 12,
    gap: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d1d5db",
  },
  shopButton: {
    backgroundColor: "#ea2a33",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  shopButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  hashtagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 12,
  },
  hashtagPill: {
    backgroundColor: "rgba(234, 42, 51, 0.2)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 9999,
  },
  hashtagText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ea2a33",
  },
  bottomSpacer: {
    height: 80,
  },
  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 64,
    borderTopWidth: 1,
    borderTopColor: "#374151",
    backgroundColor: "#181111",
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navIcon: {
    fontSize: 24,
  },
  navLabel: {
    fontSize: 12,
    color: "#9ca3af",
  },
  activeNavIcon: {
    color: "#ea2a33",
  },
  activeNavLabel: {
    color: "#ea2a33",
    fontWeight: "bold",
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#ea2a33",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -32,
  },
  addIcon: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
});
