import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <StyleNav>
            <Link to="/">
                <h1>Capture</h1>
            </Link>
            <ul>
                <Link to="/">
                    <li>1. About Us</li>
                </Link>
                <Link to="/work">
                    <li>2. Our Work</li>
                </Link>
                <Link to="/content">
                    <li>3. Contact Us</li>
                </Link>
            </ul>
        </StyleNav>
    );
};
const StyleNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    h1 {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
    li {
        padding-left: 1.5rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
            padding: 1rem;
            display: inline-block;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
`;
export default Nav;
