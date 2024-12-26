import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data => console.log(data));
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})