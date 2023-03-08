import { type Rocket } from '../components/Rocket'

export const initialFormState = {
  name: '',
  description: '',
  height: 0,
  diameter: 0,
  mass: 0
}

export const formReducer = (state: typeof initialFormState | Rocket, action: { type: string, field: string, payload: string | number }) => {
  switch (action.type) {
    case 'HANDLE INPUT CHANGE':
      return { ...state, [action.field]: action.payload }
    default:
      return state
  }
}

export default formReducer
