In the past, the main way to organize your HTML into sections was to use the <div> tag. You might see <div id="header"> at the top, <div id="nav"> for the navigation bar, <div id="footer"> at the bottom, and plenty of other <div> tags throughout the page.

Well if you're a developer looking at the HTML, you end up staring at a bunch of  div tags, and it can take a while to get a feel for the layout of the page. It would be easier if, instead of div tags, we had just: <header>, <nav>, and <footer>.

Well, HTML5 introduced those very tags and several others to solve this problem. They're called semantic tags. They make the HTML much nicer to read.

Check out the following HTML:

<header>  
    <nav>
        <a href=home.html>Home</a>
        <a href=about.html>About</a>
        <a href=contact.html>Contact</a>
    </nav>
</header>

<article>  
    <p>
        HTML5 semantic tags are the kids who move into your block and started organizing capture the flag games.
    </p>
</article>

<footer>  
    Here's a footer.
</footer>  
Here's the output of that HTML:

Displayed HTML with HTML5 semantic tags.

The <header>, <nav>, <article>, <section>, <main>, and <footer> tags make it easier to read the HTML and get a feel for how the page is organized. They are functionally the same as a <div> tag, but now your HTML page will be a lot easier to read as a developer!

And good news, there are more semantic HTML5 tags available for your use. Read more about them at W3 Schools HTML5 Semantic Elements.