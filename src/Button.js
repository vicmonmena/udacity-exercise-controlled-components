import React from 'react';

const Button = props => (
  <button onClick={props.handleClick} disabled={props.handleDisabled}>
	{props.text}
  </button>
)

export default Button;