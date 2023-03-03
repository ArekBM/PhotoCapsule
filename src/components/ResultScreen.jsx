import React from 'react';
import styled from 'styled-components';
import Button from './Utils/Button';
import Ruler from './Ruler.jsx';


export default function Points({year, hasGuessed, getImage, points, roundScore, round, newGame, guess }) {
    console.log(hasGuessed)
    if(hasGuessed === true)
    return(
        <ResultWrapper>
            <Divider>
                <h1>Points</h1>
            </Divider>
            {roundScore >= 80 && <RoundScore>{roundScore}</RoundScore>}
            {80 > roundScore && roundScore >= 60 && <RoundScore_Orange>{roundScore}</RoundScore_Orange> }
            {roundScore < 60 && <RoundScore_Red>{roundScore}</RoundScore_Red>}
            <Box>
                Photo was taken in {year}
            </Box>
            <Ruler min={1918} max={2020} year={year} guess={guess} />
            <Total>
                <h2>Total: {points} </h2>
            </Total>
            {!(round === 5) && <Button onClick={getImage} text='Next Image'></Button>}
            {round === 5 && <Button onClick={newGame} text='New Game'></Button>}
        </ResultWrapper>
    )
}

const Box = styled.div`
    background-color: black;
    color: white;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    font-size: 1.8rem;
    font-weight: 700;
    outline: 2px solid white;
    text-align: center;
    margin: 2% auto;
`

const Divider = styled.div`
    font-family: 'Zen Tokyo Zoo', cursive;
    display: flex;
    background-color: black;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2.2rem;
    padding: 1rem 8rem;
    width: 100%;
`

const Total = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    padding: 8px;
    font-size: 700;
    color: black;
    text-align: center;
    --webkit-text-stroke-width: 2px;
    --webkit-text-stroke-color: white;
`

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const RoundScore = styled.div`
    font-size: 3rem;
    margin: 20px auto;
    text-align: center;
    color: green;
    font-weight: 700;
`
const RoundScore_Orange = styled(RoundScore)`
    color: orange;
`

const RoundScore_Red = styled(RoundScore)`
    color: red;
`