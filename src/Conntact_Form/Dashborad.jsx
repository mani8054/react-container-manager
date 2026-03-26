import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  const user = location.state

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hi {user?.name}, welcome to your Dashboard!</h1>
      <p>This is your personal dashboard page.</p>
    </div>
  )
}

export default Dashboard