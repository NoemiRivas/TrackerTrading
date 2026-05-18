import React from 'react'
import TableTrades from '../components/table/TableTrades'
import Metricard from '../components/card/Metricard'

import mockData from '../utils/mockData'

function Trades() {


  const trades = mockData.mockTrades
  const wins = trades.filter((e) => e.resultado === "win")
  const losses = trades.filter((e) => e.resultado === "loss")
  const totalPnl = trades.reduce((s, t) => s + (t.pnlNeto || 0), 0)
  /*const winRate = trades.length > 0 ? (wins.length / trades.length * 100).toFixed(0) : 0∫*/
  const lossPnL = Math.abs(losses.reduce((s, t) => s + (t.pnlNeto || 0), 0));
  const winPnL = wins.reduce((s, t) => s + (t.pnlNeto || 0), 0);
  const profitFactor = lossPnL > 0 ? (winPnL / lossPnL).toFixed(2) : wins.length > 0 ? '∞' : '0';
  const totalTrade = trades.length

  const metrics = [{ label: "total trades:", value: totalTrade },

  { label: "profit factor ", value: profitFactor }, { label: "total P&L ", value: totalPnl, prefix: "$ " }
  ]

  return (
    <main>
      <h1>
        Todas las operaciones
      </h1>
      <Metricard items={metrics} />
      <TableTrades />
    </main>
  )
}

export default Trades
