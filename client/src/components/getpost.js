import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/postActions';
import PropTypes from 'prop-types';
import '../styles/blogs.css';

class getPost extends Component {
    
    componentWillMount(){
        this.props.fetchPost(this.props.id);
    }

    render() {
        const postDetails = (
            <div className='post' key={this.props.postDets._id}>
                <h3>{this.props.postDets.title}</h3>
                <h5>🖊 {this.props.postDets.username}</h5>
                <span className="postDate">
                    {new Date(this.props.postDets.createdAt).toDateString()}
                </span>
                <p>{this.props.postDets.description}</p>
            </div>
        );
        return(
            <div>
                {postDetails}
            </div>
        )
    }
}
getPost.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
    postDets: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
    postDets: state.props.post
});

export default connect(mapStateToProps, {fetchPost})(getPost);