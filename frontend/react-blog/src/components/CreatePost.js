import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
      description: '',
    };
  }
  handleTItle = e => {
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    console.log(this.state.title);
    return (
      <div className="container">
        <form>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleTItle}
            id="title"
          />
          <div></div>

          <select
            name="category"
            id="category"
            onChange={e => this.setState({ category: e.target.value })}
          >
            <option value="sport">sport</option>
            <option value="programming">programming</option>
            <option value="food">food</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
    );
  }
}

export default CreatePost;
