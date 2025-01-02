import React from 'react'

function TestimonialsOptions({ testimonial, selectedOption, setSelectedOption }) {
    return (


        <div
            className={`hidden text-gray-600 py-10 lg:flex flex-col justify-center items-center 
                cursor-pointer border border-gray-300
                ${testimonial?.id === selectedOption ? "bg-gray-200" : ""}`}
            onClick={() => setSelectedOption(testimonial?.id)}
        >
            <p
                className='text-lg font-bold '
            >{testimonial?.client}
            </p>


            <div
                className='text-base flex items-center space-x-1'
            >
                {<testimonial.icon 
                />}
                <p>{testimonial?.company}</p>
            </div>

        </div>


    )
}

export default TestimonialsOptions