import React from 'react'
import { RocketListElement, type Rocket } from '../Rocket'
import styled from 'styled-components'

type RocketListProps = {
  rockets: Rocket[]
  onSuccessfulDelete: () => void
}

// get the array from db

const List = styled.div`
    border-radius: 3px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
  `

export const RocketList = ({ rockets, onSuccessfulDelete }: RocketListProps) => {
  return (
        <List>
            List of Rockets:
          {rockets.map((rocket: Rocket, i: number) => { return (<RocketListElement onSuccessfulDelete={ onSuccessfulDelete} key={i} rocket={rocket}/>) })}
        </List>
  )
}
