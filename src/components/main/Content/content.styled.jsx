import styled from 'styled-components'

export const MainBody = styled.div`
    display: flex;
    justify-content: flex-start;
    height: fit-content;
    min-height: 93svh;
    margin-top: ${props => props.MT}svh;
    width: 100%;
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.lebar}%;
    height: fit-content;
    min-height: 93svh;
    justify-content: space-between;
    margin-left: ${props => props.ML};
    flex: wrap;
`