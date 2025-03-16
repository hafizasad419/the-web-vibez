import { MoveRight } from 'lucide-react'
import React from 'react'

function CTA() {
    return (
        <section className="py-8 lg:py-32 px-4 lg:px-28 text-gray-700 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">Ready to Elevate Your Online Presence?</h2>
                <p className="text-xl mb-8">
                    Let's create a website that turns visitors into customers and grows your business.
                </p>
                <button className="btn-primary">
                    Get Your Free Consultation <MoveRight className="inline w-6 h-6 ml-2" />
                </button>
            </div>
        </section>
    )
}

export default CTA