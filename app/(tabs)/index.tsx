import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import TripCard from "@/components/TripCard";

export default function HomeScreen() {
  return (
    <View style ={styles.container}>
      <Text style={styles.title}>TravelSnap</Text>
      <Text style={styles.subtitle}>Moj dziennik podrozy</Text>
      <Text style={styles.name}>Alesia Sichova</Text>
      <Image 
      style={styles.logo}
      source={require('@/assets/images/icon.png')}
      />

      <ScrollView>
        <TripCard 
          title="Trip to UK"
          destination="London"
          date="2025-05-12"
          rating={5}
        />
        <TripCard 
          title="Holiday in Indonesia"
          destination="Bali"
          date="2025-08-21"
          rating={3}
        />
        <TripCard 
          title="Birthday trip to Netherlands"
          destination="Amsterdam"
          date="2025-02-23"
          rating={4}
        />
        <TripCard 
          title="Trip home"
          destination="Minsk"
          date="2026-04-02"
          rating={4}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a2e'
  },
  subtitle: {
    fontSize: 18,
    color: '#16231e',
    marginTop: 0
  },
  name: {
    fontSize: 14,
    color: '#16231e',
    marginTop: 3
  },
  logo: {
    width: 100,
    height: 100,
    margin: 10
  }
})