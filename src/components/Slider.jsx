import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Utils/Button';
import ResultScreen from './ResultScreen';
import Ruler from './Ruler';



export default function Slider({checkGuess, handleSlider, MAX, guess, year, hasGuessed, getImage, points, roundScore, round, newGame, setSubmitScore}) {

    return(
        <>
            <SlideContainer >
                <Box>{guess}</Box>
                <RangeSlider 
                    type='range' 
                    min='1918' 
                    max={MAX} 
                    className='guessSlider' 
                    onChange={handleSlider} 
                    value={guess} 
                />
                {!hasGuessed && <Button onClick={checkGuess} text={round < 5 ? 'Submit' : 'Results'}></Button>}
            </SlideContainer>
            <ResultScreen year={year} checkGuess={checkGuess} hasGuessed={hasGuessed} getImage={getImage} points={points} roundScore={roundScore} round={round} newGame={newGame} guess={guess} setSubmitScore={setSubmitScore}/>
        </>
    )
}

const SlideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 5px;
`
const RangeSlider = styled.input`
    width: 100%;
    padding-bottom: 40px;
`

const Box = styled.h1`
    background-color: black;
    color: white;
    padding: 10px;
`
