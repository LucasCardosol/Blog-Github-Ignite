import styled from "styled-components";

export const ContentInfo = styled.section`
    padding: 2rem;
    background: ${(props) => props.theme['base-profile']};
    border-radius: 10px;
    header{
        display: flex;
        justify-content: space-between;
    }
    a{
        text-transform: uppercase;
        font-size: 0.75rem;
        color: ${(props) => props.theme['blue']};
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;
        border: 1px solid transparent;
        padding: 0 2px;
        
        &:hover{
            transition: 0.2s;
            border-bottom: 1px solid ${(props) => props.theme['blue']};
        }
        img{
            height: 11.25px;
            width: 11.25px;
        }
    }
    h1{
      color: ${(props) => props.theme['base-title']};
      margin-top: 1.25rem;
    }
    ul{
        display: flex;
        gap: 2rem;
        margin-top: 0.5rem;
    }
    li{
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: ${(props) => props.theme['base-text']};
        img{
            height: 18px;
            width: 18px;
        }
    }
`
export const MarkdownContainer = styled.section`
    color: ${(props) => props.theme['base-text']};
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    p{
        margin-bottom: 1rem;
    }
    h2{
        margin-top: 2rem;
        border-bottom: 1px solid;
        color: ${(props) => props.theme['base-text']};
        padding-bottom: 0.5rem;
        margin-bottom: 0.5rem;
    }
    a{
        color: ${(props) => props.theme['blue']};
        text-decoration: underline;
    }
    img{
        width: 100%;
    }
`