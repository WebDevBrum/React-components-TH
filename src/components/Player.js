import React, {PureComponent} from 'react';

import Counter from './Counter';

class Player extends PureComponent { //a more performant version of componenet, checks whether re renders are required, so stops wasted renders, although here the app is so small tyis prob isnt needed, mainly use when you have performance issues
  render() {

    const {name, id, score, index, removePlayer, changeScore} = this.props;

    console.log(name + ' rendered');// results now in single render rather than render for all players upon state change (eg score increase)
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
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