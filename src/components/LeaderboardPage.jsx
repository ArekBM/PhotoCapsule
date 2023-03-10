import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Realm from 'realm-web';

export default function Leaderboard() {
    const [scores, setScores] = useState([])
    useEffect(() => {
        async function fetchData(){
        const REALM_APP_ID = 'scoreboard-dafoe';
        const app = new Realm.App({id: REALM_APP_ID});
        const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
            const allScores = await user.functions.GetScores();
            setScores(() => allScores);
        } catch(error){
            console.error(error);
        }
    }
    fetchData();
    },[]);
    return(
        <LeaderBoardWrapper>
            <div>
                <h1>Leaderboard</h1>
            </div>
            
            <Columns>
                <h3>Tag</h3>
                <h3>Score</h3>
            </Columns>
            {scores.map((score) => {
                return (
                <Columns key={score._id}>
                    <p>{score.name}</p>
                    <p>{score.score}</p>
                </Columns>
                )
            })}
        </LeaderBoardWrapper>
        
    )
}

const Columns = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const LeaderBoardWrapper = styled.div`
`