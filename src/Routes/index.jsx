import React, { Suspense, lazy } from 'react'
import NormalRoutes from "./NormalRoutes"
import AuthRoutes from "./AuthRoutes"
import Header from '@src/Components/Header';
import { useSelector } from 'react-redux';
import Fallback from '@src/Components/Fallback';

const BaseRoutes = () => {
  const user = useSelector(state => state.user); //check if user  exists 
  // const user = true
  return (
    <>
      <div className='bg-white min-h-screen'>
        <div>
          <Header />
        </div>

        <div className='px-4 lg:px-28 bg-green-5 mt-20 lg:mt-24 lg:py-12'>
          <Suspense fallback={<Fallback />}>
            {
              user ?
                <>
                  <NormalRoutes />
                </>
                :
                <>
                  <AuthRoutes />
                </>

            }
          </Suspense>
        </div>
        <div className='px-4 lg:px-8'>
          Footer
        </div>
      </div>
    </>
  )
}
export default BaseRoutes