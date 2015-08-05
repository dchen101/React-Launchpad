var List = React.createClass({
  getInitialState: function(){
    return {
      list: [
        {tile:"q", audio:"CH.mp3"},
        {tile:"w", audio:"CY0000.mp3"},
        {tile:"e", audio:"CL.mp3"},
        {tile:"r", audio:"CY0010.mp3"},
        {tile:"t", audio:"OH00.mp3"},
        {tile:"y", audio:"OH10.mp3"},
        {tile:"u", audio:"OH25.mp3"},
        {tile:"i", audio:"RS.mp3"},
        {tile:"o", audio:"SD0010.mp3"},
        {tile:"p", audio:"SD0025.mp3"},
        {tile:"a", audio:"SD0050.mp3"},
        {tile:"s", audio:"MA.mp3"},
        {tile:"d", audio:"CY0000.mp3"},
        {tile:"f", audio:"CL.mp3"},
        {tile:"g", audio:"CY0010.mp3"},
        {tile:"h", audio:"OH00.mp3"},
        {tile:"j", audio:"OH10.mp3"},
        {tile:"k", audio:"RS.mp3"},
        {tile:"l", audio:"SD0010.mp3"},
        {tile:"z", audio:"SD0025.mp3"},
        {tile:"x", audio:"CY0000.mp3"},
        {tile:"c", audio:"OH00.mp3"},
        {tile:"v", audio:"RS.mp3"},
        {tile:"b", audio:"CY0010.mp3"},
        {tile:"n", audio:"MA.mp3"}
      ]
      // list: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n"],
    };
  },

  render: function(){
    var items = this.state.list.map(function(item, index){
      return(
        <Item key={index} item={item} />
      )
    });

    return(
      <div className="container">
        <ul>{items}</ul>
      </div>
    )
  }
});
