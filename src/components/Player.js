import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon'; 


class Player extends PureComponent { //a more performant version of componenet, checks whether re renders are required, so stops wasted renders, although here the app is so small tyis prob isnt needed, mainly use when you have performance issues

  static propTypes = {  // Static is one way of defining propTypes in a class
      changeScore: PropTypes.func,
      removePlayer: PropTypes.func,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number,
      index: PropTypes.number,
      isHighScore: PropTypes.bool
  };

  render() {

    const {name, id, score, index, removePlayer, changeScore, isHighScore} = this.props;

    console.log(name + ' rendered');// results now in single render rather than render for all players upon state change (eg score increase)
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

        <Icon isHighScore={isHighScore} />  {/*crown icon*/  }
          { name }
        </span>
  
        <Counter 
        score={score}
        index={index}
        changeScore={changeScore} />
      </div>
    );
  }
  
}

export default Player;