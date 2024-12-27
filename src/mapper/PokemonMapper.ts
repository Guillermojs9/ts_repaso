import { InfoPokemonResponse, Type } from "../entities/InfoPokemonResponse";
import { PokemonLocal } from "../entities/PokemonLocal";

export const pokemonMapper = (item: InfoPokemonResponse): PokemonLocal => {
    return {
        id: item.id,
        name: item.name,
        height: item.height,
        weight: item.weight,
        types: item.types.map((t: Type) => t.type.name),
        url_image: item.sprites.front_default,
    }
}