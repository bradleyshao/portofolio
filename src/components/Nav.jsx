import React from 'react';
import styled from 'styled-components';


const Nav = ()=>{
    return (
        <StyledNav>
            <h1><a href="#" id="logo">Capture</a></h1>
            <ul>
                <li>
                    <a href="#"> About Us</a>
                </li>
                <li>
                    <a href="#"> Our Work</a>
                </li>
                <li>
                    <a href="#"> Contact Us</a>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    a{
        color:white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style:none;
        
    }

    li{
        padding-left: 10rem;
        position: relative;
        font-family: "Lobster",cursive;
        a{
            font-size:1.2rem;
        }
    }
    #logo{
        font-family: "Lobster",cursive;
        font-weight: lighter;
        font-size: 2rem;
    }
`;
export default Nav;