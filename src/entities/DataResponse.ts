export interface PokemonesResponse {
    count: number;
    next: string;
    previous: null;
    results: PokemonResponse[];
}

export interface PokemonResponse {
    name: string;
    url: string;
}
