import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Ionicons } from "@expo/vector-icons"
import { StatusBar } from "react-native"

// Import screens
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"
import SettingsScreen from "./screens/SettingsScreen"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// Stack navigator for each tab
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#F8FAFC" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#F8FAFC" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#F8FAFC" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "HomeTab") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "ProfileTab") {
              iconName = focused ? "person" : "person-outline"
            } else if (route.name === "SettingsTab") {
              iconName = focused ? "settings" : "settings-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#2563EB",
          tabBarInactiveTintColor: "#94A3B8",
          tabBarStyle: { height: 60 },
          headerShown: false,
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: "Home" }} />
        <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ title: "Profile" }} />
        <Tab.Screen name="SettingsTab" component={SettingsStack} options={{ title: "Settings" }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
