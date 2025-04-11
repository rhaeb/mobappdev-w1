import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  Dimensions,
  Animated,
  StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomePage() {
  const [buttonScale] = useState(new Animated.Value(1));
  
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
    ]).start();
    
    Alert.alert("Button Pressed", "Get Started button was tapped!");
    console.log("Button Pressed");
  };
  
  const handlePressIn = () => {
    Animated.timing(buttonScale, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  
  const handlePressOut = () => {
    Animated.timing(buttonScale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC"/>
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.subtitle}>Explore and enjoy!</Text>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        <View style={styles.card}>
          <Text style={styles.welcome}>
            We're glad you're here. Start exploring now!
          </Text>
          
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1',
              }}
            />
          </View>
          
          <Animated.View 
            style={[
              styles.buttonContainer,
              { transform: [{ scale: buttonScale }] }
            ]}
          >
            <TouchableOpacity
              onPress={handlePress}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              activeOpacity={0.9}
            >
              <LinearGradient
                colors={['#3B82F6', '#2563EB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', // Lighter background for modern feel
    padding: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1E293B',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 30,
    width: width - 40,
    alignItems: 'center',
    shadowColor: '#0F172A',
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
    color: '#334155',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '500',
  },
  imageContainer: {
    marginBottom: 35,
    position: 'relative',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: width - 100,
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});