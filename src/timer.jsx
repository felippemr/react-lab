var React = require('react');
var ReactDOM = require('react-dom');

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elapsed: 0 };
    this._start = props.start;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(
        {elapsed: new Date() - this._start}
      );
    }, 50);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed / 10).toFixed(1);

    return (
      <p> <b>{seconds}</b> seconds have passed!</p>
    )
  }
}

ReactDOM.render(
  <Timer start={new Date()}/>,
  document.getElementById('timer')
);
