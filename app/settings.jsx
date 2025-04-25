"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [locationServices, setLocationServices] = useState(false)
  const [dataSync, setDataSync] = useState(true)

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: () => console.log("Logged out") },
    ])
  }

  const renderSettingItem = ({ icon, title, subtitle, toggle, value, onValueChange, onPress, color }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} disabled={toggle}>
      <View style={[styles.iconContainer, { backgroundColor: color || "#EFF6FF" }]}>
        <Ionicons name={icon} size={22} color={color ? "#FFFFFF" : "#3B82F6"} />
      </View>
      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
      </View>
      {toggle ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: "#D1D5DB", true: "#93C5FD" }}
          thumbColor={value ? "#3B82F6" : "#F3F4F6"}
        />
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
      )}
    </TouchableOpacity>
  )

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        {renderSettingItem({
          icon: "moon-outline",
          title: "Dark Mode",
          subtitle: "Change app appearance",
          toggle: true,
          value: darkMode,
          onValueChange: setDarkMode,
        })}

        {renderSettingItem({
          icon: "notifications-outline",
          title: "Notifications",
          subtitle: "Manage notification settings",
          toggle: true,
          value: notifications,
          onValueChange: setNotifications,
        })}

        {renderSettingItem({
          icon: "location-outline",
          title: "Location Services",
          subtitle: "Allow app to use your location",
          toggle: true,
          value: locationServices,
          onValueChange: setLocationServices,
        })}

        {renderSettingItem({
          icon: "sync-outline",
          title: "Data Synchronization",
          subtitle: "Sync data across devices",
          toggle: true,
          value: dataSync,
          onValueChange: setDataSync,
        })}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        {renderSettingItem({
          icon: "person-outline",
          title: "Personal Information",
          subtitle: "Manage your personal details",
          onPress: () => console.log("Personal Information pressed"),
        })}

        {renderSettingItem({
          icon: "lock-closed-outline",
          title: "Privacy & Security",
          subtitle: "Manage your privacy settings",
          onPress: () => console.log("Privacy pressed"),
        })}

        {renderSettingItem({
          icon: "card-outline",
          title: "Payment Methods",
          subtitle: "Manage your payment options",
          onPress: () => console.log("Payment Methods pressed"),
        })}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>

        {renderSettingItem({
          icon: "help-circle-outline",
          title: "Help Center",
          subtitle: "Get help with using the app",
          onPress: () => console.log("Help Center pressed"),
        })}

        {renderSettingItem({
          icon: "chatbubble-outline",
          title: "Contact Us",
          subtitle: "Reach out to our support team",
          onPress: () => console.log("Contact Us pressed"),
        })}

        {renderSettingItem({
          icon: "document-text-outline",
          title: "Terms & Policies",
          subtitle: "Review our terms and policies",
          onPress: () => console.log("Terms pressed"),
        })}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={22} color="#EF4444" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  section: {
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 6,
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    marginVertical: 12,
    marginHorizontal: 16,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1E293B",
  },
  settingSubtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF2F2",
    padding: 16,
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  logoutText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  versionContainer: {
    alignItems: "center",
  },
  versionText: {
    fontSize: 14,
    color: "#94A3B8",
  },
})
