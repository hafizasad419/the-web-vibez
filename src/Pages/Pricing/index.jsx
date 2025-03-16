import React from "react"
import { pricing } from "./pricing"
import PricingCard from "./PricingCard"
import HighlightedHeading from "@src/Components/HighlightedHeading"
import { NavLink } from "react-router-dom"
import { MoveRight } from "lucide-react"



const Pricing = () => {
    return (
        <section className="py-16 px-4 lg:px-8">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-700 text-center mb-12">
                    {/* For Mobile */}
                    <span
                        className='lg:hidden'
                    >

                        <HighlightedHeading>
                            Are You Ready
                        </HighlightedHeading><HighlightedHeading> To Boost
                        </HighlightedHeading>
                        <HighlightedHeading>
                            Your Sales?
                        </HighlightedHeading>

                    </span>

                    {/* For PC */}
                    <span
                        className='hidden lg:block '
                    >

                        <HighlightedHeading>
                            Ready To Get More Customers For your Business?
                        </HighlightedHeading>

                    </span>

                </h2>

                <div className={`grid grid-cols-1 lg:grid-cols-3 lg:pl-10`}>
                    {pricing.map((offer) => (
                        <PricingCard
                            key={offer.id}
                            offer={offer}
                        />
                    ))}
                </div>

                <div className="py-8 text-center">
                    <p className="py-4">Have Questions?</p>
                    <NavLink
                        to={"/frequently-asked-questions"}
                    >
                        <button className="btn-primary">
                            We are here to answer <MoveRight className="inline w-6 h-6 ml-2" />
                        </button>
                    </NavLink>
                </div>

            </div>

        </section>
    )
}

export default Pricing

