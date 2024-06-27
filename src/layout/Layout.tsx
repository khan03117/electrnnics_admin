import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>

            <div className="flex w-full bg-white">
                <div className={`fixed start-0 top-0 h-screen bg-transparent transition-all duration-300 ${collapsed ? 'w-[10rem]' : 'w-[14rem]'}`}>
                    <Sidebar toggleSidebar={toggleSidebar} />
                </div>
                <div className={`w-[calc(100%-10rem)] ms-[14rem] relative`}>
                    <Header />
                    <main className='p-5'>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
