import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoLab from './PhotoLab';
import Button from './Utils/Button';

export default function Main() {
    const [mode, setMode] = useState()

    function handleMode() {
        setMode('play')
    }

    console.log(mode)

    return (
        <MainWrapper>
            {mode === 'play' && <PhotoLab />}
            {!mode && <Button onClick={handleMode} text='Play'></Button>}
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
    
`


