import React from 'react'
import TableTrades from '../components/table/TableTrades'
import Metricard from '../components/card/Metricard'
import mockTrades from '../utils/mockData'
import mockData from '../utils/mockData'

function Trades() {


 const  [{id,pnlNeto, resultado}]= mockData.mockTrades
 
 const totalTrades = mockData.mockTrades.map(num=>{
      const prices = num.pnlNeto
      console.log("desde funcion",prices)
 } )



 console.log("total:", totalTrades)


   const metrics = [/**{ label: "total trades:", value: , prefix: "$ " },
    { label: "win rate", value: , prefix: "$ " },
    { label: "total P&L ", value:  },
    { label: "profit factor ", value:  }, */
    
   
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
