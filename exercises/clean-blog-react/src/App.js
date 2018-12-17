import React from 'react';
import Blog from './BlogList';
import Header from './Header';

import './App.css';

const App = () => {
    const arrOfData = [{
        title: "Man must explore, and this is exploration at its greatest",
        subTitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        date: "September 24, 2018"
    }, {
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subTitle: "",
        author: "Start Bootstrap",
        date: "September 24, 2018"
    }, {
        title: "Science has not yet mastered prophecy",
        author: "Start Bootstrap",
        date: "September 24, 2018"
    }, {
        title: "Failure is not an option",
        author: "Start Bootstrap",
        date: "September 24, 2018"
    }]


    // So mapped elements expect you to add a property called key to the element being repeated. You can choose anything that will help uniquely identify the element. 
    // One easy way to do that is to add the index of the item in the array and some piece data from the element to the element as the key:
    const blogPost = arrOfData.map((data, i) => {
        return <Blog key ={data.title + i}
                    title={data.title}
                    subTitle={data.subTitle}
                    author={data.author}
                    date={data.date} />
    })

    // The only changes made here are parentheses around the arrow function's parameters (since I added a second one, parentheses are now required), 
    // the new  index parameter in the function, and the key property to the root element I'm returning inside the .map().

    return (
        <div className="container">
            <Header />
                {blogPost}
        </div>
    )
}

export default App;


{/* <Header />
    <Navbar />
<BlogList />
    <BlogPost />
<Footer /> */}