import React from 'react'
import mockData from '../../utils/mockData'

function HistoryTrades() {

  return (
    <div>
      <h1 className='text-left text-2xl mb-2'>ultimas operaciones</h1>

      <div >
        <table className='w-full capitalize text-sm rounded-4xl'>
          <thead className='bg-tablethead' >
            <tr>
              <th>numero</th>
              <th>fecha</th>
              <th>instrumento</th>
              <th>setup</th>
              <th>resultado</th>
              <th>pnlNeto</th>
            </tr>
          </thead>
          <tbody >
            {mockData.mockTrades.map(({ id, fecha, instrumento, setup, resultado, pnlNeto }, index) => (
              <tr key={index}>
                <th>{id}</th>
                <th>{fecha}</th>
                <th>{instrumento}</th>
                <th>{setup}</th>
                <th>{resultado}</th>
                <th>{pnlNeto}</th>
              </tr>))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default HistoryTrades
