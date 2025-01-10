import React, { useState } from 'react';
import { testimonials } from './testimonials';
import TestimonialsCard from './TestimonialsCard';
import HighlightedHeading from '@src/Components/HighlightedHeading';
import TestimonialsOptions from './TestimonialsOptions';
import { MoveRight } from 'lucide-react';

function Testimonials() {

  const [selectedOption, setSelectedOption] = useState(1)


  return (
    <div className="border-dashed border-y border-gray-400 mt-8 py-8 lg:py-16">
      <h4 className="text-4xl lg:text-5xl text-center font-extrabold text-gray-600 lg:mb-0 mb-8">
        {/* Responsive Highlighted Heading */}
        <HighlightedHeading className="lg:hidden">Join the Growing</HighlightedHeading>
        <HighlightedHeading className="lg:hidden">Community Who</HighlightedHeading>
        <HighlightedHeading className="lg:hidden">Trust Us</HighlightedHeading>

        <HighlightedHeading className="hidden lg:inline-block">
          Join the Growing Community Who Trust Us
        </HighlightedHeading>
      </h4>

      <section className="mt-16">
        <div>
          {
            testimonials?.filter((testimonial) => selectedOption === testimonial?.id)
              .map((testimonial) => (
                <TestimonialsCard
                  key={testimonial?.id}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  testimonial={testimonial}
                />
              ))}
        </div>


        <section
          className='grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-y-0 lg:gap-x-2 lg:mt-16'
        >
          {testimonials?.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialsOptions
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                testimonial={testimonial} />
            </div>
          ))}
        </section>

      </section>

      <div
        className='flex justify-center pt-0 lg:pt-12 pb-6 lg:pb-0'
      >
        <button
          className='btn-primary !px-16'
        >
          Count Me In
          <MoveRight className='inline w-6 h-6 ml-2' />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
