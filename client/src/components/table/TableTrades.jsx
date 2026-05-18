import React from 'react'
import mockData from '../../utils/mockData'


function TableTrades() {

  return (
    <div className='my-6'>
      <div className='overflow-auto' >
        <table className='w-full capitalize text-sm rounded-4xl bg-stone-700/50 table-auto '>
          <thead className='bg-stone-900' >
            <tr >
              <th >numero</th>
              <th>fecha</th>
              <th>instrumento</th>
              <th>setup</th>
              <th>resultado</th>
              <th>pnlNeto</th>
            </tr>
          </thead>
          <tbody >
            {mockData.mockTrades.map(({ id, fecha, instrumento, setup, resultado, pnlNeto }, index) => (
              <tr key={index} className=' hover:bg-violet-800'>
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

export default TableTrades
