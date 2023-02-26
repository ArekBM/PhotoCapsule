import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <h1>PhotoCapsule</h1>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: black;
    width: 100%;
`

const HeaderWrapper = styled.div`
    font-family: 'Zen Tokyo Zoo', cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #eee;
    font-size: 2.2rem;
    padding: 3rem 8rem;

`