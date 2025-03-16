import HighlightedHeading from '@src/Components/HighlightedHeading'
import React from 'react'
import { projects } from './projects'
import { MoveRight } from 'lucide-react'
import { sendWhatsappMessage } from '@/utils'

function Projects() {
    return (
        <section
            className='py-8 lg:pt-20 px-4 lg:px-28 '

        >

            {/* Heading */}

            <h4 className="text-4xl lg:text-5xl text-center font-extrabold text-gray-600 lg:mb-0 mb-8">
                <HighlightedHeading className="lg:hidden">
                    Businesses We
                </HighlightedHeading>

                <HighlightedHeading className="lg:hidden">
                    Helped Grow
                </HighlightedHeading>

                <HighlightedHeading className="hidden lg:inline-block">
                    Businesses We Helped Grow
                </HighlightedHeading>
            </h4>

            {/* Project Cards */}

            <div
                className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 my-10 lg:my-16'
            >
                {projects?.map((project) => (

                    <div
                        key={project.id}
                        className='text-gray-600'
                    >
                        <img
                            className='rounded-xl'
                            src={project?.imagePath} alt={project.businessName + " Website"} />

                        <p
                            className='text-sm font-bold text-left pt-4'
                        >
                            {project?.industry}
                        </p>
                        <p
                            className='text-zinc text-2xl font-extrabold text-left'
                        >
                            {project?.businessName}
                        </p>

                    </div>

                ))}


            </div>

            {/* I Want To Grow My Business BUTTON */}

            <div
                className='text-center'
            >
                <button
                    onClick={() => sendWhatsappMessage({ message: "Hi, I Want To Grow My Business With Your Website Services, Please tell me next steps." })}
                    className='btn-primary !px-8 !lg:px-16'
                >
                    I Want To Grow My Business
                    <MoveRight className='inline w-6 h-6 ml-2' />
                </button>
            </div>



        </section>
    )
}

export default Projects