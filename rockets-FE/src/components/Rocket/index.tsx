import React from 'react'
import styled from 'styled-components'

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
  onDelete: (_id: string) => void
  onEdit: (rocket: Rocket) => void
}

const Item = styled.div`
    border-radius: 3px;
    margin: 0 1px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `

export const RocketListElement = ({ rocket, onDelete, onEdit }: Props) => {
  return (
        <Item>
            <h3>🚀</h3>
            <p>{rocket.name}</p>
        {/* <p>{rocket.description}</p> */}
            <p>{rocket.height}</p>
            <p>{rocket.diameter}</p>
            <p>{rocket.mass}</p>
            <button onClick={() => { onEdit(rocket) } }>✏️</button>
            <button onClick={() => { onDelete(rocket._id) }}>❌</button>
        </Item>
  )
}
