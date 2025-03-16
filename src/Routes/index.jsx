import React, { Suspense, lazy } from 'react'
import NormalRoutes from "./NormalRoutes"
import AuthRoutes from "./AuthRoutes"
import Header from '@src/Components/Header';
import { useSelector } from 'react-redux';
import Fallback from '@src/Components/Fallback';
import Footer from '@src/Components/Footer';
import { ChatButton } from '@src/Components/ChatButton';

const BaseRoutes = () => {
  const user = useSelector(state => state.user); //check if user  exists 
  // const user = true
  return (
    <>
      <div className='bg-white'>
        <div>
          <Header />
        </div>

        <div className='mt-20 lg:mt-24'>
          <Suspense fallback={<Fallback />}>
            {
              user ?
                <>
                  <NormalRoutes />
                </>
                :
                <>
                  <AuthRoutes />
                  <ChatButton />


                </>

            }
          </Suspense>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </>
  )
}
export default BaseRoutes