import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 6,
        width: 300,
        alignItems: 'center',
        padding: 20,
        margin: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    infoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    typesContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    type: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginHorizontal: 5,
    },
});

function getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC',
        normal: '#A8A878',
    };
    return typeColors[type.toLowerCase()] || '#68A090';
}