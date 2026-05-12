import React from 'react'
import TableTrades from '../components/table/TableTrades'
import Metricard from '../components/card/Metricard'
import mockData from '../utils/mockData'

function Trades() {
 const { balanceActual, pnlNeto, drawdownMax, winrate, totalTrades, wins, losses } = mockData.mockAccount

   const metrics = [
    { label: "balance actual", value: balanceActual, prefix: "$ " },
    { label: "pnl neto", value: pnlNeto, prefix: "$ " },
    { label: "trades totales", value: totalTrades },
   
  ]

  return (
    <>
    <h1>
        Todas las operaciones
    </h1>
    <Metricard items={metrics}/>
    <TableTrades/>
    </>
  )
}

export default Trades
