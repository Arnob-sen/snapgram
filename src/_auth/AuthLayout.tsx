import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

function AuthLayout() {
    const isauth=false;

    return (
      <>
        {isauth? (
          <Navigate to="/" />
        ) : (
          <>
            <section className="flex flex-1 justify-center items-center flex-col py-10 ">
            
              <Outlet />
            </section>
  
            <img
              src="/assets/images/side-img.svg"
              alt="logo"
              className="hidden xl:block h-screen w-1/2  object-cover  bg-no-repeat"
            />
          </>
        )}
      </>
    );
}

export default AuthLayout
