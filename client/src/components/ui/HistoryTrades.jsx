import React from 'react'
import TableTrades from '../table/TableTrades'


function HistoryTrades() {

  /**refactorizar para usar el layout de esta tabla en otras partes */
  return (
    <div>
      <h1>ultimas operaciones</h1>

     <TableTrades />

    </div>
  )
}

export default HistoryTrades
