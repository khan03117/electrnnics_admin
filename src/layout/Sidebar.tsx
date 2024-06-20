import { AppstoreAddOutlined, DatabaseOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons'
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
            <div className="w-full">
                <div className="w-full text-end">
                    <button type='button' title=' toggle button ' onClick={toggleSidebar} className="p-2">
                        <MenuOutlined />
                    </button>
                </div>

                <ul className='masterdata_ul *:py-2 px-3 *:text-sm *:font-light *:tracking-wider'>
                    <li>
                        <Link to={'/dashboard'} className='w-full bg-indigo-200 py-2 px-4 block bg-opacity-30 rounded-lg'>
                            <HomeOutlined /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => handleopen('masterdata')} className='py-2 block w-full   text-start px-4' type='button' title='master data'>
                            <DatabaseOutlined /> Master Data
                        </button>
                        <Collapse open={open == 'masterdata'}>
                            <ul className='ps-5 *:text-xs  list-none list-inside'>
                                <li>
                                    <Link className='block w-full px-3 py-2' to={'/category'}>
                                        <AppstoreAddOutlined /> Category
                                    </Link>
                                </li>
                                <li>
                                    <Link className='block w-full px-3 py-2' to={'/category'}>
                                        <AppstoreAddOutlined /> Brand
                                    </Link>
                                </li>
                                <li>
                                    <Link className='block w-full px-3 py-2' to={'/category'}>
                                        <AppstoreAddOutlined /> Modal
                                    </Link>
                                </li>
                                <li>
                                    <Link className='block w-full px-3 py-2' to={'/category'}>
                                        <AppstoreAddOutlined /> Variation By
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
