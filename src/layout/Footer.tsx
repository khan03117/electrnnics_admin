import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <>
            <div className="w-full fixed bottom-0 start-0 bg-indigo-900 p-2 text-center text-white text-xs">
                &copy; all right reserverd. <Link className='text-gray-200 text-xs' to={'/'}>Frantic infotech</Link>
            </div>
        </>
    )
}

export default Footer
