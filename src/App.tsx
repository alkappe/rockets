
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
import { Layout } from './components/Layout'

function App () {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Admin dashboard</Link>
          </li>
          <li>
            <Link to="/create-rocket">
              List of Rockets
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={ <AdminRocket />} />
          <Route path="/create-rocket" element={<CreateRocket />} />
          <Route path="/edit-rocket" element={<EditRocket />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
