import React from 'react';
import './styles.css'

function NaveBar1(props) {
    return (
        <>

        <nav className="nav">
            <a href="/" className={"site-title"}>
                Site Name
            </a>
            <ul>
                <li className={"active"}>
                    <a href="/Home" >Home</a>
                </li>
                <li>
                    <a href="/product">Product</a>
                </li>
                <li>
                    <a href="/location" >Location</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default NaveBar1;