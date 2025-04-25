import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const { width } = Dimensions.get("window")

export default function ProfileScreen() {
  const stats = [
    { label: "Posts", value: "24" },
    { label: "Followers", value: "1.2K" },
    { label: "Following", value: "348" },
  ]

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1",
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Ionicons name="camera" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.username}>@johndoe</Text>
        <Text style={styles.bio}>Product Designer | Photography Enthusiast | Coffee Lover</Text>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Ionicons name="share-social-outline" size={20} color="#3B82F6" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Info Sections */}
      <View style={styles.infoSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="#3B82F6" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="mail-outline" size={20} color="#64748B" style={styles.infoIcon} />
          <View>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>john.doe@example.com</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="call-outline" size={20} color="#64748B" style={styles.infoIcon} />
          <View>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="location-outline" size={20} color="#64748B" style={styles.infoIcon} />
          <View>
            <Text style={styles.infoLabel}>Location</Text>
            <Text style={styles.infoValue}>San Francisco, CA</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={20} color="#64748B" style={styles.infoIcon} />
          <View>
            <Text style={styles.infoLabel}>Joined</Text>
            <Text style={styles.infoValue}>January 2023</Text>
          </View>
        </View>
      </View>

      {/* Interests Section */}
      <View style={styles.infoSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="#3B82F6" />
          </TouchableOpacity>
        </View>

        <View style={styles.interestsContainer}>
          {["Photography", "Design", "Travel", "Technology", "Music", "Food"].map((interest, index) => (
            <View key={index} style={styles.interestTag}>
              <Text style={styles.interestText}>{interest}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Recent Activity Section */}
      <View style={styles.infoSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {[1, 2, 3].map((item, index) => (
          <View key={index} style={styles.activityItem}>
            <View style={styles.activityImageContainer}>
              <Image
                source={{
                  uri: "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1",
                }}
                style={styles.activityImage}
              />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Posted a new photo</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#FFFFFF",
  },
  editImageButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#3B82F6",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
  },
  username: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#334155",
    textAlign: "center",
    marginHorizontal: 24,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 24,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  statLabel: {
    fontSize: 14,
    color: "#64748B",
  },
  actionsContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 12,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "#EFF6FF",
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  infoSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E293B",
  },
  viewAllText: {
    fontSize: 14,
    color: "#3B82F6",
    fontWeight: "500",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  infoIcon: {
    marginRight: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: "#64748B",
  },
  infoValue: {
    fontSize: 16,
    color: "#1E293B",
    fontWeight: "500",
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  interestTag: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  interestText: {
    color: "#3B82F6",
    fontSize: 14,
    fontWeight: "500",
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  activityImageContainer: {
    marginRight: 16,
  },
  activityImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    color: "#1E293B",
    fontWeight: "500",
  },
  activityTime: {
    fontSize: 14,
    color: "#64748B",
  },
})
