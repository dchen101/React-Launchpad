 var Item = React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  getInitialState: function(){
    return {
      clicked: false,
    };
  },

  handleClick: function(key){
    this.setState({clicked: !this.state.clicked});
  },

  playSound: function(){
    var sound = React.findDOMNode(this.refs.sound)
    sound.play();
  },
  render: function(){

    var src = Sounds[this.props.item.audio];
    var className = 'color_me'
    if (this.state.clicked) {
      className += ' change'
    }
    return (
      <div onClick={this.playSound}>
        <audio ref="sound" src={src}></audio>
        <div className={className} onMouseDown={this.handleClick} onMouseUp={this.handleClick}>
          {this.props.item.tile}
        </div>
      </div>
    );
  }

});
