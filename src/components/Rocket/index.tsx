import React from 'react'
import styled from 'styled-components'
import { deleteRocket } from '../../api'

export type Rocket = {
  _id: string
  name: string
  description: string
  height: number
  diameter: number
  mass: number
}
type Props = {
  rocket: Rocket
  onSuccessfulDelete: () => void
}

const Item = styled.div`
    border-radius: 3px;
    margin: 0 1px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `

export const RocketListElement = ({ rocket, onSuccessfulDelete }: Props) => {
  const onDeleteButtonClick = async (_id: string) => {
    await deleteRocket(_id)
    onSuccessfulDelete()
  }

  return (
        <Item>
            <h3>🚀</h3>
            <p>{rocket.name}</p>
        {/* <p>{rocket.description}</p> */}
            <p>{rocket.height}</p>
            <p>{rocket.diameter}</p>
            <p>{rocket.mass}</p>
            <button>✏️</button>
          <button onClick={() => { void onDeleteButtonClick(rocket._id) }}>❌</button>
        </Item>
  )
}
