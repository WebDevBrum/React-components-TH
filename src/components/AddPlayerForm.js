import React, {Component} from 'react';
import PropTypes from "prop-types";

class AddPlayerForm extends Component {

  static propTypes = {

    addPlayer: PropTypes.func
  }

  // this uses controlled components to handle the form instead of creating refs, though create ref way is commented for future ref.

  state = {
    value: ''
  };

  //playerInput = React.createRef(); //new method instead of target value way previous, this when used would allow deletion of the state pbjevt and handleValueChange as these would  o longer be required (once ref added to props and argument chemged to this.props.addplayer())

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value); //can now add (this.playerInput.current.value) (which obtains value of the ref), i chose to leave as is to show both examples, can always console log either
  // we would also add e.currentTarget.reset() to clear the form input (if using the alternative method) (replaces below ehich adds empty string)
  
    this.setState({value: ''}) // this would also be lost under React.createRef method
  }

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          //ref={this.playerInput} // accessible reference
          value={this.state.value} // not reqd under create ref method 
          onChange={this.handleValueChange} // not reqd under create ref method
          placeholder="Enter a player's name"
        />

        <input
          type="submit"
          value="Add Player"
        />
      </form>
     );
  }
}

export default AddPlayerForm;