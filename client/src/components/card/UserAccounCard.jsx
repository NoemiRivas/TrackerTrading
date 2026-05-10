import React from 'react'

import mockData from '../../utils/mockData'

const UserAccounCard = () => {
    const { iniciales, nombre, fechaInicio } = mockData.mockAccount
    return (
        <section className='bg-stone-900 mt-2 rounded-xl max-md:p-8'>
            <h1 className='text-justify text-violet-500 font-bold text-xl max-md:mb-4'>Bienvenida Trader</h1>
            <div className='bg-stone-500/30 flex flex-col gap-4 rounded-2xl p-2.5 mb-4 '>

                <div className='flex ml-0 max-md:gap-2'>
                    <span className='p-4 bg-violet-900 rounded-4xl max-md:mb-2'>
                        {iniciales}
                    </span>
                    <span>
                        <h2 className='text-shadow-mauve-100 text-violet-400 text-md '>{nombre}</h2>
                        <p className='text-justify text-sm text-stone-400'> inicio: {fechaInicio}</p>
                    </span>

                </div>

                
            </div>

        </section>
    )
}

export default UserAccounCard
