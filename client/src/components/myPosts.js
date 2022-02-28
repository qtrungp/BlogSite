import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchDrafts} from '../actions/postActions';
import PropTypes from 'prop-types';
import '../styles/blogs.css';
import Getpost from './getpost';

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state= {
            id:''
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        this.setState({ id : e.target.value});
        Getpost(this.state.id);
    }
    
    componentWillMount(){
        this.props.fetchDrafts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div className='blog' key={post.id}>
                <h3>{post.title}</h3>
                <h5>🖊 {post.username}</h5>
                <span className="postDate">
                    {new Date(this.props.postDets.createdAt).toDateString()}
                </span>
                <button onClick= {this.handleClick} value={post._id}>Read More</button>
            </div>

        ));
        return(
            <div>
                {postItems}
            </div>
        )
    }
}
MyPosts.propTypes = {
    fetchMyPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchDrafts})(MyPosts);