import React, { Component } from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>
            Welcome to my REACT BLOG !
            <span role="img" aria-label="emoji">
              😎😎
            </span>{' '}
          </h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Natus accusamus
            unde, in veritatis modi provident repellendus incidunt similique
            aspernatur quos voluptatibus labore, mollitia id repudiandae beatae
            dicta fugit accusantium quam?
          </p>
          <p>
            <Button className="BoxShadow" variant="primary">
              Learn more
            </Button>
          </p>
        </Jumbotron>
        <Container>
          <h1 className="text-center">Latest Post</h1>
          <div className="row">
            <div className="col">
              <div className="BoxShadow card p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis similique eveniet voluptas dicta itaque voluptates rem
                neque ipsam eos numquam molestiae mollitia harum, non odit ea
                labore deserunt, natus perferendis?
              </div>
            </div>
            <div className="col">
              <div className="BoxShadow card p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis similique eveniet voluptas dicta itaque voluptates rem
                neque ipsam eos numquam molestiae mollitia harum, non odit ea
                labore deserunt, natus perferendis?
              </div>
            </div>
            <div className="col">
              <div className="card BoxShadow p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis similique eveniet voluptas dicta itaque voluptates rem
                neque ipsam eos numquam molestiae mollitia harum, non odit ea
                labore deserunt, natus perferendis?
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const styles = {
  BoxShadow: '0px 2px 10px 2px #aaaaaa',
};
