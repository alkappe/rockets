import React from 'react'
import styled from 'styled-components'
import { deleteRocket } from '../../api'
import { type Rocket } from '../Rocket'

type Props = {
  rocketCard: Rocket
}

const Wrapper = styled.div`
    border-radius: 3px;
    margin: 0 1px;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06);
    margin: 20px 30px;
  `

export const RocketCardElement = ({ rocketCard }: Props) => {
  return (
      <Wrapper>
        <h3>🚀</h3>
        <p>{rocketCard.name}</p>
        <p>{rocketCard.description}</p>
        <p>{rocketCard.height}</p>
        <p>{rocketCard.diameter}</p>
        <p>{rocketCard.mass}</p>
      </Wrapper>
  )
}
