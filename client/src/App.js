import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import Blog from './components/Blog';
import CreatePost from './components/CreatePost';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/post')
      .then(result => result.json())
      .then(posts => {
        this.setState({
          posts: posts,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="container-fluid">
        <NavbarComponent />
        <Route exact path="/" component={Home} />
        <Route path="/new-post" component={CreatePost} />

        <Route
          path="/blog"
          render={routerProps => <Blog {...routerProps} posts={posts} />}
        />
        <footer className="text-light bg-dark mt-5">
          <h1>Footer</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          impedit sequi cumque repellendus dicta officiis. Doloremque, eos hic
          eveniet, repellendus quidem incidunt voluptate magnam, officia vel
          atque deleniti optio vero!
        </footer>
      </div>
    );
  }
}

export default App;
