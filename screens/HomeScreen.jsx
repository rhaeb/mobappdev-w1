"use client"

import { useState, useRef } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Animated, FlatList } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"

const { width } = Dimensions.get("window")

// Sample data for featured items
const featuredItems = [
  { id: "1", title: "Photography Basics", category: "Learning", icon: "camera-outline" },
  { id: "2", title: "Travel Destinations", category: "Explore", icon: "airplane-outline" },
  { id: "3", title: "Cooking Recipes", category: "Food", icon: "restaurant-outline" },
  { id: "4", title: "Fitness Routines", category: "Health", icon: "fitness-outline" },
]

// Sample data for recent activities
const recentActivities = [
  { id: "1", title: "Completed Photography Course", time: "2 hours ago", icon: "checkmark-circle-outline" },
  { id: "2", title: "Added New Travel Plans", time: "Yesterday", icon: "map-outline" },
  { id: "3", title: "Saved 3 New Recipes", time: "2 days ago", icon: "bookmark-outline" },
]

export default function HomeScreen({ navigation }) {
  const [buttonScale] = useState(new Animated.Value(1))
  const scrollY = useRef(new Animated.Value(0)).current

  // Animation for header
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.9],
    extrapolate: "clamp",
  })

  const handlePress = () => {
    // Button press animation
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start()

    // Navigate to profile on button press
    navigation.navigate("ProfileTab")
  }

  const handlePressIn = () => {
    Animated.timing(buttonScale, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.timing(buttonScale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
      >
        {/* Header Section */}
        <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
          <Text style={styles.greeting}>Hello, John! 👋</Text>
          <Text style={styles.subtitle}>Welcome back to your dashboard</Text>
        </Animated.View>

        {/* Main Card */}
        <View style={styles.card}>
          <Text style={styles.welcome}>We're glad you're here. Start exploring now!</Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1",
              }}
            />
          </View>

          <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
            <TouchableOpacity
              onPress={handlePress}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              activeOpacity={0.9}
            >
              <LinearGradient
                colors={["#3B82F6", "#2563EB"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1E293B",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    marginTop: 4,
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 30,
    marginHorizontal: 20,
    alignItems: "center",
    shadowColor: "#0F172A",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  welcome: {
    fontSize: 18,
    color: "#334155",
    marginBottom: 30,
    textAlign: "center",
    lineHeight: 26,
    fontWeight: "500",
  },
  imageContainer: {
    marginBottom: 35,
    position: "relative",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: width - 100,
    alignItems: "center",
    shadowColor: "#3B82F6",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
})
