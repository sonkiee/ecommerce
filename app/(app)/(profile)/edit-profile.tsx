import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useCallback, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EditProfileScreen() {
  const [photoUri, setPhotoUri] = useState<string>(
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBW0uS0JE1N3S17cBHRhWyYFNftQD5UVwj3Vk6gJxIEFsq6E31nAXlOLRBchU2BIvPOA9PlZ2qAnf_f0oJ-sy5VcXDxJDZy2k7I9GbrWNifbsfxHgGIgV9i-1B5K_f_0WCbTeVzapnHF4XwOiH4g1NcDOcURji9yaEZxmPQRiiMZ656hF8gaNx67P1CHSS3IsIPfkC9eqFlMWdISKeBYh_MXwASphPcZO53l30Di13DyKv0kaeFHjU8uh8RgdsrstVM-ssC-dhaJDp2"
  );
  const [name, setName] = useState("Jane Doe");
  const [username, setUsername] = useState("janedoe");
  const [bio, setBio] = useState(
    "Fashion enthusiast. Love sharing my style tips and latest finds. ✨"
  );

  const pickImage = useCallback(async () => {
    try {
      const perm =
        Platform.OS !== "web"
          ? await ImagePicker.requestMediaLibraryPermissionsAsync()
          : { granted: true };
      if (perm && !perm.granted) {
        Alert.alert("Permission required", "Please allow photo access.");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });

      if (!result.cancelled) {
        setPhotoUri(result.uri);
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Could not pick an image.");
    }
  }, []);

  const onDone = () => {
    if (!name.trim()) return Alert.alert("Validation", "Name is required.");
    if (!username.trim())
      return Alert.alert("Validation", "Username is required.");
    // Replace with real save logic (API call)
    const payload = { name, username, bio, photoUri };
    console.log("Save profile:", payload);
    Alert.alert("Saved", "Profile updated.");
  };

  const onConnect = (platform: string) =>
    Alert.alert("Connect", `Connect ${platform} (placeholder)`);

  const onRowPress = (action: string) =>
    Alert.alert(action, `${action} pressed (placeholder)`);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => onRowPress("Back")}
          style={styles.iconBtn}
        >
          <MaterialIcons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Edit Profile</Text>

        <TouchableOpacity onPress={onDone}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Avatar */}
        <View style={styles.avatarWrap}>
          <Image source={{ uri: photoUri }} style={styles.avatar} />
          <TouchableOpacity style={styles.editAvatarBtn} onPress={pickImage}>
            <MaterialIcons name="edit" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.changePhoto}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Your name"
            placeholderTextColor="#8b8b8b"
            style={styles.input}
            returnKeyType="next"
          />

          <Text style={[styles.label, { marginTop: 12 }]}>Username</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="username"
            placeholderTextColor="#8b8b8b"
            style={styles.input}
            autoCapitalize="none"
            returnKeyType="next"
          />

          <Text style={[styles.label, { marginTop: 12 }]}>Bio</Text>
          <TextInput
            value={bio}
            onChangeText={setBio}
            placeholder="Write something about yourself..."
            placeholderTextColor="#8b8b8b"
            style={[styles.input, styles.textarea]}
            multiline
          />
        </View>

        {/* Social Accounts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Social Accounts</Text>

          <TouchableOpacity
            style={styles.row}
            onPress={() => onConnect("Instagram")}
          >
            <View style={styles.rowLeft}>
              <MaterialIcons name="photo-camera" size={20} color="#fff" />
              <Text style={styles.rowLabel}>Instagram</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={styles.connectText}>Connect</Text>
              <MaterialIcons name="chevron-right" size={20} color="#8b8b8b" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.row}
            onPress={() => onConnect("TikTok")}
          >
            <View style={styles.rowLeft}>
              <MaterialIcons name="music-note" size={20} color="#fff" />
              <Text style={styles.rowLabel}>TikTok</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={styles.connectText}>Connect</Text>
              <MaterialIcons name="chevron-right" size={20} color="#8b8b8b" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <TouchableOpacity
            style={styles.infoRow}
            onPress={() => onRowPress("Email")}
          >
            <Text style={styles.infoLabel}>Email</Text>
            <View style={styles.rowRight}>
              <Text style={styles.infoValue}>j***@gmail.com</Text>
              <MaterialIcons name="chevron-right" size={20} color="#8b8b8b" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.infoRow}
            onPress={() => onRowPress("Phone Number")}
          >
            <Text style={styles.infoLabel}>Phone Number</Text>
            <View style={styles.rowRight}>
              <Text style={styles.infoValue}>***-***-1234</Text>
              <MaterialIcons name="chevron-right" size={20} color="#8b8b8b" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.infoRow}
            onPress={() => onRowPress("Date of Birth")}
          >
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <View style={styles.rowRight}>
              <Text style={styles.infoValue}>October 10, 1995</Text>
              <MaterialIcons name="chevron-right" size={20} color="#8b8b8b" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.infoRow}
            onPress={() => onRowPress("Change Password")}
          >
            <Text style={styles.infoLabel}>Change Password</Text>
            <View style={styles.rowRight}>
              <MaterialIcons name="chevron-right" size={20} color="#8b8b8b" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom nav (sticky) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onRowPress("Home")}
        >
          <MaterialIcons name="home" size={22} color="#9ca3af" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onRowPress("Search")}
        >
          <MaterialIcons name="search" size={22} color="#9ca3af" />
          <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onRowPress("Reels")}
        >
          <MaterialIcons name="video-library" size={22} color="#9ca3af" />
          <Text style={styles.navText}>Reels</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onRowPress("Wallet")}
        >
          <MaterialIcons
            name="account-balance-wallet"
            size={22}
            color="#9ca3af"
          />
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => onRowPress("Profile")}
        >
          <MaterialIcons name="person" size={22} color="#E50914" />
          <Text
            style={[styles.navText, { color: "#E50914", fontWeight: "700" }]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000" },
  header: {
    height: 56,
    paddingHorizontal: 14,
    backgroundColor: "#000",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#111",
  },
  iconBtn: { width: 36, alignItems: "center" },
  title: { color: "#fff", fontSize: 18, fontWeight: "700" },
  doneText: { color: "#E50914", fontWeight: "700" },

  content: { paddingBottom: 120 },

  avatarWrap: { alignItems: "center", paddingTop: 20, paddingBottom: 12 },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: "#111",
  },
  editAvatarBtn: {
    position: "absolute",
    right: (Dimensions?.get ? Dimensions.get("window").width / 2 - 64 : 0) - 20,
    bottom: 28,
    backgroundColor: "#E50914",
    padding: 8,
    borderRadius: 20,
  },
  changePhoto: { color: "#E50914", marginTop: 8, fontWeight: "600" },

  form: { paddingHorizontal: 16, paddingTop: 6 },
  label: { color: "#fff", fontSize: 13, fontWeight: "600", marginBottom: 6 },
  input: {
    backgroundColor: "#0b0b0b",
    color: "#fff",
    borderRadius: 10,
    height: 44,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#1f1f1f",
  },
  textarea: { height: 90, textAlignVertical: "top", paddingTop: 10 },

  section: { paddingHorizontal: 16, paddingTop: 18 },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  rowLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  rowLabel: { color: "#fff", marginLeft: 12, fontSize: 15 },
  rowRight: { flexDirection: "row", alignItems: "center", gap: 8 },

  connectText: { color: "#E50914", fontWeight: "600" },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    alignItems: "center",
    borderBottomColor: "#111",
    borderBottomWidth: 1,
  },
  infoLabel: { color: "#9ca3af" },
  infoValue: { color: "#fff", marginRight: 8 },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#050505",
    borderTopWidth: 1,
    borderTopColor: "#111",
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navText: { color: "#9ca3af", fontSize: 11, marginTop: 4 },
});
