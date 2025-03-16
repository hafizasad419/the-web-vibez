import React from 'react'
import { businessesLogos } from './businessesLogos'
import HighlightedHeading from '@src/Components/HighlightedHeading'

function BusinessesWeWorkedWith() {
    return (
        <section className='pt-16 px-4 bg-white'>

            <h2
                className='text-2xl lg:text-5xl text-center font-extrabold text-gray-600 lg:mb-0 mb-8'
            >
                <HighlightedHeading>
                    Businesses We Worked With
                </HighlightedHeading>
            </h2>


            <div
                className='grid lg:grid-cols-5 grid-cols-1 gap-y-8 items-center place-items-center'>
                {businessesLogos.map((logo) => (
                    <img
                        className={`cursor-pointer grayscale w-40`}
                        key={logo.id}
                        src={logo.path}
                        title={logo.name}
                        alt={logo.name}
                    />
                ))}

                <p
                    className='text-2xl lg:text-4xl font-extrabold text-gray-600 '
                >& Beyond...</p>

            </div>



        </section >
    )
}

export default BusinessesWeWorkedWith