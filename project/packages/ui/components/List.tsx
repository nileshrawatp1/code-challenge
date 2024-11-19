import React from 'react'
import { useDispatch } from 'react-redux';
import { removePokemon } from '../../../apps/app/src/redux/pokemonSlice';

interface ListProps {
    data: { name: string; url: string }[];
}

export const List: React.FC<ListProps> = ({ data }) => {

    const dispatch = useDispatch();

    const handleRemovePokemon = (name) => {
        console.log(name)
        dispatch(removePokemon(name));
    };

    return (
        <ul className="pokemon-list">
            {data.map((pokemon, index) => (
                <li
                    key={index}
                    className="pokemon-item"
                >
                    {pokemon.name}
                    <button onClick={() => handleRemovePokemon(`${pokemon.name}-${index}`)} className="remove-btn" title="Remove Pokemon" aria-label="Remove Pokemon">
                        x
                    </button>
                </li>
            ))}
        </ul>
    );
};
