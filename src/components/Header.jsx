import React from 'react';
import styled from 'styled-components';


export default function Header() {

    function ReloadHome(){
        window.location.reload();
        }

    return(
        <HeaderContainer>
            <HeaderWrapper>
                <Head onClick={ReloadHome}>PhotoCapsule</Head>
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

const Head = styled.h1`
    cursor: pointer;
`