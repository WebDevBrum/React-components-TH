import React, {Component} from 'react';

import Header from './Header';

import Player from './Player';


  


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    
  }

//SEE BELOW , THIS METHOD SHOULD OF BEEN USED SO NOT TO DIRECTLY MUTATE THE PREVIOUS STATE OBJECT

//   In the video, we used prevState in this.setState() to update a player's score based on the previous score. It turns out that prevState is in fact still a reference to the previous state object, and it should not be directly mutated.

// A better way to update a specific player's score might be as follows:

//   handleScoreChange = (index, delta) => {
//     this.setState( prevState => {
//       // New 'players' array – a copy of the previous `players` state
//       const updatedPlayers = [ ...prevState.players ];
//       // A copy of the player object we're targeting
//       const updatedPlayer = { ...updatedPlayers[index] };

//       // Update the target player's score
//       updatedPlayer.score += delta;
//       // Update the 'players' array with the target player's latest score
//       updatedPlayers[index] = updatedPlayer;

//       // Update the `players` state without mutating the original state
//       return {
//         players: updatedPlayers
//       };
//     });
//   }

  

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return { //filters out the player with id
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list applies the function to each item in the object/array */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}  

          />
        )}
      </div>
    );
  }
}

export default App;
