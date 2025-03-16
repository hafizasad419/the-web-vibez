import React from 'react'
import { whyChooseUs } from './whyChooseUs.js'
import HighlightedHeading from '@src/Components/HighlightedHeading/index.jsx'
import { MoveRight } from 'lucide-react'

function WhyChooseUs() {
    return (
        <section className="py-8 lg:pt-20 px-4 lg:px-28 bg-gray-50 text-gray-700" >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl lg:text-5xl text-center font-extrabold lg:mb-0 mb-8">
                    <HighlightedHeading>
                        Why 20+ Businesses Chose The Web Vibez?
                    </HighlightedHeading>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
                    {whyChooseUs.map((item, index) => (
                        <div key={index} className="text-center">
                            <item.icon className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                <button
                    className='btn-primary !px-16'
                >
                    Get Started
                    <MoveRight
                        className='inline w-6 h-6 ml-2' />
                </button>


            </div>
        </section>
    )
}

export default WhyChooseUs