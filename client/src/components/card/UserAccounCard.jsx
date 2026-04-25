import React from 'react'

import mockData from '../../utils/mockData'

const UserAccounCard = () => {
    const { iniciales, nombre, plataforma, fechaInicio, balanceInicial, balanceActual, pnlNeto, drawdownMax } = mockData.mockAccount
    return (
        <section className='bg-cardbackground/50 p-4 rounded-xl '>
            <h1 className='text-justify'>Bienvenida Trader</h1>
            <div className='bg-cardbackground/30 flex flex-col gap-4 rounded-2xl p-2.5 '>

                <div className='flex ml-0'>
                    <span className='p-4 bg-textprimary/30 rounded-4xl'>
                        {iniciales}
                    </span>
                    <span>
                        <h2>{nombre}</h2>
                        <p className='text-justify text-sm text-textprimary/40 capitalize'> inicio: {fechaInicio}</p>
                    </span>

                </div>

                <div className='ml-0 flex justify-around capitalize'>
                    <p className=''>plataforma: {plataforma}</p>
                    <p>balance actual: ${balanceActual}</p>
                    <p>balance inicial: ${balanceInicial}</p>
                    <p>pnlNeto: ${pnlNeto}</p>
                    <p>drawdownMax: ${drawdownMax}</p>
                </div>
            </div>

        </section>
    )
}

export default UserAccounCard
