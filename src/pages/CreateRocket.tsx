import React, { useEffect, useState } from 'react'
import { RocketForm } from '../components/RocketForm'
import { RocketList } from '../components/RocketList'

import Modal from 'react-modal'
import { getRockets } from '../api'
import { type Rocket } from '../components/Rocket'

const modal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#61E786'
  }
}

export default function CreateRocket () {
  const [list, setList] = useState<Rocket[]>([])
  const [modalIsOpen, setIsOpen] = useState(false)

  const fetchRockets = async () => {
    const res = await getRockets()
    setList(res)
  }

  useEffect(() => {
    void fetchRockets()
  }, [])

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
      <>
      <button onClick={openModal}>Let&apos;s create the rocket 🥵</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modal}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <RocketForm onSuccessfulSubmit={() => { void fetchRockets() }} closeModal={closeModal}/>
      </Modal>
      <RocketList rockets={list} onSuccessfulDelete={ () => { void fetchRockets() }} />
      </>
  )
}
