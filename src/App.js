import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions/index';
import Posts from './components/Posts';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.filteredPosts);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actions.fetchPosts());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <div id="app" className="app">
      <Header />
      <main id="main" className="main container-fluid">
        <div id="posts-container" className="posts-container">
          {posts.length > 0 &&
            posts.map((post, index) => {
              return <Posts key={index} post={post} />;
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
