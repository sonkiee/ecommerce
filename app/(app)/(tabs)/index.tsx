import HomeCard from "@/components/home-card";
import { colors } from "@/constants";
import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const things = [
  {
    id: 1,
    title: "Sunset at the Beach",
    description: "Golden hour vibes and salty air 🌅",
    creator: "Emeka Designs",
    price: "$89",
    likes: 1200,
    comments: 230,
    shares: 54,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Urban Explorer",
    description: "Finding beauty in the city’s chaos 🏙️",
    creator: "Michael Styles",
    price: "$150",
    likes: 980,
    comments: 120,
    shares: 30,
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
  },
  {
    id: 3,
    title: "Peaceful Escape",
    description: "Just me and the mountains 🏔️",
    creator: "Joseph Tailor",
    price: "$70",
    likes: 2040,
    comments: 440,
    shares: 120,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({
    itemVisiblePercentThreshold: 80,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={things}
        renderItem={({ item }) => <HomeCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        contentContainerStyle={{ backgroundColor: "#000" }}
      />

      {/* Page Indicator */}
      <View style={[styles.indicatorContainer, { top: height / 2 - 50 }]}>
        {things.map((_, i) => (
          <View
            key={i}
            style={[styles.indicator, { opacity: i === activeIndex ? 1 : 0.3 }]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_dark,
  },
  indicatorContainer: {
    position: "absolute",
    right: 10,
    alignItems: "center",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginVertical: 6,
  },
});
