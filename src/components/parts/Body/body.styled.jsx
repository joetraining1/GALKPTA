import styled from "styled-components";

export const GuestBody1 = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100svh;
    background-image: url(${props => props.IMG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`