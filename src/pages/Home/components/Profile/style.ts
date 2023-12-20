import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    height: 13.25rem;
    padding: 2rem;
    background: ${(props) => props.theme['base-profile']};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`

export const ImageProfile = styled.div`
    img{
        height: 9.25rem;
        width: 9.25rem;
        border: none;
        border-radius: 8px;
    }
`

export const Info = styled.div`
    flex: 1;
    header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
    h1{
      color: ${(props) => props.theme['base-title']};  
    }
    a{
        text-transform: uppercase;
        font-size: 0.75rem;
        color: ${(props) => props.theme['blue']};
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        border: 1px solid transparent;
        &:hover{
            border-bottom: 1px solid ${(props) => props.theme['blue']};
            transition: 0.2s;
        }
        img{
            height: 11.25px;
            width: 11.25px;
        }
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 40px + 0.5rem);
    }
    p , li {
        color: ${(props) => props.theme['base-text']}  
    }
    p{
        max-height: 52px;
        overflow-y: auto;
    }
    li{
        display: flex;
        align-items: center;
        gap: 0.25rem;
        img{
            height: 18px;
            width: 18px;
        }
    }
    ul{
        display: flex;
        gap: 1.5rem;
    }
`