import React from 'react'

export const List = ({ data }) => {
    return (
        <ul>
            {data.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
            ))}
        </ul>
    )
}
