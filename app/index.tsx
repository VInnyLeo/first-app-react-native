import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapComponent from './MapComponent';
import React, { useState } from 'react';
import { Link } from 'expo-router'

export default function Index() {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <MapComponent />
            <Text style={styles.paragraph}>Adios Mundo!</Text>
            <Pressable onPress={() => handlePress()} style={styles.paragraph}>
                <Text style={styles.paragraph}>Presioname</Text>
            </Pressable>
            <Text>{count}</Text>
            <Link href="/About" style={styles.button}>
                Go to About screen
            </Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        margin: 12,
        fontSize: 18,
        textAlign: 'center',
    },
    button: {
        margin: 12,
        fontSize: 20,
        textDecorationLine: 'underline',
    },
});