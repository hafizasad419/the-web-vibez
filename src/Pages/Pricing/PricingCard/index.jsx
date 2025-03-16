import { Award, CircleCheck, CircleX } from "lucide-react"
import { calculateDiscountInPercentage } from "@/utils.js"
import { MoveRight } from "lucide-react"




function OfferCard({ offer }) {

  const isLeftCard = offer.id === 1
  const isMiddleCard = offer.id === 2
  const isRightCard = offer.id === 3


  return (


    <div
      className={`my-4 bg-white rounded-lg shadow-lg overflow-hidden
       ${isMiddleCard ? "border-orange border-[2px] z-10 lg:scale-105 lg:-ml-8 p-6" : isLeftCard || isRightCard ? "border-orange border-[1px] z-0 lg:w-[90%] p-6 lg:px-10 lg:py-6" : ""}`}>
      <div>

        {/* Offer Header */}
        <div className="flex justify-between items-start">
          {<offer.svg
            fontSize="large"
            className=" text-gray-700" />}


          {offer?.badge && (
            <div className="bg-orange text-white
                         text-sm font-semibold flex items-center justify-center rounded-full px-4 py-2 ">
              <Award className="w-5 h-5 inline mr-1" />
              <span>
                {/* {offer.badge} */}
                85% People Choose This
              </span>
            </div>
          )}
        </div>


        {/* Offer Name */}
        <h3 className="mt-4 text-3xl font-bold text-gray-700">{offer.title}</h3>



        <p className="mt-2 text-gray-700 text-base">{offer.description}</p>


        <div className="mt-4 bg-green-5 flex items-center">

          <span className="text-3xl font-bold text-gray-700">${offer.price}</span>
          {offer.originalPrice && (
            <div className="ml-2">
              <span className="ml-2 text-lg font-medium text-gray-500 line-through">${offer.originalPrice}</span>

              <span className="ml-2 text-sm font-medium text-green-600">{calculateDiscountInPercentage(offer.originalPrice, offer?.price)}% off</span>
            </div>
          )}

        </div>
        {/* What you will get */}
        <ul className="mt-6 space-y-2">
          {offer.features.map((feature, index) => (
            <li key={index}
              className={`flex items-start text-gray-600`}>

              {feature.included ? (
                <>
                  <CircleCheck
                    className="inline w-6 h-6"
                    color="#f5f5f5"
                    fill="#F55800"
                  />
                  <p
                    className="ml-2 max-w-52"
                  >
                    {feature.title}
                  </p>
                </>

              ) : (
                <>
                  <CircleX
                    className="inline w-6 h-6 "
                    color="white"
                    fill="#9ca3af"
                  />
                  <span className="ml-2">{feature.title}</span>
                </>
              )

              }
            </li>
          ))}
        </ul>
        {/* array of bonuses */}
        {offer.bonuses && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-700">Free Bonuses Included</h4>
            <ul className="mt-2 space-y-2">
              {offer.bonuses.map((bonus, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <CircleCheck
                    className="inline w-6 h-6"
                    color="#f5f5f5"
                    fill="#F55800"
                  />
                  <span className="ml-2">{bonus}</span>
                </li>
              ))}
            </ul>
          </div>
        )}



        <button className="btn-primary w-full !mt-8">
          Get Started
          <MoveRight
            className='inline w-6 h-6 ml-2' />
        </button>


        {offer.isLimitedTime && (
          <div className="mt-6 text-center flex items-center">
            <hr className="flex-1 border-t border-gray-700" />
            <span className="px-4 text-sm font-medium text-gray-500">
              Limited Time Offer
            </span>
            <hr className="flex-1 border-t border-gray-700" />
          </div>
        )}

      </div>
    </div>

  )
}

export default OfferCard