import React, { useEffect, useState } from 'react'
import { RocketCards } from '../components/RocketCards'
import { type Rocket } from '../components/Rocket'
import { getRockets } from '../api'

export default function Rockets () {
  const [rocketCards, setRocketCards] = useState<Rocket[]>([])

  const fetchRockets = async () => {
    const res = await getRockets()
    setRocketCards(res)
  }

  useEffect(() => {
    void fetchRockets()
  }, [])

  return (
    <div>Here it is the list of rocket cards:
      <RocketCards rocketCards={rocketCards} />
    </div>

  )
}
