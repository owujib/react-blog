import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
      description: '',
      redirectToPost: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let data = {
      title: this.state.title,
      category: this.state.category,
      description: this.state.description,
    };
    fetch('/api/post/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    this.setState({
      redirectToPost: true,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={this.state.title}
              placeholder="enter title"
              onChange={e => this.setState({ title: e.target.value })}
              id="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category"></label>
            <select
              className="form-control"
              name="category"
              id="category"
              onChange={e => this.setState({ category: e.target.value })}
            >
              <option>select category</option>
              <option value="sport">sport</option>
              <option value="programming">programming</option>
              <option value="food">food</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <textarea
              className="form-control"
              placeholder="description..."
              name="description"
              id="description"
              cols="30"
              rows="10"
              onChange={e => this.setState({ description: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary BoxShadow">submit</button>
          </div>
          {this.state.redirectToPost && <Redirect to="/blog" />}
        </form>
      </div>
    );
  }
}

export default CreatePost;
