import { BadgeCheck, Quote } from 'lucide-react'
import React from 'react'
import Quotes from "./Quotes.jsx"

function TestimonialsCard({ testimonial }) {
    return (
        <section
            className='text-gray-600'
        >


            <div
                className='flex flex-col-reverse lg:flex-col'
            >
                <blockquote
                    className='text-3xl lg:text-5xl font-semibold flex flex-col'
                >
                    <Quotes
                    />
                    <p className='my-8'>"{testimonial?.comment}"</p>
                </blockquote>


                <div className='flex space-x-4 flex-col lg:flex-row items-center'>


                    <img
                        src={testimonial?.imagePath}
                        alt={testimonial?.client + " 's Image"}
                        className='w-20 h-w-20 rounded-full'
                    />

                    <div>

                        <div className='font-bold justify-center lg:justify-start mt-4 lg:mt-0 text-lg flex items-center'>

                            <p>{testimonial?.client}</p>

                            <BadgeCheck
                                color='#f5f5f5'
                                fill='#1da1f2'
                                className='w-5 h-5 lg:w-6 lg:h-6 ml-1' />
                        </div>

                        <p className='text-sm'>
                            {testimonial?.role} at <i className='underline font-medium'>{testimonial.company}</i>
                        </p>

                    </div>


                </div>

            </div>




        </section>
    )
}

export default TestimonialsCard