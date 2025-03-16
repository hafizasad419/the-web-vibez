import { MoveRight, Zap, Rocket, Users, Target } from "lucide-react"
import HighlightedHeading from "@src/Components/HighlightedHeading"
import { NavLink } from "react-router-dom"


const LandingPage = () => {
    return (
        <div className="text-gray-700 bg-gray-50">
            {/* Hero Section */}
            <section className="py-20 lg:py-28 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                            Websites That Work Overtime to Grow <HighlightedHeading>Your Business</HighlightedHeading>
                        </h1>
                        <p className="text-xl mb-8">
                            We build Websites that generate leads even while you sleep.
                        </p>

                        <NavLink
                            to={"/pricing"}
                        >
                            <button className="btn-primary animate-subtle-bounce">
                                Get Your Business Website for free <MoveRight className="inline w-6 h-6 ml-2" />
                            </button>
                        </NavLink>

                    </div>
                </div>
                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-orange opacity-10 rounded-full"></div>
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-zinc opacity-10 rounded-full"></div>
            </section>



        </div>

    )
}

export default LandingPage

