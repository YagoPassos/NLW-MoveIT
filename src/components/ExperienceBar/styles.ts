import styled from 'styled-components';

export const Header = styled.div`
    

    display:flex;
    align-items:center;

    >span{
        font-size:1rem;
    }

    >  div{
        flex: 1;
        height:4px;
        border-radius: 4px;
        background: var(--gray-line);
        margin: 0 1.5rem;
        position:relative;

    }
`

export const Container = styled.div`
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display:flex;
    flex-direction:column;
`

export const ExpProgress = styled.div`
    background-color: var(--green);
    height: 4px;
`
export const CurrentExperience = styled.span`
    position:absolute;
    top:12px;
    transform: translateX(-50%);
`
    ;
