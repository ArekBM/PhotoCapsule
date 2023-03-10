import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoLab from './PhotoLab';
import Button from './Utils/Button';
import Leaderboard from './LeaderboardPage';

export default function Main() {
    const [mode, setMode] = useState('Main')

    function handlePlay() {
        setMode('Play')
    }

    function handleLeaderboard(){
        setMode('Leaderboard')
    }

    return (
        <MainWrapper>
            {mode === 'Play' && <PhotoLab />}
            {mode === 'Leaderboard' && <Leaderboard />}
            {mode === 'Main' && <Button onClick={handlePlay} text='Play'></Button>}
            {mode === 'Main' && <Button onClick={handleLeaderboard} text='Leaderboard'></Button>}
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: platinum;
    margin-left: 0;
    padding-bottom: 20px;
    background-color: #E9E9EB;
`



