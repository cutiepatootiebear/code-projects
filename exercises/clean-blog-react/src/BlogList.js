import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Blog = (props) => {
console.log("this is props=>", props)
    return (
        <div className="blog-container">
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <p>Posted by {props.author} on {props.date} </p>
        </div>
       
    )
}

Blog.prototype = {
    title: PropTypes.string.isRequired,
};

export default Blog;






