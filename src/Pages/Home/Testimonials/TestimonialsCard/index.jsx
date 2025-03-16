import { BadgeCheck } from 'lucide-react'
import Quotes from "./Quotes.jsx"
import { testimonials } from '../testimonials.js';

function TestimonialsCard({ testimonial, selectedOption, setSelectedOption }) {
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


                <section

                    className='grid grid-cols-8 grid-flow-row bg-fuchsia-70'
                >
                    <div className='col-span-7 flex space-x-4 flex-col lg:flex-row items-center'>

                        <img
                            src={testimonial?.imagePath}
                            alt={testimonial?.client + " 's Image"}
                            className='w-20 h-w-20 rounded-full'
                        />

                        <div>

                            <div className='text-lg font-bold mt-4 lg:mt-0 
                          flex justify-center lg:justify-start items-center'>

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


                    {/* Here Options */}
                    <div
                    >

                        {testimonials.map((testimonialObj) => (

                            <p
                                key={testimonialObj?.id}
                                className={`lg:hidden text-sm font-bold text-gray-600 mb-6 py-2 col-span-1 flex-1 flex items-center justify-center rounded-xl
                                cursor-pointer border border-gray-300
                                ${testimonialObj?.id === selectedOption ? "bg-gray-200" : ""}`}
                                onClick={() => setSelectedOption(testimonialObj?.id)}
                            >
                                <testimonialObj.icon />
                            </p>

                        ))}

                    </div>

                </section>







            </div>




        </section>
    )
}

export default TestimonialsCard