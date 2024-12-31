import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Fallback from '@src/Components/Fallback';


function AdminRoutes(props) {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route
          path="/"
          element={<div className='text-5xl text-slate-700 py-20 px-4 font-bold'>Welcome To The Web Vibez Platform</div>}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>

  );
}

export default AdminRoutes
