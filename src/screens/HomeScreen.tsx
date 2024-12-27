import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

export default function HomeScreen() {
    async function getPokemones() {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const pokemones = response.data;
        console.log(pokemones);
    }
    getPokemones();
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})