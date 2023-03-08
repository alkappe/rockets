import React, { useEffect, useState } from 'react'
import { RocketForm } from '../components/RocketForm'
import { RocketList } from '../components/RocketList'

import Modal from 'react-modal'
import { deleteRocket, getRockets } from '../api'
import { type Rocket } from '../components/Rocket'
import styled from 'styled-components'

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

const Button = styled.button`
  margin: 0px auto 20px auto;
  border: solid 2px black;
`

export default function CreateRocket () {
  const [list, setList] = useState<Rocket[]>([])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [editRocket, setEditRocket] = useState<Rocket | null>(null)

  const onDelete = async (_id: string) => {
    await deleteRocket(_id)
    await fetchRockets()
  }

  const onEdit = async (rocket: Rocket) => {
    setEditRocket(rocket)
    openModal()
  }

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
      <Button onClick={openModal}>Let&apos;s create the rocket 🥵</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modal}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <RocketForm rocket={editRocket} onSuccessfulSubmit={() => { void fetchRockets() }} closeModal={closeModal}/>
      </Modal>
      <RocketList rockets={list} onEdit={(_id) => { void onEdit(_id) }} onDelete={(_id) => { void onDelete(_id) }} />
      </>
  )
}
