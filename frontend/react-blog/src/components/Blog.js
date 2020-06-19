import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

export class Blog extends Component {
  render() {
    //   return (
    // <Media>
    //   <img
    //     width={200}
    //     height={200}
    //     className="mr-3"
    //     src="https://avatars2.githubusercontent.com/u/48925577?s=460&u=2fc049b5e496f912c973bce1b97e28066c26f98c&v=4"
    //     alt="Generic placeholder"
    //   />
    //   <Media.Body>
    //     <h5>{}</h5>
    //     <p>{}</p>
    //   </Media.Body>
    // </Media>;
    // //   );
    // });

    return (
      <div>
        <h1></h1>
        <div className="row">
          <div className="col">
            {/* {post.} */}
            <Media>
              <img
                width={200}
                height={200}
                className="mr-3"
                src={`https://avatars2.githubusercontent.com/u/48925577?s=460&u=2fc049b5e496f912c973bce1b97e28066c26f98c&v=4`}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
