import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const imageWidth = (width - 8) / 3;

export default function ProfileScreen() {
  const posts = [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDs30KcljZtRSkmG7dlqRMkNHnsVkS74BLIrYx3mP_eb2v00VDeO-DlODh8n4b0BBOTWhNHsFJnO5g79gxdyamOS5saJe5JRWynIzWOEJ-gOWTeubsmxJ_HtTqGcQa39XtprQL83KyKD5xTZ6_xkXfWJIMAFSglJqFxFHV_C0rR_0JHnnSZWs0781EBu1CA7GR2XwmUevI4aj9k5uDLJUwQI7xeKDWNb9rZxQT4ybdxZpieBAMmvP1ppVBZAMZ0vxQewhrMIX2wSn3Y",
      alt: "Fashion post with a red dress",
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDgr1CjyHCl_CMXqk5j72ZDOPtEBOWeGVO5etRWFP_ojF8AhcYN02Zy4DEY1le4ndIOq-CV5lc5i1taohpS2Z3WRPrt-XxzJRJfHFWqa8pcvHuHhySz6Ach8sBaZGuuLb8rp0MdY6x6-bhaU5dLo6WAfAu1OaOJDXybB3dxzLkEkGOSJOdz86h7Rujp1L59pt3YES_VWhLSSBio8uT8pmBpq7858ezipzFCkLxFR-XMsqYKUnfQXbI2_VSn-jjGNzO3txs_FCzmQiE7",
      alt: "Tutorial on how to apply makeup",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC3bBPb7lDCdeHiZK3GL1HmlTIi2GieDnCO2-XjRWkkVkTIyF9XRYQ_bPWyLHKK43jvHWUEwMBdXXulbpS3wbbq7KASG9QzBA7BiDFak00wgrK6pf-DOjWYAT7_uwWoqw5g_iK6nv0mVCcEAKFJkYLbkYqpRB2PdKGvzGkPv99mw-kLjgPGson_JykJ8KWIhdL3jtutg3JKQImw-0vwRYAAgTK2bmfR4snTFn-7ZbcBAqYiZBIJqyDS3xpfPaoXIGVcyk9wbPwJr18x",
      alt: "Skincare routine video",
    },
    {
      id: 4,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC4E3EVbHtbNYhVKOGaUOxGnqodvMa32KQt-Q-wKP15GJA5lUbNm4f_xIYwjla-OjAI2PjaTBkZCFOldcEdAetk-RM5ESTylf6pZbcVxQ2EG_Unon6AELNutie9PiTnmKKmYAj6kQWV5niHIIYxaUOSXzZYIwFx0f0BJORjH_xO2TT-F6QovLLp5YX7I9vmUIozI29lz6sXurn6Z2ZdlehEjxH0aGQO2-isJNANcDsHNM95Bcmbt7kAqnVDGa7bEl_CnQ5SqIBtlU0b",
      alt: "OOTD video with a casual outfit",
    },
    {
      id: 5,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5MSiQ8W-y3DyBo1hpEwwkTfWvQpYZBPG7Fp0EQT633UZ2le91cJEztoE8SEQTse6QsjNHbvOuYOOTBlJNRPOljqzjUPMaXqa_VfyFpoiyYLIK43ggiPdo1TQWu9Jkrb6Xoku1RDlQ3MmWD7UshBZIGixjr6qc18EcDjCB3GJz-hIcTszb96h4BxJsF1tvzk5xoXO2AdhWLBqKvUOKGkbjKaaX6k6w5Vz9Ix4h6aeN5CLUKaNjFE6bULDa9gWVkqrtpSY696eGRNR6",
      alt: "Unboxing a new pair of sneakers",
    },
    {
      id: 6,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAdvwSSBIc06tsM-xoCMTzc9tt77TNEvOti4PVIbJqfp7YShjYdr3cDyTVyRscMKifWeqar-nv-OaPrLpdIoON_7rypgXEgzkQnqCLCvM4PbvPOrbXjuANrhq7J3nxXQVmJff1ImmZTsXy1U_LMlJssUqkyKsdjYpGCnMKRDK4FjVmMC_eLK5hlo9COa8ewgsse7yHPtayu2BCqKxCAn7pDsEVSdIqjTlGzeImCNMY6qsyrYS4tkYolV6mUW4P8HjgRojuDJ9ro8w2x",
      alt: "Haul video of new clothes",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerSpacer} />
          <Text style={styles.headerTitle}>sara_mill</Text>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreIcon}>⋯</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuACegkrLfcVDBXXYBikJzquMkLz--mT7vcNTZJpCjVkeEUBwH6u4OqUftbRHeIYvjy6KSgRaeASAEOBBJj3DhDoj4EKEk8-1Ha8RgEDDa4dFGDjKqbxyE4xs4rC0Egzw7CpddBT11p2xjwYrAmzMsQgmNmV0WlhtFkHkZROfmrkaEQsriGc0-xD3E3jZPYPAN7vYq1QF2yUpFYf_GKcm3SyB6OofrEIogmylqATkcnK_QehijrSy63gGxP8b9XWwPoDnza1H0k77c2v",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>@sara_mill</Text>
          <Text style={styles.fullName}>Sara Miller</Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>32</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Relists</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>345</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>👛</Text>
            <Text style={styles.actionText}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionIcon}>⚙️</Text>
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.activeTabText}>My Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>My Relists</Text>
          </TouchableOpacity>
        </View>

        {/* Image Grid */}
        <View style={styles.imageGrid}>
          {posts.map((post) => (
            <TouchableOpacity key={post.id} style={styles.imageContainer}>
              <Image source={{ uri: post.image }} style={styles.gridImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navLabel}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navLabel}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>👤</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Profile</Text>
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
  headerSpacer: {
    width: 48,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  moreButton: {
    width: 48,
    alignItems: "flex-end",
  },
  moreIcon: {
    fontSize: 24,
    color: "#fff",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 16,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  fullName: {
    fontSize: 16,
    color: "#9ca3af",
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: "#374151",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "100%",
    maxWidth: 480,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  statBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#374151",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#9ca3af",
  },
  actionButtons: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#374151",
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  actionIcon: {
    fontSize: 18,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#ea2a33",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9ca3af",
  },
  activeTabText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ea2a33",
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 4,
  },
  imageContainer: {
    width: imageWidth,
    height: (imageWidth * 16) / 9,
    padding: 2,
  },
  gridImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 8,
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
    marginTop: -20,
  },
  addIcon: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
});
