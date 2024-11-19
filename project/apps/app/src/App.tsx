import { List } from 'ui'
import React, { useState, useEffect } from "react";

const App = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const api = "https://pokeapi.co/api/v2/pokemon?limit=151"
        fetch(api)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed To Fetch Pokemon");
                }
                return response.json()
            })
            .then((data) => {
                setList(data.results);
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1>Pokemon list:</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && <List data={list} />}

        </>
    )
}

export default App
