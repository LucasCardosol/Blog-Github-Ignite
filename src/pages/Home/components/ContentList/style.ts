import styled from "styled-components";

export const ContentListContainer = styled.section`
    margin-top: 3rem;
    
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    a{
        display: block;
        width:100%;
        padding: 32px;
        height: 16.25rem;
        background-color: ${(props) => props.theme['base-post']};
        border: 2px solid ${(props) => props.theme['base-post']};
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            transition: 0.2s;
            border-color: ${(props) => props.theme['base-border']} ;
        }
    }
    header{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.25rem;
    }
    h2{
        color: ${(props) => props.theme['base-title']};
    }
    span{
        color: ${(props) => props.theme['base-span']};
        white-space: nowrap;
    }
    p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        line-clamp: 4; 
        -webkit-box-orient: vertical;
        color: ${(props) => props.theme['base-text']};
        max-width: 22rem;
    }
`