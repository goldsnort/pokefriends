import './PokeCard.css';

function PokeCard(props)
{
    return(
   <a className="cardLink hvr-grow-rotate" target="_blank" href={`https://www.pokemon.com/us/pokedex/${props.id}`}>
       <div className='cardoutline'>
           <img src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${props.id}.png?raw=true`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.types}</p>
            </div>
       </div>
   </a>
    );
}
export default PokeCard;