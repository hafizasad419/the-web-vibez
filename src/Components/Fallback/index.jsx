import React from 'react'
import { Loader2 } from 'lucide-react'

const Fallback = () => {
  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange opacity-10 rounded-full transform translate-x-1/2 translate-y-1/2"></div>

      <div className="text-center max-w-2xl relative z-10 flex flex-col items-center">

        <img
          className='w-32 my-8'
          src="/wv-logo-mark.png" alt="" />


        <div className="flex justify-center mb-8">
          <Loader2 className="w-16 h-16 text-orange animate-spin" />
        </div>

        <p className="text-xl mb-8">
          Please wait, This won't take long!
        </p>
      </div>
    </div>
  )
}

export default Fallback