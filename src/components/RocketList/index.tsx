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
const P = styled.p`
  margin: 0 0 10px 0;
  align-self: flex-start;
`

export const RocketList = ({ rockets, onSuccessfulDelete }: RocketListProps) => {
  return (
        <List>
           <P>List of Rockets:</P>
      {rockets.map((rocket: Rocket, i: number) => {
        return (<RocketListElement onSuccessfulDelete={onSuccessfulDelete} key={i} rocket={rocket} />)
      })}
        </List>
  )
}
