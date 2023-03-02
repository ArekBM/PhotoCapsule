import React, { useState } from 'react';
import photos from '../photos.json';
import Slider from './Slider';
import styled from 'styled-components';
import Scroll from 'react-scroll';


function Photo(){
    const randomNumber = Math.floor(Math.random() * photos.length)
    const firstImage = photos[randomNumber]

    const [image, setImages] = useState(firstImage.img)
    const [year, setYear] = useState(firstImage.year)
    const [guess, setGuess] = useState(1960);
    const [points, setPoints] = useState(0);
    const [boolGuess, setBoolGuess] = useState(false);
    const [round, setRound] = useState(1)
    const [roundScore, setRoundScore] = useState(0);
    const MAX = 2020;

    let scroll = Scroll.animateScroll;
    


    function getImage(){
        setRound(prevRound => prevRound + 1)
        setBoolGuess(false)
        setRoundScore(0)
        const randomNumber = Math.floor(Math.random() * photos.length)
        const imageArray = photos;
        let newImage = imageArray[randomNumber]
        let imgYear = newImage.year
        setImages(newImage.img)
        setYear(imgYear)
    }

    function checkGuess(){
        if(year === guess){
            setRoundScore(100)
            setPoints(prevState => prevState + 100)

            console.log('Winner')

            //FIX EVENTUALLY
            
        } else {
            if(year > guess){
                setRoundScore(guess - year + 100)
                setPoints(prevState => prevState + (guess - year + 100))
            }
            else if(year < guess){
                setRoundScore(year - guess + 100)
                setPoints(prevState => prevState + (year - guess + 100))
            }
            // FIX EVENTUALLY
        }
        setBoolGuess(true)
        scroll.scrollToBottom();
    }

    function newGame() {
        setRound(0);
        setPoints(0);
        getImage();
    }


    function handleSlider(e){
        setGuess(e.target.value)
    }

    console.log(year)
    console.log(roundScore)

    return (
        <PhotoLabWrapper>
            <h1>Round {round} of 5</h1>
            <img src={image} />
            <Slider checkGuess={checkGuess} handleSlider={handleSlider} MAX={MAX} guess={guess} year={year} hasGuessed={boolGuess} getImage={getImage} points={points} roundScore={roundScore} round={round} newGame={newGame}/>
        </PhotoLabWrapper>

    )
}

const PhotoLabWrapper = styled.div`
    display: flex;
    flex-direction: column;
`



export default Photo;