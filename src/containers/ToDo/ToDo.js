import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTopic } from '../../actions/actionTopic'
import ToDoList from '../../components/ToDoList/ToDoList'
import ToDoInput from '../../components/ToDoInput/ToDoInput'

class ToDo extends Component {
  
  state = {
    name: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      name: value,
    })
  }

  addTopic = ({ key }) => {
    const { name } = this.state;

    if (name.length > 3 && key === 'Enter') {
      const { addTopic } = this.props;

      addTopic((new Date()).getTime(), name );

      this.setState({
        name: '',
      })
    }
  }

  render() {
    const { name } = this.state;
    const { topics } = this.props;   
    const isTopicsExist = topics && topics.length > 0;

    return (
      <div>
        <ToDoInput onKeyPress={this.addTopic} onChange={this.handleInputChange} value={name} />
        {isTopicsExist && <ToDoList tasksList={topics} />}
      </div>
    );
  }
}

export default connect(state => ({
  topics: state.topics,
}), {addTopic} )(ToDo);
