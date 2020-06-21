import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import logo from '../logo.svg';

class Blog extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    fetch('/api/post')
      .then(result => result.json())
      .then(posts => {
        this.setState({
          posts: posts,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state.posts);

    return (
      <div>
        <h1></h1>
        {/* <div className="" style={{ display: 'flex', width: '100%' }}> */}
        <div className="card-list">
          {this.state.posts.map(post => {
            return (
              <div
                style={{
                  boxShadow: '2px 2px 10px #ccc',
                  border: '0px',
                  borderRadius: '10px',
                }}
              >
                <div>
                  <Card.Body>
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: '10px',
                        boxShadow: '2px 2px 10px #ccc',
                      }}
                      className="mr-3"
                      // src={`https://avatars2.githubusercontent.com/u/48925577?s=460&u=2fc049b5e496f912c973bce1b97e28066c26f98c&v=4`}
                      src={logo}
                      alt="Generic placeholder"
                    />
                    <p>
                      <span
                        style={{ backgroundColor: '#cae2e9' }}
                        className="badge m-3 p-1 badge"
                      >
                        {post.category}
                      </span>
                    </p>

                    <h5>{post.title}</h5>
                    <p>{post.description.slice(0, 60)}</p>
                  </Card.Body>
                  <Card.Footer>
                    <span>{}</span>
                  </Card.Footer>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
