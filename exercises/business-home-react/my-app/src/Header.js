import React from 'react'

const Header = () => {
    return (
        <header id="header">
        <nav className="nav">
            <ul className="global-nav">
                <li>
                    <a href="https://www.instagram.com/cutiepatootiebear/?hl=en">Jameel's IG</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jameelmatin/">Linked In</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UC3liFjgQIjKeaZfpPPKkw1Q?view_as=subscriber">Jam's Youtube</a>
                </li>
                <li>
                    <a href="mailto:cutiepatootiebears@gmail.com?Subject=Hello%20VSchool" target="_top">Send Mail</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header