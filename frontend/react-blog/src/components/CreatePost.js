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

  // componentDidMount() {
  //   fetch('/new', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(this.state),
  //   });
  // }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state),
      });
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    // console.log(this.state);
    return (
      <div className="container p-3 m-4">
        <div className="row">
          <div className="col-md-7">
            <form method="POST" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                  id="title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">category</label>
                <select
                  name="category"
                  className="form-control"
                  id="category"
                  style={{ width: '30%' }}
                  onChange={e => this.setState({ category: e.target.value })}
                >
                  <option value="">select category</option>
                  <option value="sport">sport</option>
                  <option value="programming">programming</option>
                  <option value="food">food</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className="form-control"
                  rows="9"
                  cols="4"
                  onChange={e => this.setState({ description: e.target.value })}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="BoxShadow btn btn-primary px-4">post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
