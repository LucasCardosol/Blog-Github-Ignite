import styled from "styled-components";

export const SearchBarContainer = styled.section`
    width: 100%;
    margin-top: 4.5rem;
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }
    h3{
        color: ${(props) => props.theme['base-subtitle']};
    }
    span{
        color: ${(props) => props.theme['base-span']};
    }
    input{
        width: 100%;
        background-color: ${(props) => props.theme['base-input']} ;
        padding: 12px 16px;
        outline: none;
        border: none;
        border: 1px solid ${(props) => props.theme['base-border']};
        border-radius: 6px;
        color: ${(props) => props.theme['base-text']};
        font-family: 'Nunito',sans-serif;
        font-size: 1rem;
        &:focus{
            border-color: ${(props) => props.theme['blue']};
            transition: 0.2s;
        }
        &::placeholder{
            color: ${(props) => props.theme['base-label']};
        }
    }
`