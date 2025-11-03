import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DirectMessageScreen = () => {
  const [message, setMessage] = useState("");
  const [isDark] = useState(true);

  const messages = [
    {
      id: 1,
      sender: "vendor",
      senderName: "E-Shop",
      text: "Hi there! Thanks for your interest in our product. Let me know if you have any questions.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCsZEezCEUMAuoUzeViPsCA5g0n811nkhZXe5zqPgs82WPTpP0XAz4G3PS7gkJwG61LbWKF6aCzGT2nxn-PRJ1vtnzaWQ4vg6UEF9YREo-P014Jx-_jXbvqZzzA-Eqga88kJYSvAOH8o5iT--vBMfzYOGPrzGNVKkEbcPPioLMxMhCWxQxj8fBVLwmr0BRG98wxOsQvGkp7k6Fs4FBzebSxXqcUEXb0cq4wVWO8-DYtXtwC-3rLHppkKN99WB4ZUOghj8vrCnmo14hM",
    },
    {
      id: 2,
      sender: "user",
      senderName: "You",
      text: "Hi! I was wondering if this product is available in a different color?",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCNQH3Bsd_wThGx57HRD-HPLtO44JMxTn8QNNrcPqCreU2N26t45Yl6w7_mbqZ9aDKeYb0vp_fyk81Sx7Kam-wfvsKyWi7pPdjwg0NUjHhTxfzF4b25kQcgPVQ6zSKIcDTsNuPtn0Vjo4l4YIHgstSz7m3-AuwzB2edOpLGts0yxxuW4qZ3WEEqZdM0JZOKTrqbMfssuth7rGYeOc0QGkKJkmYszEil9zk8sewaiL0V4rYa406gdZDeCZ_oiNPtlQdF2NR92H2ZZDX9",
    },
    {
      id: 3,
      sender: "vendor",
      senderName: "E-Shop",
      text: "We have it in black, white, and red. Which color would you like?",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCR0bue13lqwLa48YIiuPJCGLMKH2sFu4gG5bUgxcQDgWeWpB7X_tyl_tZfmEtT6bv2wPBqPnUvX6iDjEgebJWwrt3CxN08NCB_WMLEqU31p7YPMMYYcSdbrx2U0tRTiU6C_-VeQvZAkvcvwyZTiB4k7Yp0CGZmydGPm1MS4Ji0A4WC3zhMl7uAPNhAFe-GI_aq5GwODEXHZDcCZdCK9N26_GZtNxevakkW5K3TSkxj2QUfWVPnQr1FedG8lc11zCw3dlZnuKINsHd6",
      hasProduct: true,
      product: {
        name: "Classic White T-Shirt",
        price: "$25.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDhrdsXIYgBilc9FzbgVEzoxqkoYGPTVDJ6_nyRedacp7QZdx5uvUPerfACQ0RDonjzEIR18BKP3uhqNo0UkW5Wi8ewHRpfR5GG_LsGjlwvb6G9DqE27Xn0zUtmejPyRbxqHFnC-socF-bgLEWv9496vwNZVeu36H4XMoDMHgphUmpTBiBGUnZMnSSa2V4fSBp108k5i520ttWXBYoGcszNqJIbplcRBt8y3fEUiY3fyxtBIYeNNEN1971dTckYDDfUElOlq-hXGj1y",
      },
      seen: true,
    },
  ];

  const colors = {
    primary: "#ea2a33",
    bgLight: "#f8f6f6",
    bgDark: "#181111",
    textLight: "#000000",
    textDark: "#ffffff",
    messageBgLight: "#e5e7eb",
    messageBgDark: "#382929",
    productBgLight: "#f3f4f6",
    productBgDark: "#2a1a1a",
    borderLight: "#e5e7eb",
    borderDark: "#1f2937",
    labelLight: "#6b7280",
    labelDark: "#b89d9f",
  };

  const theme = {
    bg: isDark ? colors.bgDark : colors.bgLight,
    text: isDark ? colors.textDark : colors.textLight,
    messageBg: isDark ? colors.messageBgDark : colors.messageBgLight,
    productBg: isDark ? colors.productBgDark : colors.productBgLight,
    border: isDark ? colors.borderDark : colors.borderLight,
    label: isDark ? colors.labelDark : colors.labelLight,
  };

  const MessageBubble = ({ msg }) => {
    const isUser = msg.sender === "user";

    return (
      <View
        style={[styles.messageContainer, isUser && styles.messageContainerUser]}
      >
        {!isUser && (
          <Image source={{ uri: msg.avatar }} style={styles.messageAvatar} />
        )}
        <View
          style={[styles.messageContent, isUser && styles.messageContentUser]}
        >
          <Text
            style={[
              styles.senderLabel,
              { color: theme.label },
              isUser && styles.senderLabelRight,
            ]}
          >
            {msg.senderName}
          </Text>
          <View
            style={[
              styles.messageBubble,
              isUser
                ? styles.messageBubbleUser
                : { backgroundColor: theme.messageBg },
            ]}
          >
            <Text
              style={[styles.messageText, isUser && styles.messageTextUser]}
            >
              {msg.text}
            </Text>
          </View>
          {msg.hasProduct && (
            <View
              style={[styles.productCard, { backgroundColor: theme.productBg }]}
            >
              <View style={styles.productContent}>
                <View style={styles.productInfo}>
                  <Text style={[styles.productName, { color: theme.text }]}>
                    {msg.product.name}
                  </Text>
                  <Text style={[styles.productPrice, { color: theme.label }]}>
                    {msg.product.price}
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.productButton,
                      { backgroundColor: theme.messageBg },
                    ]}
                  >
                    <Text
                      style={[styles.productButtonText, { color: theme.text }]}
                    >
                      View Product
                    </Text>
                  </TouchableOpacity>
                </View>
                <Image
                  source={{ uri: msg.product.image }}
                  style={styles.productImage}
                />
              </View>
            </View>
          )}
          {msg.seen && <Text style={styles.seenText}>Seen</Text>}
        </View>
        {isUser && (
          <Image source={{ uri: msg.avatar }} style={styles.messageAvatar} />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={[styles.headerIcon, { color: theme.text }]}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDBZC7p6TQV87G44W3nYf3DzaY6zpEjFIcPdbED2fO36GnHawv5LGqHIl8rzN3JPFKocOjHKvsHCKiZYDBYAAiP4-uFbDM4aAk2l11DZsuTvk_wAoJUESACRPurYSIw8TlO7ttIeQJouQF5SJG7eg_2TwOGFA7h0MmLY1TYNOhVk-FZnNiBQOu-zrqD1hlGxCY44Tr14tp_VuA7g2YjclaWAm_deonGrN3FTzWenZQu1y8R7pT33t1ylcPDdmdp9KBROIRBhnxoteu",
            }}
            style={styles.headerAvatar}
          />
          <Text style={[styles.headerTitle, { color: theme.text }]}>
            E-Shop
          </Text>
        </View>
        <View style={styles.headerSpacer} />
        <TouchableOpacity style={styles.headerButton}>
          <Text style={[styles.headerIcon, { color: theme.text }]}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
        >
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
        </ScrollView>

        {/* Input */}
        <View
          style={[
            styles.inputContainer,
            { borderTopColor: theme.border, backgroundColor: theme.bg },
          ]}
        >
          <TouchableOpacity style={styles.addButton}>
            <Text style={[styles.addButtonIcon, { color: theme.label }]}>
              +
            </Text>
          </TouchableOpacity>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: theme.messageBg, color: theme.text },
            ]}
            placeholder="Type your message..."
            placeholderTextColor={theme.label}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendIcon}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    fontSize: 24,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
  },
  headerSpacer: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  messageContainerUser: {
    flexDirection: "row-reverse",
  },
  messageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messageContent: {
    flex: 1,
    marginHorizontal: 12,
  },
  messageContentUser: {
    alignItems: "flex-end",
  },
  senderLabel: {
    fontSize: 13,
    marginBottom: 4,
  },
  senderLabelRight: {
    textAlign: "right",
  },
  messageBubble: {
    maxWidth: "85%",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageBubbleUser: {
    backgroundColor: "#ea2a33",
    alignSelf: "flex-end",
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  messageTextUser: {
    color: "#ffffff",
  },
  productCard: {
    marginTop: 8,
    borderRadius: 12,
    padding: 16,
    maxWidth: "85%",
  },
  productContent: {
    flexDirection: "row",
    gap: 16,
  },
  productInfo: {
    flex: 2,
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 12,
  },
  productButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  productButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },
  productImage: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    minWidth: 80,
  },
  seenText: {
    fontSize: 12,
    color: "#9ca3af",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    gap: 8,
  },
  addButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonIcon: {
    fontSize: 28,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ea2a33",
    justifyContent: "center",
    alignItems: "center",
  },
  sendIcon: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default DirectMessageScreen;
