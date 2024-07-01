import React from 'react'

const Header: React.FC = () => {
    return (
        <>
            <div className="w-full   flex items-center justify-normal px-5 py-1 bg-blue-gray-100">
                <img src="https://streamlyne.unm.edu/assets/img/banner.png" alt="" className="w-28" />
                <input title='search' placeholder='Search bar' type="text" name="" id="" className="outline-none px-4 py-2 text-sm rounded-lg max-w-96 ms-auto inline-block" />
            </div>
        </>
    )
}

export default Header
