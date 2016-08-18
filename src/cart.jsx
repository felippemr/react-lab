var React = require('react');
var ReactDOM = require('react-dom');

class Item extends React.Component{
  constructor(props) {
    super(props);
    this._name = props.item_info['name'];
  }
  render() {
    return (
      <p className='item'>{this._name}</p>
    )
  }
}

class Cart extends React.Component{
  constructor(props) {
    super(props);
    this._items = props.items;
  }
  render() {
    return (
        <ul>
        {
          this._items.map( function(item_info, index) {
            return <li><Item item_info={item_info} key={index}/></li>
          })
        }
        </ul>
    )
  }
}

var data = [
  {'name': 'Bag'},
  {'name': 'Sun glasses'},
  {'name': 'Shorts'}
];

ReactDOM.render(
    <Cart items={data}/>,
    document.getElementById('cart')
);
