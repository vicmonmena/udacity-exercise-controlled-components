import React from 'react';
import Button from './Button.js';
import ListItem from './ListItem.js';

class ShoppingListForm extends React.Component {
  
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
  	return(
      <div>
      	<h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button disabled={this.inputIsEmpty()} text="Add"/>
        </form>

        <Button handleClick={this.deleteLastItem} handleDisabled={this.noItemsFound()} text="Delete Last Item" />

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <ListItem key={index} text={item}/>)}
        </ol>
      </div>
    )
  }
}

export default ShoppingListForm;