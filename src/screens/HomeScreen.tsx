import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PokemonLocal } from '../entities/PokemonLocal';
import React, { useEffect, useState } from 'react';
import { fetchPokemones } from '../conexion/fetchPokemones';
import { CardPokemon } from '../components/CardPokemon';
export default function HomeScreen() {
    const [pokemones, setPokemones] = useState<PokemonLocal[]>([]);
    useEffect(() => {
        const loadPokemones = async () => {
            const data = await fetchPokemones();
            setPokemones(data);
        };
        loadPokemones();
    }, []);

    return (
        <View>
            <FlatList
                data={pokemones}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <CardPokemon pokemon={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})