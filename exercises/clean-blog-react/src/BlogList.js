import React from 'react';
import './App.css';

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

export default Blog;