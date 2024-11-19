import React from 'react'

interface ListProps {
    data: { name: string; url: string }[];
  }

  export const List: React.FC<ListProps> = ({ data }) => {
    return (
      <ul>
        {data.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    );
  };
