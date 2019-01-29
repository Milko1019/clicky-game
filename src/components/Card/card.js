import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

const boxmove = keyframes`
  0%   {top: 0px;}
  25%  {top: 200px;}
  75%  {top: 50px}
  100% {top: 100px;}
`;

const PictureBox = styled.div`
  height: 12rem;
  margin: 1rem;
  text-align: center;
  transition: transform .2s
  width: 16rem;
  
  &:hover {
    animation: ${boxmove} 5s infinite;
    background-color: rgba(35, 35, 35, 0.65);
    cursor: pointer;
    transform: scale(1.05);
    
  }
`
const Img = styled.img`
    width: 15rem;
    height: 10rem;
`

function Card(props) {
    return (
        <PictureBox
            id={props.id}
            value={props.id}
            co-native={props.coNative}
            onClick={() => props.handleImgCardClick(props.id)}
        >
            <Img src={props.image} alt={`${props.name}`} />
        </PictureBox>
    )
}

export default Card;