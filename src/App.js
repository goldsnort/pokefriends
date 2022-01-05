import { pokemons } from './pokemons';
import React, {Component} from 'react';
import SearchBox from './SearchBox';
import './App.css';
import Cardlist from './Cardlist.js';
import Scroll from './Scroll.js';

const state = {
    pokemons: pokemons,
    searchfield:''
}

class App extends Component 
{
    constructor()
    {
        super()
        this.state = {
            pokemons: pokemons,
            searchfield:''
            }
    }

    onSearchChange = (event) => {
        this.setState( { searchfield : event.target.value } )
        const filteredPokemons = this.state.pokemons.filter(pokemons=>{
            return pokemons.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    }
    render()
    {
        const filteredPokemons = this.state.pokemons.filter(pokemons=>{
            return pokemons.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="App">
                
                <div className="Navigation">
                    <div className="mainHeading">PokeFriends</div>
                    <SearchBox searchChange={this.onSearchChange} />
                </div>
                <Scroll >
                <Cardlist pokemons={filteredPokemons}/>
                </Scroll >
            </div>
        );
    }
}
export default App;