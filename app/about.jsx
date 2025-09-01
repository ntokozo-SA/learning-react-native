import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router' // <-- Add this import
import React from 'react'
import { Colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'


const About = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
        <StatusBar value="auto" />
        <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={styles.title}>About Page</Text>
        <Link style={styles.card} href="/"> {/* <-- Change href to "/" */}
            <Text>Back Home</Text>
        </Link>
        </View>
    </>
  )
}

export default About

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