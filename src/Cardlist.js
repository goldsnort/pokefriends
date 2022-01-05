import React from 'react'
import PokeCard from './PokeCard'

const Cardlist = ({pokemons}) =>{
  const cardComponent = pokemons.map((user, i)=>{
    return <PokeCard key= {pokemons[i].id} id={pokemons[i].id} name = {pokemons[i].name} types = {pokemons[i].types}/>
  })
return(
<div className="pokemons">
          {cardComponent}
        </div>);
}

export default Cardlist;