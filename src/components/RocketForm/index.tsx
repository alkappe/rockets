import React, { useReducer } from 'react'
import styled, { css } from 'styled-components'
import formReducer, { initialFormState } from '../../reducers/formReducer'
import { RocketList } from '../RocketList'
import { createRocket } from '../../api'

const Form = styled.form`
  border-radius: 3px;

  margin: 0 10px;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  alignItems: center;
  backgroundColor: white;
  borderRadius: 5px;
  color: black;
  cursor: pointer;
  display: flex;
  fontSize: 12px;
  fontWeight: 400;
  justify-content: space-between;
  flex-direction: column;
  marginBottom: 10px;
  padding: 4px;
  userSelect: none;
`
type Props = {
  closeModal: () => void
  onSuccessfulSubmit: () => void
}

export const RocketForm: React.FC<Props> = ({ closeModal, onSuccessfulSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'HANDLE INPUT CHANGE',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createRocket(state)
    onSuccessfulSubmit()
    closeModal()
  }

  return (
    <Form onSubmit={(e) => { void handleOnSubmit(e) }}>
        <Label>
            Rocket name:
            <input type='text' value={state.name} name="name" onChange={handleInputChange}/>
        </Label>
        <Label>
            Description:
            <textarea value={state.description} name="description" onChange={handleInputChange}/>
        </Label>
        <Label>
            Height:
            <input type="number" value={state.height} name="height" onChange={handleInputChange}/>
        </Label>
        <Label>
            Diameter:
            <input type="number" value={state.diameter} name="diameter" onChange={handleInputChange}/>
        </Label>
        <Label>
            Mass:
            <input type="number" value={state.mass} name="mass" onChange={handleInputChange}/>
        </Label>
        <input type="submit" value="Submit" />
    </Form>
  )
}
