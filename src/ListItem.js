import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => (
  <li>{props.text}</li>
)

ListItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default ListItem;