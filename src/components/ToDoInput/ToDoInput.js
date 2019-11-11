import React from 'react';
import PropTypes from 'prop-types';
import './ToDoInput.scss';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input">
    <input      
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default ToDoInput;