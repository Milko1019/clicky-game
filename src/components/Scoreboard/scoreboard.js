import React from 'react';
import styled from 'styled-components';

const ScoreboardBox = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
`

const Logo = styled.h1`
    
    /* color: red; */
`

const messageColor = (props) => {
    var red = "red";
    
    if (props.message === "Almost Had It") {
        return red.slice(1, -1);;
    }
}
const Message = styled.h1`
    color: ${messageColor};
    /* color: ${(props) =>
    (props.message === "Better luck next time" ) ? "red" : ""
    }; */
`;

const Score = styled.h1`
`


const Scoreboard = (props) => {
    return (
        <ScoreboardBox>
            <Logo>Clicky-Shape</Logo>
            <Message >{props.message}</Message>
            <Score>Score: {props.currentScore} | Top Score: {props.topScore}</Score>
        </ScoreboardBox>
    )
}

export default Scoreboard;