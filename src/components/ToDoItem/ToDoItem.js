import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ name }) => (
  <li>    
    <span>{name}</span>    
  </li>
);

ToDoItem.propTypes = {
  name: PropTypes.string,  
}

ToDoItem.defaultProps = {
  name: '',  
}

export default ToDoItem;