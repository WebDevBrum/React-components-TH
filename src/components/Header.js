import React from 'react';

import Stats from './Stats';

import Stopwatch from './Stopwatch';

const Header = (props) => {

  const { players, title} = props; //destructured , so props.players, props.title would be equivalmet. (use more in class assignment {} = this.props)
  //alternativley can just pass the object to the anonymous function and not have to mention props at all !?? so Header = ({players, title})
// use more in cunction assignmemt
  return (
    <header>
      <Stats players={players} />
      <h1>{ title }</h1> 
      <Stopwatch />  
    </header>
  );
}

export default Header;