var React = require('react');
var PropTypes = require('prop-types');

function PlayerPreview(props){
  return(
    <div>
      <div className="column">
        <img src={props.avatar}
         alt={"Avatar for " + props.username}
        className="avatar"
        />
      <h2 className="username">
        @{props.username}
      </h2>
      <button onClick={props.onReset.bind(null, props.id)} className="reset">
        Reset
      </button>
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  onReset: React.PropTypes.func.isRequired
}

class PlayerInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event){
    var value = event.target.value;

    this.setState(function(){
      return{
        username: value
      }
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }

  render(){
    return(
      <form className="column" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="header">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="github username"
          type="text"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
          />
        <button className="button" type="submit" disabled={!this.state.username}>Submit</button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired
}

class Battle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username){
    this.setState(function(){
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState;
    });
  }

  handleReset(id){
    this.setState(function(){
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    })
  }

  render(){
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;

    return(
      <div>
        <div className="row">
          {!playerOneName &&
          <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmit} />}

            {playerOneImage !== null &&
            <PlayerPreview
            avatar={playerOneImage}
            username={playerOneName}
            onReset={this.handleReset}
            id='playerOne' />}

          {!playerTwoName &&
          <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmit} />}

            {playerTwoImage !== null &&
            <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
            onReset={this.handleReset}
            id='playerTwo' />}
        </div>
      </div>
    )
  }
}

module.exports = Battle;