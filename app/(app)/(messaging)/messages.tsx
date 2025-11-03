import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const MessagesScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark] = useState(true);

  const conversations = [
    {
      id: 1,
      name: "Maya",
      message: "Hey, are you free this weekend?",
      time: "10:45 AM",
      unreadCount: 2,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBDH5dpnM2rvWyZejzlNvOUx9oXH8nlQkBf3og3ZcIA3HcRDmHXW33lgaF60jfCJwdFnNupKQuIi8IvXQo9Y4GkchFfLX6MdPGTM-hIiWrB4uEl1BEZR34yj1rOrSmI_dEiODuunhm6OpOP1PG494qo06yYWFoUjjdo1IKUyRPkYhX-6sMQHJWD03QZ5CdShWV3XJ_dq-MreVI7XZMUO8DTiDksNwZqxLf5o2Z0QuULilfaIeeFVSNFmpv16mLov8NRmpPbn232UIFF",
    },
    {
      id: 2,
      name: "Alex",
      message: "Sounds good! See you then.",
      time: "9:30 AM",
      unreadCount: 0,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD2rQ8JHcPhDPij_Vs5PzB9C7E2q93qmYTkuTmAUtjK8vgOa5_zHJRyk7jLtBUAlzT4cWLwBYoOvtQtvZmWx2QM9uaw9OsWLnT1vs-XWqo6Rc7TQvjZDLVggpA7Y6ZtL_lL1TXdD35UQgAhxlj8ZsdRGulEzbLujVZv1_xxbI0BL26uSHBNNebBrH_K2QRdq1QrgKk0gAzQUN30sau_2nx9AnnkOQU3dvSNFRkamf0tra0b9RQqGBN3Tt3aCXoQadb1mhOq9Bp6xe3F",
    },
    {
      id: 3,
      name: "Chloe",
      message: "Just sent you the file!",
      time: "Yesterday",
      unreadCount: 0,
      hasIndicator: true,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLEbdJFuTKpxmxpP1zIeztD99NMajI3_SAZvvM2xj2CJFpr4Xzxb4viYuiVwwre90SMLHkQwT6cNujtEiqCkaYBS1R7eieCmDD2l3s-3hMekvkyVbCxTPzLkubX71xrDjZYBekNyLJ0hFxtHGhp1Rtj0LgZnpOiwRu4uzVZQXOxQ9U_aWF-nV3WwhDH7gJX7Uc97LkHlDIMdDlJVBhWHnTmhfM9Jv-IoTysg9kA7La18JeWWK06pUxowXHS8bO0nqynwsfg7oVO3lV",
    },
    {
      id: 4,
      name: "Ben",
      message: "Let's catch up tomorrow.",
      time: "Wednesday",
      unreadCount: 0,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD4gJflpGwW7Szdp9OJpMaFTc3xA1c35ulnkSy7xhLfIAW3dLwOI32jG3CumKiHNaVNb_hZoiOfAlWn9owuVP7Tcih2ENaCapQMBRQqkMyuYJavRrjsgANWAvpc5yI65fgeaS-7zd6pFyQVm5tRYOvJNUOTHVIY9hCZRTWjEAyw78w9fKeHhqq852ZyIt2AoVUrYJ4MYtD6XFd8YrLNuF3VlW_hlyInAz8HZQoDdBU_W_5uk-CXYx6hqFMhFykND6b1wyzYfOwvf_3K",
    },
    {
      id: 5,
      name: "Sarah",
      message: "Got it, thanks!",
      time: "10/12/2023",
      unreadCount: 0,
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBbSjWHy0gXSP_kBZdEi6COoMP1SymrZLgA-Y7VPwoq-dRA9VeDqxgsOUw1tIIriD7U-WOWUqW7WLH68V1FPi9RiL8gDMlZdZUilW00y3aN8r2lf3yebuMroZEqjlp5wWZZkbzXUm2FcySAIM_AGyyvN5VruZBVGA6BWWTSJOQ3Zxm1V_F9msD8u8U4Wen5wOiOSZ1XyFqQAnQwoy73np3KRerkODq6ZjlLwIJyi-e4-gSGFHlS3eFet8XsWBFaRWkjdm6zVy2uxTMY",
    },
  ];

  const colors = {
    primary: "#ea2a33",
    bgLight: "#f8f6f6",
    bgDark: "#211111",
    textLight: "#000000",
    textDark: "#ffffff",
    textSecondaryLight: "#71717a",
    textSecondaryDark: "#a1a1aa",
    searchBgLight: "#f4f4f5",
    searchBgDark: "#27272a",
  };

  const theme = {
    bg: isDark ? colors.bgDark : colors.bgLight,
    text: isDark ? colors.textDark : colors.textLight,
    textSecondary: isDark
      ? colors.textSecondaryDark
      : colors.textSecondaryLight,
    searchBg: isDark ? colors.searchBgDark : colors.searchBgLight,
  };

  const ConversationItem = ({ conversation }) => (
    <TouchableOpacity style={styles.conversationItem} activeOpacity={0.7}>
      <Image source={{ uri: conversation.avatar }} style={styles.avatar} />
      <View style={styles.conversationContent}>
        <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
          {conversation.name}
        </Text>
        <Text
          style={[styles.message, { color: theme.textSecondary }]}
          numberOfLines={1}
        >
          {conversation.message}
        </Text>
      </View>
      <View style={styles.metaContainer}>
        <Text style={[styles.time, { color: theme.textSecondary }]}>
          {conversation.time}
        </Text>
        {conversation.unreadCount > 0 && (
          <View style={[styles.badge, { backgroundColor: colors.primary }]}>
            <Text style={styles.badgeText}>{conversation.unreadCount}</Text>
          </View>
        )}
        {conversation.hasIndicator && !conversation.unreadCount && (
          <View
            style={[styles.indicator, { backgroundColor: colors.primary }]}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Messages
        </Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={[styles.addIcon, { color: theme.text }]}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchBar, { backgroundColor: theme.searchBg }]}>
          <Text style={[styles.searchIcon, { color: theme.textSecondary }]}>
            🔍
          </Text>
          <TextInput
            style={[styles.searchInput, { color: theme.text }]}
            placeholder="Search conversations..."
            placeholderTextColor={theme.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Conversations List */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {conversations.map((conversation) => (
          <ConversationItem key={conversation.id} conversation={conversation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  addButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    fontSize: 28,
    fontWeight: "400",
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 16,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  scrollView: {
    flex: 1,
  },
  conversationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 72,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  conversationContent: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
  },
  metaContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 4,
  },
  time: {
    fontSize: 12,
  },
  badge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default MessagesScreen;
