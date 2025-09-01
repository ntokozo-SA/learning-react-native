import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image
        source={{ uri: 'https://example.com/your-image.png' }}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <Text style={styles.title}>The number one</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

      <Link style={styles.card} href="/about">
        <Text>About Page</Text>
      </Link>
      <Link style={[styles.card, { marginTop: 10 }]} href="/contact">
        <Text>Contact Page</Text>
      </Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }
})