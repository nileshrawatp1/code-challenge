import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonState {
    list: Pokemon[];
    status: 'loading' | 'idle' | 'failed';
    error: string | null;
}

const initialState: PokemonState = {
    list: [],
    status: 'idle',
    error: null
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList(state, action: PayloadAction<Pokemon[]>) {
            state.list = action.payload;
        },
        setLoading(state) {
            state.status = 'loading';
        },
        setError(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
        setIdle(state) {
            state.status = 'idle';
        },
        removePokemon: (state, action) => {
            const [name, index] = action.payload.split('-');
            state.list = state.list.filter((pokemon, i) => pokemon.name !== name || i !== parseInt(index));
        },
    },
});

export const { setPokemonList, setLoading, setError, setIdle, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
