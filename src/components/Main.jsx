import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoLab from './PhotoLab';
import Button from './Utils/Button';
import Leaderboard from './LeaderboardPage';
import rolli from '../assets/rolli.jpeg';

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
            {mode === 'Main' && <img src={rolli} />}
            {mode === 'Play' && <PhotoLab />}
            {mode === 'Leaderboard' && <Leaderboard />}
            <GamemodeDiv>
                {mode === 'Main' && <Button onClick={handlePlay} text='Play'></Button>}
                {mode === 'Main' && <Button onClick={handleLeaderboard} text='Leaderboard'></Button>}
            </GamemodeDiv>
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
    background-color: #f2e3cc;
`
const GamemodeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 200px;
    gap: 100px;
`


