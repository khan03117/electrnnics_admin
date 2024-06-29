import { BranchesOutlined, CodeSandboxOutlined, ContactsOutlined, FileImageOutlined, LogoutOutlined, MessageOutlined, OrderedListOutlined, ProductOutlined, WindowsOutlined } from '@ant-design/icons'
// import { Collapse } from '@material-tailwind/react'
// import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {


    // const [open, setOpen] = React.useState('');
    // const handleopen = (str: string) => {
    //     if (open != str) {
    //         setOpen(str);
    //     } else {
    //         setOpen('')
    //     }
    // }
    return (
        <>
            <div className="w-full rounded-e-3xl h-[100%] overflow-x-hidden overflow-y-auto relative bg-white border border-blue-gray-300 text-blue-900 ">


                <ul className='masterdata_ul mb-20  *:py-1 px-3 *:text-sm *:font-light *:tracking-wider'>
                    <li>
                        <Link to={'/dashboard'} className='w-full  py-2 ps-3 text-start block rounded-lg bg-indigo-700 text-white'>
                            <WindowsOutlined /> <span className="ms-5 font-bold">
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li className='my-4 py-4'>
                        <h4 className="text-indigo-800 ps-3 font-bold text-md">Master Data</h4>
                    </li>
                    <li>
                        <Link to={'/category'} className='w-full  py-2 px-4 block bg-opacity-30 rounded-lg'>
                            <OrderedListOutlined />  <span className="ms-5">Category </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/brand'} className='w-full  py-2 px-4 block bg-opacity-30 rounded-lg'>
                            <BranchesOutlined />  <span className="ms-5">Brand </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/modal-create'} className='w-full  py-2 px-4 block bg-opacity-30 rounded-lg'>
                            <CodeSandboxOutlined /> <span className="ms-5">Modal </span>
                        </Link>
                    </li>
                    <li className='my-4 py-4'>
                        <h4 className="text-indigo-800 ps-3 font-bold text-md">Web Management</h4>
                    </li>
                    <li>
                        <Link to={'/banner'} className='w-full  py-2 px-4 block bg-opacity-30 rounded-lg'>
                            <FileImageOutlined /> <span className="ms-5">Banner </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/testimonial'} className='w-full  py-2 px-4 block bg-opacity-30 rounded-lg'>
                            <MessageOutlined />   <span className="ms-5">Testimonial </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact-details'} className='w-full  py-2 px-4 block bg-opacity-30 rounded-lg'>
                            <ContactsOutlined />   <span className="ms-5">Social Contact </span>
                        </Link>
                    </li>
                    <li className='my-4 py-4'>
                        <h4 className="text-indigo-800 ps-3 font-bold text-md">Product Management</h4>
                    </li>
                    <li>
                        <Link to={'/add-product'} className='w-full  py-2 px-4 block bg-opacity-30 rounded-lg'>
                            <ProductOutlined />   <span className="ms-5">Product </span>
                        </Link>
                    </li>

                </ul>
                <div className="w-full bg-white h-auto inline-block z-50 absolute bottom-0 start-0 pt-3 border-t border-blue-gray-500">
                    <Link to={'/category'} className='w-full ms-3  py-2 px-4 block bg-opacity-30 rounded-lg'>
                        <LogoutOutlined />  <span className="ms-5">Logout </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar
