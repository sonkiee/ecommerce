import { colors, radius, spacing } from "@/constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateScreen() {
  const [shareToFeed, setShareToFeed] = useState(true);
  const [shareWithFollowers, setShareWithFollowers] = useState(true);

  return (
    <View style={[styles.container]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color={colors.text_white} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Product Upload</Text>

        <TouchableOpacity>
          <Text style={styles.draftsText}>Drafts</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress */}
        <View style={styles.progressSection}>
          <Text style={styles.stepText}>Step 1 of 3</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Upload Section */}
        <View style={styles.uploadBox}>
          <Text style={styles.uploadTitle}>Tap to add video or photos</Text>
          <Text style={styles.uploadSub}>Max 10 photos</Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>

        {/* Form Inputs */}
        <View style={styles.formSection}>
          {/* Title */}
          <View>
            <Text style={styles.label}>Title</Text>
            <TextInput
              placeholder="Enter product name"
              placeholderTextColor="#777"
              style={styles.input}
            />
          </View>

          {/* Description */}
          <View>
            <Text style={styles.label}>Description</Text>
            <TextInput
              placeholder="Be descriptive!"
              placeholderTextColor="#777"
              multiline
              numberOfLines={5}
              style={[styles.input, styles.textarea]}
            />
          </View>

          {/* Price + Categories */}
          <View style={styles.row}>
            {/* Price */}
            <View style={styles.flex}>
              <Text style={styles.label}>Price</Text>
              <View>
                <MaterialIcons
                  name="attach-money"
                  size={20}
                  color="#777"
                  style={styles.inputIconLeft}
                />
                <TextInput
                  placeholder="0.00"
                  placeholderTextColor="#777"
                  keyboardType="numeric"
                  style={[styles.input, styles.inputWithIconLeft]}
                />
              </View>
            </View>

            {/* Categories */}
            <View style={styles.flex}>
              <Text style={styles.label}>Categories</Text>
              <View>
                <TextInput
                  placeholder="Select categories"
                  placeholderTextColor="#777"
                  style={[styles.input, styles.inputWithIconRight]}
                />
                <MaterialIcons
                  name="expand-more"
                  size={20}
                  color="#777"
                  style={styles.inputIconRight}
                />
              </View>
            </View>
          </View>

          {/* Tags */}
          <View>
            <Text style={styles.label}>Tags</Text>
            <View>
              <TextInput
                placeholder="Add tags"
                placeholderTextColor="#777"
                style={[styles.input, styles.inputWithIconRight]}
              />
              <MaterialIcons
                name="add-circle-outline"
                size={20}
                color="#777"
                style={styles.inputIconRight}
              />
            </View>
          </View>
        </View>

        {/* Share Options */}
        <View style={styles.shareSection}>
          <Text style={styles.shareTitle}>Share Options</Text>
          <View style={styles.shareBox}>
            <View style={styles.shareRow}>
              <Text style={styles.shareText}>Share to Feed</Text>
              <Switch
                value={shareToFeed}
                onValueChange={setShareToFeed}
                trackColor={{ false: "#555", true: colors.primary }}
              />
            </View>
            <View style={[styles.shareRow, styles.shareDivider]}>
              <Text style={styles.shareText}>Share with Followers</Text>
              <Switch
                value={shareWithFollowers}
                onValueChange={setShareWithFollowers}
                trackColor={{ false: "#555", true: colors.primary }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Publish Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_dark,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  iconButton: {
    padding: spacing.sm,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: colors.text_white,
  },
  draftsText: {
    color: "#94a3b8",
    fontWeight: "600",
  },
  scroll: { flex: 1, paddingHorizontal: spacing.md },
  scrollContent: { paddingBottom: 100 },
  progressSection: { marginVertical: spacing.sm },
  stepText: {
    color: colors.text_white,
    fontSize: 14,
    fontWeight: "500",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#444",
    borderRadius: 10,
    marginTop: 8,
  },
  progressFill: {
    height: 8,
    backgroundColor: colors.primary,
    width: "33%",
    borderRadius: 10,
  },
  uploadBox: {
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#555",
    borderRadius: radius.xl,
    paddingVertical: 56,
    marginVertical: spacing.md,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text_white,
    textAlign: "center",
  },
  uploadSub: {
    color: "#999",
    fontSize: 13,
    marginTop: 4,
    textAlign: "center",
  },
  uploadButton: {
    backgroundColor: "rgba(234,42,51,0.1)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    marginTop: 8,
  },
  uploadButtonText: {
    color: colors.primary,
    fontWeight: "700",
  },
  formSection: { gap: spacing.md },
  label: {
    color: colors.text_white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.input_dark_bg,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    color: colors.text_white,
    fontSize: 15,
  },
  textarea: { minHeight: 120, textAlignVertical: "top" },
  row: {
    flexDirection: "row",
    gap: spacing.md,
  },
  flex: { flex: 1 },
  inputIconLeft: {
    position: "absolute",
    left: 10,
    top: 16,
  },
  inputIconRight: {
    position: "absolute",
    right: 10,
    top: 16,
  },
  inputWithIconLeft: { paddingLeft: 32 },
  inputWithIconRight: { paddingRight: 32 },
  shareSection: { marginTop: spacing.lg },
  shareTitle: {
    color: colors.text_white,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
  shareBox: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: radius.lg,
  },
  shareRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.md,
  },
  shareDivider: {
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  shareText: {
    color: colors.text_white,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: "#333",
    backgroundColor: colors.background_dark,
  },
  publishButton: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingVertical: spacing.md,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  publishText: {
    color: colors.text_white,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
