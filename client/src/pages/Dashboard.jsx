import React from 'react'
import Metricard from '../components/card/Metricard'
import UserAccounCard from '../components/card/UserAccounCard'
import HistoryTrades from '../components/ui/HistoryTrades'

function Dashboard() {
  return (
    <main>
      <div>
        <h2>Resumen</h2>
      </div>
      <UserAccounCard/>
      <Metricard />
      {/**curva de trades con graficos */}
      <HistoryTrades/>
      

      {/**componente resumen */}
    </main>
  )
}

export default Dashboard
