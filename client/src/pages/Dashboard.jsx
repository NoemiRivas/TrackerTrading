import React from 'react'
import Metricard from '../components/card/Metricard'
import UserAccounCard from '../components/card/UserAccounCard'
import HistoryTrades from '../components/ui/HistoryTrades'
import mockData from '../utils/mockData'


function Dashboard() {

  const { balanceActual, pnlNeto, drawdownMax, winrate, totalTrades, wins, losses } = mockData.mockAccount
  const metrics = [
    { label: "balance actual", value: balanceActual, prefix: "$ " },
    { label: "pnl neto", value: pnlNeto, prefix: "$ " },
    { label: "trades totales", value: totalTrades },
    { label: "ganadas", value: wins },
    { label: "perdidas", value: losses },
    { label: "drawdown", value: drawdownMax, prefix: "$ " },
    { label: "winrate", value: winrate, span: true },
  ]


  return (


    <main>
      <UserAccounCard />
      <Metricard items={metrics} />
      {/**curva de trades con graficos */}
      <HistoryTrades />


      {/**componente resumen */}
    </main>
  )
}

export default Dashboard
