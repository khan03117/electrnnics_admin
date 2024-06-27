import { HomeOutlined, MenuOutlined, ProductOutlined } from '@ant-design/icons'
import { Collapse } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
interface SidebarProps {
    toggleSidebar: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {


    const [open, setOpen] = React.useState('');
    const handleopen = (str: string) => {
        if (open != str) {
            setOpen(str);
        } else {
            setOpen('')
        }
    }
    return (
        <>
            <div className="w-full rounded-e-3xl h-full overflow-hidden bg-blue-gray-50 text-blue-900 ">
                <div className="w-full text-end">
                    <button type='button' title=' toggle button ' onClick={toggleSidebar} className="p-2">
                        <MenuOutlined />
                    </button>
                </div>

                <ul className='masterdata_ul *:py-1 px-3 *:text-sm *:font-light *:tracking-wider'>
                    <li>
                        <Link to={'/dashboard'} className='w-full  py-1 px-4 block bg-opacity-30 rounded-lg'>
                            <HomeOutlined /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category'} className='w-full  py-1 px-4 block bg-opacity-30 rounded-lg'>
                            <HomeOutlined /> Category
                        </Link>
                    </li>
                    <li>
                        <Link to={'/brand'} className='w-full  py-1 px-4 block bg-opacity-30 rounded-lg'>
                            <HomeOutlined /> Brand
                        </Link>
                    </li>
                    <li>
                        <Link to={'/modal-create'} className='w-full  py-1 px-4 block bg-opacity-30 rounded-lg'>
                            <HomeOutlined /> Modal
                        </Link>
                    </li>
                    <li>
                        <Link to={'/banner'} className='w-full  py-1 px-4 block bg-opacity-30 rounded-lg'>
                            <HomeOutlined /> Banner
                        </Link>
                    </li>
                    <li>
                        <Link to={'/testimonial'} className='w-full  py-1 px-4 block bg-opacity-30 rounded-lg'>
                            <HomeOutlined /> Testimonial
                        </Link>
                    </li>
                    {/* <li>
                        <button onClick={() => handleopen('masterdata')} className='py-1 block w-full   text-start px-4' type='button' title='master data'>
                            <DatabaseOutlined /> Master Data
                        </button>
                        <Collapse open={open == 'masterdata'}>
                            <ul className='ps-5 *:text-xs  list-none list-inside dropdown_ul'>
                                <li>
                                    <Link className='block w-full px-3 py-1' to={'/category'}>
                                        Category
                                    </Link>
                                </li>
                                <li>
                                    <Link className='block w-full px-3 py-1' to={'/brand'}>
                                        Brand
                                    </Link>
                                </li>
                                <li>
                                    <Link className='block w-full px-3 py-1' to={'/modal-create'}>
                                        Modal
                                    </Link>
                                </li>
                                <li>
                                    <Link className='block w-full px-3 py-1' to={'/add-product'}>
                                        Product
                                    </Link>
                                </li>
                                <li>
                                    <Link className='block w-full px-3 py-1' to={'/variant-by'}>
                                        Variation By
                                    </Link>
                                </li>
                                <li>
                                    <Link className='block w-full px-3 py-1' to={'/variant'}>
                                        Variation
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li> */}
                    <li>
                        <button onClick={() => handleopen('product')} className='py-1 block w-full   text-start px-4' type='button' title='master data'>
                            <ProductOutlined /> Product Management
                        </button>
                        <Collapse open={open == 'product'}>
                            <ul className='ps-5 *:text-xs  list-none list-inside dropdown_ul'>

                                <li>
                                    <Link className='block w-full px-3 py-1' to={'/add-product'}>
                                        Product
                                    </Link>
                                </li>

                            </ul>
                        </Collapse>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Sidebar
