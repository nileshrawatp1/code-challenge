import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"
fetch(api)
    .then(response => response.json())
    .then(data => console.log(data))

const App = () => {
    return (
        <>
            <h1>Pokemon list:</h1>
            <List />
        </>
    )
}

export default App
