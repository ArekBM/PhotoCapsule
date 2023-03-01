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
            <RoundScore>
                {roundScore}
            </RoundScore>
            <Box>
                Photo was taken in {year}
            </Box>
            <Ruler min={1918} max={2020} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} year={year} guess={guess} />
            <Total>
                <h2>Total: {points} </h2>
            </Total>
            {!(round === 5) && <Button onClick={getImage} text='Next Image'></Button>}
            {round === 5 && <Button onClick={newGame} text='New Game'></Button>}
        </ResultWrapper>
    )
}

const Box = styled.h2`
    background-color: black;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Divider = styled.div`
    display: flex;
    background-color: black;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 10px;
    width: 100%;
`

const Total = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const RoundScore = styled.h1`
    color: black;
`
