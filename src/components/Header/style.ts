import styled from 'styled-components'

export const Container = styled.header`
    background: var(--purple);
`
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem 1rem 12rem;
    display: flex;
    justify-content: space-between;

    button{ 
        font-size:1rem;
        color: #ffffff;
        background: var(--purple-light);
        height: 3rem;
        padding: 0 2rem;
        border: none;
        border-radius: 0.25rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`