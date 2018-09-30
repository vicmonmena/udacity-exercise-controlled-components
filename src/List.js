import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem.js';

const List = props => {
  return(
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
      	{props.items.map((item, index) => <ListItem key={index} text={item}/>)}
      </ol>
	</div>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List;