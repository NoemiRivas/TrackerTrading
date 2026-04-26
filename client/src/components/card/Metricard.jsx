import React from 'react'

import mockData from '../../utils/mockData'
function Metricard() {
  const { balanceActual, pnlNeto, drawdownMax, winrate, totalTrades, wins, losses } = mockData.mockAccount
  return (
    <section className='grid grid-cols-3 gap-4 mt-4 p-0'>
      <div className='theme-card  row-start-2'>
        pnl total: <p>$ {pnlNeto}</p>
      </div>
      <div className='theme-card  '>
        capital total:  <p>$ {balanceActual}</p>
      </div>
      <div className='theme-card '>
        total de trades: <p> {totalTrades}</p>
      </div>
      <div className='theme-card '>
        total ganadas: <p>{wins}</p>
      </div>
      <div className='theme-card '>
        total perdedoras: <p>{losses}</p>
      </div> <div className='theme-card '>
         Drawdownmax: <p>$ {drawdownMax}</p>
      </div>
      <div className='theme-card col-span-3 '>
       Winrate: <p>{winrate}</p>
      </div>

    </section>
  )
}

export default Metricard
