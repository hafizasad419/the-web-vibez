import React from 'react'
import { testimonials } from './testimonials'
import TestimonialsCard from './TestimonialsCard'
import HighlightedHeading from '@src/Components/HighlightedHeading'

function Testimonials() {
  return (
    <div

      className='border-dashed border-t border-gray-400 mt-8 py-8 lg:py-16'
    >


      <h4
        className='text-4xl lg:text-5xl text-center font-extrabold text-gray-600 lg:mb-0 mb-8'
      >
        <HighlightedHeading
          height={3}
          className='lg:hidden'
        > Join the Growing</HighlightedHeading>
        <HighlightedHeading
          height={3}
          className='lg:hidden'
        > Community Who</HighlightedHeading>
        <HighlightedHeading
          height={3}
          className='lg:hidden'
        >  Trust Us</HighlightedHeading>




        <HighlightedHeading
          height={3}
          className='hidden lg:inline-block'
        > Join the Growing Community Who Trust Us</HighlightedHeading>

      </h4>



      <section
        className='mt-16'
      >

        {testimonials?.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}

      </section>


    </div>
  )
}

export default Testimonials