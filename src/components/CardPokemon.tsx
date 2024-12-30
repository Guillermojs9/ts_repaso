import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { getTypeColor, styles } from '../styles/Styles';

interface Pokemon {
    name: string;
    url_image: string;
    types: string[];
}

interface CardProps {
    pokemon: Pokemon;
}

export function CardPokemon({ pokemon }: CardProps) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <Image source={{ uri: pokemon.url_image }} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <View style={styles.typesContainer}>
                            {pokemon.types &&
                                Object.values(pokemon.types).map((type, index) => (
                                    <Text key={index} style={[styles.type, { backgroundColor: getTypeColor(type) }]}>
                                        {type}
                                    </Text>
                                ))}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}