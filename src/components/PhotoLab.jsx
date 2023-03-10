import React, { useState, useEffect } from 'react';
import photos from '../photos.json';
import Slider from './Slider';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import * as Realm from 'realm-web'; 

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
    const [submitScore, setSubmitScore] = useState(false)
    const [name, setName] = useState('')
    const [scoreRecorded, setScoreRecord] = useState(false)
    const MAX = 2020;

    let scroll = Scroll.animateScroll;
    


    function getImage(){
        scroll.scrollTo(70);
        setRound(prevRound => prevRound + 1);
        setGuess(1960)
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
            
        } else {
            if(year > guess){
                setRoundScore(guess - year + 100)
                setPoints(prevState => prevState + (guess - year + 100))
            }
            else if(year < guess){
                setRoundScore(year - guess + 100)
                setPoints(prevState => prevState + (year - guess + 100))
            }

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

    function handleName(e){
        setName(e.target.value)
    }

    //Submits Score 
    
    useEffect(() => {
        if(submitScore){
            const REALM_APP_ID = 'scoreboard-dafoe';
            const app = new Realm.App({id: REALM_APP_ID});
            const credentials = Realm.Credentials.anonymous();
    
            async function insertScore(scoresData, score){
                const user = await app.logIn(credentials)
                const db = app.currentUser.mongoClient('mongodb-atlas').db('Leaderboard');
                const collection = db.collection(scoresData)
                const result = await collection.insertOne(score)
                return result
            }
            
            console.log('Test ')
            insertScore('scores', { name : name, score : points })
                .then((result) => {
                    console.log('Score inserted successfully:', result.insertedId);
                })
                .catch((error) => {
                    console.error('failed to insert data:', error)
                })
            setSubmitScore(false);
        }
    }, [submitScore]);

    return (
        <PhotoLabWrapper>
            {(round === 1) && <Tag><input type='text' name='name' onChange={handleName} placeholder='Tag:'></input></Tag>}
            <h1>Round {round} of 5</h1>
            <img src={image} />
            <Slider checkGuess={checkGuess} handleSlider={handleSlider} MAX={MAX} guess={guess} year={year} hasGuessed={boolGuess} getImage={getImage} points={points} roundScore={roundScore} round={round} newGame={newGame} setSubmitScore={setSubmitScore} />

        </PhotoLabWrapper>

    )
}

const PhotoLabWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Tag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index-2;
`



export default Photo;