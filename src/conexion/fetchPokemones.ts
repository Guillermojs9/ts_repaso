import axios from "axios";
import { PokemonLocal } from "../entities/PokemonLocal";
import { PokemonesResponse, PokemonResponse } from "../entities/DataResponse";
import { InfoPokemonResponse } from "../entities/InfoPokemonResponse";
import { pokemonMapper } from "../mapper/PokemonMapper";

export async function fetchPokemones(): Promise<PokemonLocal[]> {
    const response = await axios.get<PokemonesResponse>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50");
    const pokemonesResponse = response.data;
    const infoPokemones: InfoPokemonResponse[] = await Promise.all(
        pokemonesResponse.results.map(async (item: PokemonResponse) => {
            const infoPokemon = await axios.get<InfoPokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${item.name}/`);
            return infoPokemon.data;
        })
    );
    const pokemonesMapped: PokemonLocal[] = infoPokemones.map((item: InfoPokemonResponse) => pokemonMapper(item));
    return pokemonesMapped;
}