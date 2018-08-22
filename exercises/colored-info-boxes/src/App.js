import React, { Component } from 'react';
// import Avatar from './Avatar'
import Box from './Box'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() { 
    const styles = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: 'space-between',
      margin: '30px',
     flexDirection: 'column',
    }

    return (
      <div className="App" style={styles}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Colored Info Boxes</h1>
        </header>
        <p className="App-intro">
          Welcome to my first React project using props. I have created a component that will be used 10 times.The components are receving props for this background color, Title, Subtitle, and text. 
        </p>
      <Box title="Box one" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      <Box title="Box two" subtitle="this is a subtitle" info="Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Nulla porttitor massa id neque aliquam. Risus pretium quam vulputate dignissim suspendisse in est ante in. Sit amet porttitor eget dolor morbi non arcu risus quis. Laoreet id donec ultrices tincidunt arcu non sodales."/>
      <Box title="Box three" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      <Box title="Box four" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      <Box title="Box five" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      <Box title="Box six" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      <Box title="Box seven" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      <Box title="Box eight" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      <Box title="Box nine" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      <Box title="Box ten" subtitle="this is a subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Est sit amet facilisis magna etiam tempor. Aliquam eleifend mi in nulla posuere sollicitudin. Lobortis mattis aliquam faucibus purus in massa. Non enim praesent elementum facilisis leo vel fringilla."/>
      
      </div>
    );
  }
}

export default App;
