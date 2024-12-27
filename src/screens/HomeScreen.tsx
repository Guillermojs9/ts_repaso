import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';
import { InfoPokemonResponse } from '../entities/InfoPokemonResponse';
import { pokemonMapper } from '../mapper/PokemonMapper';
import { PokemonLocal } from '../entities/PokemonLocal';
import { PokemonesResponse, PokemonResponse } from '../entities/DataResponse';
export default function HomeScreen() {
    async function getPokemones(): Promise<PokemonLocal[]> {
        const response = await axios.get<PokemonesResponse>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50");
        const pokemonesResponse = response.data;
        const infoPokemones: InfoPokemonResponse[] = await Promise.all(
            pokemonesResponse.results.map(async (item: PokemonResponse) => {
                const infoPokemon = await axios.get<InfoPokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${item.name}/`);
                return infoPokemon.data;
            })
        );
        const pokemonesMapped: PokemonLocal[] = infoPokemones.map((item: InfoPokemonResponse) => pokemonMapper(item));
        console.log(pokemonesMapped);
        return pokemonesMapped;
    }

    getPokemones();
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})