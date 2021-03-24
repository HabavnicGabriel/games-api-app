
import Title from "./Components/Title.js"
import Search from "./Components/Search.js"
import Result from "./Components/Result.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  state= {games:[]
  };

  getGame = async (e) => {
    e.preventDefault();
    const game = e.target.elements.gameSearch.value
    const api_call= await fetch(`https://www.cheapshark.com/api/1.0/games?title=${game}`);
    const data = await api_call.json();
    this.setState({
      games:data
    })
  }

  render() {
    return (
      <div>
      <Title/>
      <Search getGame={this.getGame}/>
      <Result games={this.state.games}/>
      </div>
    );
  }
}


export default App;
