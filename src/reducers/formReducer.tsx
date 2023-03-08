import { type Rocket } from '../components/Rocket'

export const initialFormState = {
  name: '',
  description: '',
  height: 0,
  diameter: 0,
  mass: 0
}

export const formReducer = (state: typeof initialFormState, action: { type: string, field: string, payload: string | number | Rocket }) => {
  switch (action.type) {
    case 'HANDLE INPUT CHANGE':
      return { ...state, [action.field]: action.payload }
    case 'EDIT ROCKET':
      return { ...state, ...(action.payload as Rocket) }
    default:
      return state
  }
}

export default formReducer
