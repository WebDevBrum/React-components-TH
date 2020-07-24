import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {

  const totalPlayers = props.players.length;

  //accumulates the score, initialised with 0 , player is each object in players array
  const totalPoints =  props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
<table className="stats">
  <tbody>
    <tr>
      <td>Players:</td>
      <td>{totalPlayers}</td>
    </tr>
    <tr>
      <td>Total Points:</td>
      <td>{totalPoints}</td>
    </tr>
  </tbody>
</table>

  );

}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  })), //checks if its an array of objects
  title: PropTypes.string

};

export default Stats;