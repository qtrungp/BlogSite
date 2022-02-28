import './App.css';
import Post from './components/post';
import Postform from './components/postform';
import MyPosts from './components/myPosts';
import MyDrafts from './components/mydrafts';
// import Blog from './components/blog';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import store from './store';
import NavBar from './navbar/navbar';
import { Route, Routes } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <header>
          <NavBar />
        </header>
        <div className='App'>
          <Routes>
            <Route exact path="/" element= {<Post />} />
            <Route path="/postform" element= {<Postform />} />
            <Route path="/myposts" element= {<MyPosts />} />
            <Route path="/mydrafts" element= {<MyDrafts />} />
            {/* <Route path="/:id" element={<Blog/>} /> */}
          </Routes>
        </div>
      </Provider>
    );
  }
}

export default App;


