import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import logo from '../logo.svg';

class Blog extends Component {
  render() {
    console.log(this.props.posts);

    return (
      <div>
        <h1></h1>
        {/* <div className="" style={{ display: 'flex', width: '100%' }}> */}
        <div className="row  container-fluid">
          {this.props.posts.map(post => {
            return (
              <div
                style={{
                  borderRadius: '10px',
                  border: '0px',
                }}
                className="  card m-3 col-md-3 col-lg-3 col-sm-6 BoxShadow"
              >
                <div className="">
                  <>
                    <img
                      style={{
                        borderRadius: '10px',
                      }}
                      className="mr-3 card-img"
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
                  </>
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
