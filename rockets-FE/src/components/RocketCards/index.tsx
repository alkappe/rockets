import React from 'react'
import styled from 'styled-components'
import { type Rocket } from '../Rocket'
import { RocketCardElement } from '../RocketCardElement'

type RocketCardsProps = {
  rocketCards: Rocket[]
}

const Wrapper = styled.div`
    border-radius: 3px;
    margin: 0 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
  `

export const RocketCards = ({ rocketCards }: RocketCardsProps) => {
  return (
    <>
      <Wrapper>
      {rocketCards.map((rocketCard: Rocket, i: number) => { return (<RocketCardElement key={i} rocketCard={rocketCard} />) })}
      </Wrapper>
    </>
  )
}
