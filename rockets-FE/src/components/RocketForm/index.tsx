import React, { useReducer } from 'react'
import styled from 'styled-components'
import formReducer, { initialFormState } from '../../reducers/formReducer'
import { createRocket, editRocket } from '../../api'
import { type Rocket } from '../Rocket'

const Form = styled.form`
  border-radius: 3px;
  width: 320px;
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

const Input = styled.input`
    cursor: pointer;
    height: 20px;
    margin: 8px 0 4px 0;
    border: transparent;
    border-radius: 3px;
`

const Textarea = styled.textarea`
    cursor: pointer;
    height: 60px;
    margin: 8px 0 4px 0;
    border: transparent;
    border-radius: 3px;
`

const InputButton = styled.input`
    height: 28px;
    background: black;
    color: white;
    margin: 8px 0 4px 0;
    border: transparent;
    border-radius: 3px;
    cursor: pointer;
`
type Props = {
  closeModal: () => void
  onSuccessfulSubmit: () => void
  rocket: Rocket | null
}

export const RocketForm: React.FC<Props> = ({ closeModal, onSuccessfulSubmit, rocket }) => {
  const [state, dispatch] = useReducer(formReducer, rocket ?? initialFormState)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'HANDLE INPUT CHANGE',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ('_id' in state) {
      await editRocket(state as Rocket)
    } else {
      await createRocket(state)
    }
    onSuccessfulSubmit()
    closeModal()
  }

  return (
    <Form onSubmit={(e) => { void handleOnSubmit(e) }}>
        <Label>
            Rocket name:
            <Input type='text' value={state.name} name="name" onChange={handleInputChange}/>
        </Label>
        <Label>
            Description:
            <Textarea value={state.description} name="description" onChange={handleInputChange}/>
        </Label>
        <Label>
            Height:
            <Input type="number" min="0" value={state.height} name="height" onChange={handleInputChange}/>
        </Label>
        <Label>
            Diameter:
            <Input type="number" min="0" value={state.diameter} name="diameter" onChange={handleInputChange}/>
        </Label>
        <Label>
            Mass:
            <Input type="number" min="0" value={state.mass} name="mass" onChange={handleInputChange}/>
        </Label>
        <InputButton type="submit" value="Submit" />
    </Form>
  )
}
