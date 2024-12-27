import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';
import { PokemonResponse } from '../entities/pokemonesResponse';
export default function HomeScreen() {
    async function getPokemones() {
        const response = await axios.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50");
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