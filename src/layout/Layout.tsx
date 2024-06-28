import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {




    return (
        <>

            <div className={`w-full h-lvh overflow-hidden`}>
                <Header />
                <div className="grid grid-cols-12">
                    <div className="col-span-2 backdrop-blur-sm ">
                        <div className={`fixed start-0 top-0 max-h-[100vh] overflow-y-auto py-3 overflow-x-hidden bg-transparent transition-all duration-300 w-full`}>
                            <Sidebar />
                        </div>
                    </div>
                    <div className="col-span-10">
                        <main className='p-5 pb-28 max-h-lvh overflow-auto overflow-x-hidden'>
                            <Outlet />
                        </main>
                    </div>
                </div>

                <Footer />
            </div>



        </>
    )
}

export default Layout
