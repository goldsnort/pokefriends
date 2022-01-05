import React from 'react';
import './searchbox.css';

function SearchBox(props)
{
    return(
        <input className="SearchBox" 
            type="search" 
            placeholder="search pokemons"
            onChange={props.searchChange}
            />
    );
}

export default SearchBox;