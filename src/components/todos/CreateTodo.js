import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state)
  }
  
  render() {
    console.log(this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add todo" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData })}
)

export default connect(null, mapDispatchToProps)(CreateTodo);
