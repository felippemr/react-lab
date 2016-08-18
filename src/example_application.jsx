var React = require('react');
var ReactDOM = require('react-dom');

class ExampleApplication extends React.Component{
  render() {
    var elapsed = Math.round(this.props.elapsed / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
    var message =
      `React is succesfully running for ${seconds} seconds.`;
    return <p>{message}</p>;
  }
}

var start = new Date().getTime();

setInterval(() => {
  ReactDOM.render(
    <ExampleApplication elapsed={new Date().getTime() - start}/>,
    document.getElementById('container')
  );
}, 50);
