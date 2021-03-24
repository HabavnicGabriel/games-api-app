import React from 'react'

export default function Result(props) {
    return (
        <div>
            {props.games.map((game) => {
                return (
                    <div key={game.gameID} className="card-games">
                        <img src={game.thumb} className="" alt={game.external}/>
                        <p className="p-text"> Name: {game.external} </p> 
                        <p className="p-text"> Best deal price: {game.cheapest} Euro </p> 
                        <p className="p-text"> Game on Steam full price:<a href={`https://store.steampowered.com/app/${game.steamAppID}`} target="_blank" rel="noopener noreferrer"> Link here </a> </p>
                        <p className="p-text"> Best deal at:<a href={`https://www.cheapshark.com/search?q=${game.internalName}`} target="_blank" rel="noopener noreferrer"> Link here </a> </p>
                        <p className="p-text"> {props.error} </p>
                    </div>
                )
            }) }
        </div>
    )
}
