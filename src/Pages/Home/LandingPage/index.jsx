import React from 'react'
import { uniqueSellingPropositions } from './uniqueSellingPropositions'
import { BadgeCheck, CircleCheck, MoveRight, Star } from 'lucide-react'
import { clientImages } from './clientImages';
import { businessesLogos } from './businessesLogos';
import HighlightedHeading from '@src/Components/HighlightedHeading';
import { ThreePointCrown } from './Icons';


function LandingPage() {
    return (
        <div>

            <div
            className='py-16 lg:py-6 relative'
            >

            <span className='absolute top-8 lg:-top-2 -left-1 lg:left-0'><ThreePointCrown /></span>
                <h1
                    className='text-5xl lg:text-6xl text-left text-gray-600 font-bold'>
                    High Quality Custom <br className='lg:hidden' /> <span className=''>Websites for your business</span><span className=''> to</span> help you <span> get</span> more <HighlightedHeading> <span className=''>Customers</span></HighlightedHeading>
                </h1>
            </div>


            <section
                className='lg:py-12 text-gray-600 flex flex-col lg:flex-row lg:justify-between items-center'
            >

                {/* Left Side */}

                <div className='space-y-4 lg:space-y-6'>
                    <h2 className='text-3xl'>What to expect from us?</h2>

                    <ul
                        className=''
                    >
                        {uniqueSellingPropositions.map((item) => (
                            <li
                                className='list-none text-base lg:text-lg'
                                key={item.id}>
                                <CircleCheck
                                    className='inline mr-2'
                                    color='#f5f5f5'
                                    fill='#F55800'
                                />
                                {item.title}
                            </li>
                        ))}
                    </ul>
                    <div>

                        <button
                            className='btn-primary'
                        >
                            Claim Your Free Website
                            <MoveRight className='inline w-6 h-6 ml-2' />
                        </button>
                    </div>


                    <section>
                        {/* Microphone Testing......🎤 */}
                        <div
                            className='flex items-center'
                        >

                            {
                                [1, 2, 3, 4, 5].map((starValue) => (
                                    <span
                                        key={starValue}
                                    >
                                        <Star
                                            className='inline'
                                            fill='#F55800'
                                            color='#F55800'
                                        />
                                        {/* {starValue === 5 && <span>(14)</span>} */}
                                    </span>

                                ))
                            }

                            <span
                                className='text-gray-600 text-lg font-medium pl-2'
                            > (141)</span>



                        </div>

                        <div className='my-4'>
                            {clientImages.map((image) => (
                                <img
                                    key={image.id}
                                    className='w-10 h-10 rounded-full object-cover inline'
                                    src={image.path}
                                    alt="" />
                            ))}
                        </div>

                        <div
                            className='text-gray-600 text-sm font-semibold flex items-center'
                        >
                            <BadgeCheck
                                fill='#F55800'
                                color='#f5f5f5'
                                className='w-5 h-5 mr-1' />
                            <p>Trusted By 100+ Happy Clients</p>
                        </div>

                    </section>

                </div>


                {/* Right Side */}
                <div
                    className='bg-gray- w-full lg:w-[60%] mt-20 lg:mt-0 rounded flex justify-center items-center'
                >


                    <img
                        className='rounded-xl'
                        src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="" />
                    {/* 
                    <img
                        className='rounded-xl'
                        src="/brock-lesnar.png"
                        alt="" /> */}

                    {/* Video Here */}
                </div>

            </section>

            {/* Businesses We Worked With */}

            <section
                className='pt-16'
            >

                <h2
                    className='text-2xl lg:text-5xl text-center font-extrabold text-gray-600 lg:mb-0 mb-8'
                >
                    Businesses We Worked With

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



            </section>


        </div>
    )
}

export default LandingPage