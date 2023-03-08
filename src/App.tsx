
import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import AdminRocket from './pages/AdminRocket'
import Rockets from './pages/Rockets'
import CreateRocket from './pages/CreateRocket'
import EditRocket from './pages/EditRocket'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`
const Li = styled.li`
  cursor: pointer;
`

function App () {
  return (
    <div>
      <Router>
        <Ul>
          <Li>
            <Link to="/"><h5>Homepage</h5> </Link>
          </Li>
          <Li>
            <Link to="/create-rocket">
              In this place you can create rockets
            </Link>
          </Li>
          <Li>
            <Link to="/public-rockets">
              In this place you can view public rockets
            </Link>
          </Li>
        </Ul>
        <Routes>
          <Route path="/" />
          <Route path="/public-rockets" element={<Rockets />} />
          <Route path="/create-rocket" element={<CreateRocket />} />
          <Route path="/edit-rocket" element={<EditRocket />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
