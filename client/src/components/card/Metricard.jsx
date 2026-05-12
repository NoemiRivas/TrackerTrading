import React from 'react'

function Metricard(props) {

  return (
      <section className='grid grid-cols-3 gap-4 mt-4 p-0'>
      {props.items.map((item, i) => (
        <div key={i} className={`theme-card ${item.span ? 'col-span-3' : ''} ${item.row ? 'row-start-2' : ''}`}>
          <p>{item.label}</p>
          <p>{item.prefix}{item.value}</p>
        </div>
      ))}
    </section>
  )
}

export default Metricard
