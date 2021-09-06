import React from 'react';
import home1 from '../img/IMG_0001_Original.jpg'
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage,StyledHide } from '../styles';


const AboutSection =()=>{
    return(
       <StyledAbout>
            <StyledDescription >
                <div className="title">
                    < StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    < StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    < StyledHide>
                        <h2>true.</h2>
                    </ StyledHide>
                </div>
                <p>
                    Contact us for any photograhy ideas that you have. We have professionals with amazing skills.
                </p>
                <button>Contact Us</button>
            </StyledDescription >
            <StyledImage>
                <img src={home1} alt="bear" />
            </StyledImage>
        </StyledAbout>
    );
}

//Styled 

// const StyledAbout = styled.div`
//     min-height: 90vh;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 5rem;
//     color: white;
// `;
// const StyledDescription = styled.div`
//     flex: 1;
//     padding-right: 5rem;
//     h2{
//         font-weight: lighter;
//     }
// `;

// const StyledImage = styled.div`
//     flex: 1;
//     overflow: hidden;
//     img{
//         width: 80%;
//         height: 80vh;
//         object-fit: cover;
//     }
// `;

// const StyledHide = styled.div`
//     overflow: hidden;
// `;


export default AboutSection;