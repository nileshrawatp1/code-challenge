import { List } from 'ui'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonList, setLoading, setError, setIdle } from './redux/pokemonSlice';
import { RootState } from './redux/store'

const App = () => {

    const dispatch = useDispatch();

    const { list, status, error } = useSelector((state: RootState) => state.pokemon);


    useEffect(() => {
        dispatch(setLoading());
        const api = "https://pokeapi.co/api/v2/pokemon?limit=151"
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setPokemonList(data.results));
                dispatch(setIdle());
            })
            .catch((error) => {
                dispatch(setError(error.message));
                dispatch(setIdle());
            })
    }, [dispatch])

    return (
        <>
            <h1>Pokemon list:</h1>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'idle' && <List data={list} />}

        </>
    )
}

export default App
