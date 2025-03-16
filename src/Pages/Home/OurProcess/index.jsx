import React from 'react'
import { ourProcess } from './ourProcess.js'
import { MoveRight } from 'lucide-react'
import HighlightedHeading from '@src/Components/HighlightedHeading/index.jsx'

function OurProcess() {
    return (
        <section className="py-8 lg:pt-20 px-4 lg:px-28 bg-white text-gray-700">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl lg:text-5xl text-center font-extrabold text-gray-600 lg:mb-0 mb-8">
                    <HighlightedHeading>
                        Our Proven Process For Your Business Growth
                    </HighlightedHeading>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-24">
                    {ourProcess.map(
                        (step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold">{step}</h3>
                            </div>
                        ),
                    )}
                </div>

                <button
                    className='btn-primary !px-8'
                >
                    Let's Discuss Your Strategy
                    <MoveRight
                        className='inline w-6 h-6 ml-2' />
                </button>
            </div>
        </section>
    )
}

export default OurProcess