import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from "react-router";
import Fallback from '@src/Components/Fallback';

const Login = lazy(() => import('@src/Pages/Login'));
const Signup = lazy(() => import('@src/Pages/Signup'));
const Home = lazy(() => import('@src/Pages/Home'));
const PrivacyPolicy = lazy(() => import('@src/Pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('@src/Pages/TermsAndConditions'));
const About = lazy(() => import('@src/Pages/About'));
const Pricing = lazy(() => import('@src/Pages/Pricing'));
const Docs = lazy(() => import('@src/Pages/Docs'));
const FAQs = lazy(() => import('@src/Pages/FAQs'));

function AuthRoutes() {

    return (
        <Suspense fallback={<Fallback />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/about' element={<About />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/docs' element={<Docs />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/terms' element={<TermsAndConditions />} />
                <Route path='/faqs' element={<FAQs />} />

                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    )
}

export default AuthRoutes
