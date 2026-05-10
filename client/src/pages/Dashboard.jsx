import React from 'react'
import Metricard from '../components/card/Metricard'
import UserAccounCard from '../components/card/UserAccounCard'
import HistoryTrades from '../components/ui/HistoryTrades'

function Dashboard() {
  return (
    <main>
      <UserAccounCard/>
      <Metricard />
      {/**curva de trades con graficos */}
      <HistoryTrades/>
      

      {/**componente resumen */}
    </main>
  )
}

export default Dashboard
