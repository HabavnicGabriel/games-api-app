import React from 'react'

export default function Search(props) {
    return (
        <div className="input-form">
            <form onSubmit={props.getGame}> 
                <input type="text" className="form-input-text" name="gameSearch"  placeholder="Search for a Steam game" /><br></br>
                <button className="btn-dark btn-form"> Search for a game </button>
            </form>
        </div>
    )
}
