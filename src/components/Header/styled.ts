import styled from "styled-components";
import background from "../../assets/images/structure/header-background.jpg"

export const HeaderContainer = styled.header`
background: url(${background});
background-size: cover;
width: 100%;
height: 16.8rem;
display: flex;
justify-content: center;
align-items: start;
img{
    margin-top: 4rem;
}
`