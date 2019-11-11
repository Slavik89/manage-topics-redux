import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({ tasksList }) => (
  <ul>
    {tasksList.map(({ id, name}) => (
      <ToDoItem key={id} name={name} />
      
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
}

ToDoList.defaultProps = {
  tasksList: [],
}

export default ToDoList;