import React from 'react'
import Metricard from '../components/card/Metricard'
import UserAccounCard from '../components/card/UserAccounCard'

function Dashboard() {
  return (
    <>
      <div>
        <h2>Resumen</h2>
      </div>
      <UserAccounCard/>
      <Metricard />
      

      {/**componente resumen */}
    </>
  )
}

export default Dashboard
