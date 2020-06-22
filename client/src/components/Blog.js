import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

class Blog extends Component {
  state = {
    posts: [],
  };

  render() {
    console.log(this.props.posts);
    // const { posts } = this.props;

    return (
      <div>
        <h1></h1>
        <div className="row">
          <div className="col">
            {this.props.posts.map(post => {
              return (
                <Media>
                  <img
                    width={200}
                    height={200}
                    className="mr-3"
                    src={`https://avatars2.githubusercontent.com/u/48925577?s=460&u=2fc049b5e496f912c973bce1b97e28066c26f98c&v=4`}
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <h5>{post.title}</h5>
                    <p>{post.description.slice(0, 100)}</p>
                  </Media.Body>
                </Media>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
