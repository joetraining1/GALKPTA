import styled from "styled-components";

export const FloatBody = styled.div`
    height: ${props => props.height}svh;
    overflow: hidden;
    width: ${props => props.width}%;
    background: #fff;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    border-radius: 0.5vw;
    display: flex;
    justify-content: space-evenly;
`