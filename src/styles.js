import styled from "styled-components";

export const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
    color: white;
`;


export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;

export const StyledImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;
    img{
        width: 70%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const StyledHide = styled.div`
    overflow: hidden;
`;
