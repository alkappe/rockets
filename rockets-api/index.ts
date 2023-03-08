import express from 'express'
import cors from 'cors'
import asyncHandler from "express-async-handler"
import { createRocket, deleteRocket, getRocket, getRockets, updateRocket } from './handlers'

const server = express()
const port = 3000

// enable cors on all origins (dev only)
server.use(cors())

// automatically parse incoming JSON payloads
server.use(express.json());

server.post('/rocket', asyncHandler(async (req, res) => {
  const rocketProps = req.body
  const result = await createRocket(rocketProps)
  res.json(result)
}))

// express 5 automatically handles errors in async handlers
server.get('/rocket/:id', asyncHandler(async (req, res) => {
  const { id } = req.params
  const rocket = await getRocket(id)
  if (rocket === null) {
    res.send(404)
    return
  }
  res.send(rocket)
}))

server.get('/rockets', asyncHandler(async (req, res) => {
  const rockets = await getRockets()
  res.json(rockets)
}))

server.put('/rocket/:id', asyncHandler(async (req, res) => {
  const rocket = await getRocket(req.params.id)
  if (rocket === null) {
    res.send(404)
    return
  }
  delete req.body._id
  const rockets = await updateRocket(req.params.id, req.body)
  res.json(rockets)
}))

server.delete('/rocket/:id', asyncHandler(async (req, res) => {
  const rocket = await getRocket(req.params.id)
  if (rocket === null) {
    res.json(404)
    return
  }
  await deleteRocket(req.params.id)
  res.json(201)
}))


server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})