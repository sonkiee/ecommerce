import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const RelistItemScreen = () => {
  const images = [
    {
      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCWewbHQItEImgf09S74DKIXa24hvc85D5cRJ97aMjZmcSyalzZMFrBkEabj8-Yg_AwWiwfGBR68XxxURRf5uPpZ1lScmAIlv_TthblBNOMZ71H570-P0sPl_0RYJV1JBSLb2mpLEodT4eqt6q7rXofBtrp-kkk0_E1JyHiPPQyCy1WzCfYWeN0pzbF6Y5dKRsUk09Niy16Wf32S9DakQFFO2emBSXtyUAVzafgRlPPR9aCDKBr2e1QaseGAoRUZq33lgS13yZC-rH",
      label: "Front View",
      selected: true,
    },
    {
      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW12CKWe-_9aXZgdq4yYMui6_iYkh7Ksgj-orbxJ5EAysgB1iwCBfPbl9pJjxN6eJMa2Y8mqTTIXuQUWmK0WDQNb5eGIshS0sfi1O--rljVMsfKkl2VJF35sWYHUkz0BBhxTOV2FR3sHz4jbf-oyx3TDSK4RSL-rc6MLpeUCDjPnYUsVAh8lXA7XeteaPSgLNbMdb9knPyWZ7cnD3owtFovIv3tAYw-kEUQETV9cQK-7CUscm8F-5tGC0JbnqpuDLZx3qn0tsgRYRo",
      label: "Fabric Detail",
    },
    {
      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6ZHRP4I-g1DCpeZDEdZbKF8JiXBq0HeUiSTtgzEJrgHiriY3YwfZ9LvGo_uXC94foN7js8-XvD2YS1kRxsdNMBbwnOsyIJnB6QVyUj7y3sUEZKSRSkOBAG1yWl6QzCRaQDfHR7dXOVKDexLVUWW66Vka9qyqBsQQcv7UmEtjZ8cIx_AZ7VtBP-fFynsmU218D497C_q3_xSpeSBGYSnQU7Jf_jnVHSFQWkzxBemHbMv0VhU_W-ZXchnf83BswUuXjfC2TnPnkf3Kl",
      label: "Back View",
    },
    {
      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDNJptNbcwXdFeXVJf0FomJ2shcF9CkBHny9prFnkywdumPf7EdrvNUc1rD2s-yqyEfp-iBBId_t6e9gc1Mytukl9yOChG21GNQLQmGUoclYngAa8QKkNYz2Sr_q3cVAzh_YkcuFxFFuQFIXMZFebim9NxqrXTLXR_cvlVb-QkCd84-xySJftQ2nj3eExSKs2QsBTB7-bhFxe4cXD2UOEBFkL9lgZkZutktDeVgXxIXAFRvUV18TTE-A_u8_2yLf_o1YhVH8ioxAri",
      label: "On Model",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Relist Item</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Selection */}
        <Text style={styles.sectionTitle}>Select Primary Image</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imageScroll}
        >
          {images.map((img, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.imageCard,
                img.selected && styles.imageCardSelected,
              ]}
            >
              <ImageBackground source={{ uri: img.uri }} style={styles.image}>
                {img.selected && (
                  <View style={styles.selectedBadge}>
                    <MaterialIcons name="check" size={16} color="#fff" />
                  </View>
                )}
              </ImageBackground>
              <Text
                style={[
                  styles.imageLabel,
                  img.selected
                    ? styles.imageLabelActive
                    : styles.imageLabelInactive,
                ]}
              >
                {img.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Feed Preview */}
        <Text style={styles.sectionTitle}>Feed Preview & Edit</Text>
        <View style={styles.previewContainer}>
          <ImageBackground
            source={{ uri: images[0].uri }}
            style={styles.previewImage}
          >
            <View style={styles.overlay} />
            <View style={styles.previewText}>
              <Text style={styles.previewTitle}>Essential Cotton Tee</Text>
              <Text style={styles.previewPrice}>$25.00</Text>
            </View>

            <View style={styles.actionColumn}>
              {["favorite", "chat-bubble", "share"].map((icon, i) => (
                <View key={i} style={styles.actionItem}>
                  <MaterialIcons name={icon} size={30} color="#fff" />
                  <Text style={styles.actionCount}>{[1200, 345, 123][i]}</Text>
                </View>
              ))}
            </View>
          </ImageBackground>
        </View>

        {/* Tools */}
        <View style={styles.tools}>
          {[
            { icon: "crop", label: "Crop" },
            { icon: "tune", label: "Adjust" },
            { icon: "palette", label: "Filter" },
          ].map((tool, i) => (
            <TouchableOpacity key={i} style={styles.toolItem}>
              <MaterialIcons
                name={tool.icon}
                size={24}
                color="rgba(255,255,255,0.7)"
              />
              <Text style={styles.toolLabel}>{tool.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Price Input */}
        <View style={styles.formSection}>
          <Text style={styles.inputLabel}>Your Selling Price</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.dollarSign}>$</Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              placeholderTextColor="#b89d9f"
              defaultValue="25.00"
              keyboardType="decimal-pad"
            />
          </View>
          <Text style={styles.note}>Allowed Markup: 10% - 30%</Text>
          <Text style={styles.profit}>Your Profit: $5.00</Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Relist Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RelistItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#211111",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 16,
    marginTop: 16,
  },
  imageScroll: {
    paddingHorizontal: 12,
    marginTop: 8,
  },
  imageCard: {
    minWidth: 150,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 12,
    marginRight: 12,
  },
  imageCardSelected: {
    borderColor: "#ea2a33",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  selectedBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#ea2a33",
    borderRadius: 999,
    padding: 4,
  },
  imageLabel: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 4,
  },
  imageLabelActive: {
    color: "#fff",
  },
  imageLabelInactive: {
    color: "#b89d9f",
  },
  previewContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  previewImage: {
    width: width * 0.75,
    aspectRatio: 9 / 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  previewText: {
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  previewPrice: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 4,
    color: "#fff",
  },
  actionColumn: {
    position: "absolute",
    top: 16,
    right: 16,
    alignItems: "center",
  },
  actionItem: {
    alignItems: "center",
    marginVertical: 8,
  },
  actionCount: {
    color: "#fff",
    fontSize: 12,
  },
  tools: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginVertical: 16,
  },
  toolItem: {
    alignItems: "center",
  },
  toolLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    marginTop: 4,
  },
  formSection: {
    paddingHorizontal: 16,
  },
  inputLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#261c1c",
    borderColor: "#533c3d",
    borderWidth: 1,
    borderRadius: 10,
    height: 56,
    paddingHorizontal: 12,
  },
  dollarSign: {
    color: "#fff",
    fontSize: 18,
    marginRight: 6,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  note: {
    color: "#b89d9f",
    fontSize: 13,
    marginTop: 6,
  },
  profit: {
    color: "#4ade80",
    fontSize: 15,
    marginTop: 6,
  },
  button: {
    backgroundColor: "#ea2a33",
    borderRadius: 14,
    marginHorizontal: 16,
    paddingVertical: 16,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
