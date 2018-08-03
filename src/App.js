import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostList from './components/PostList';
import { fetchPosts } from './actions/posts';
import styles from './components/Post.css';

class App extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1 className={styles.title}>Posts</h1>
        <PostList posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts });

App.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  getPosts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { getPosts: fetchPosts },
)(App);
