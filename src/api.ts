import { type Rocket } from './components/Rocket'

export const createRocket = async (rocket: Omit<Rocket, '_id'>) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rocket)
  }
  return await fetch('http://localhost:3000/rocket', requestOptions)
    .then(async response => await response.json())
}

export const getRockets = async () => {
  const res = await fetch('http://localhost:3000/rockets')

  if (!res.ok) {
    const error = res.statusText
    throw new Error(error)
  }

  return await res.json()
}

export const deleteRocket = async (_id: string) => {
  const res = await fetch(`http://localhost:3000/rocket/${_id}`, { method: 'DELETE' })
  return await res.json()
}
