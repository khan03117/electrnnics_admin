import { EyeOutlined, LeftOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const ViewProduct: React.FC = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex gap-3 justify-end">
                        <Link to={'/add-product'} className="text-sm bg-gradient px-4 uppercase font-light tracking-widest py-2 rounded-lg shadow-lg shadow-indigo-600 text-white"><PlusOutlined /> Add Product</Link>
                        <button className="text-sm bg-black px-4 py-2 text-white uppercase font-light tracking-widest rounded-lg shadow-lg"><LeftOutlined /> Back</button>
                    </div>
                    <div className="w-full mt-10">
                        <table className="w-full *:text-start table-fixed">
                            <thead>
                                <tr className='*:text-start  *:border *:border-blue-gray-300 *:p-2'>
                                    <th>Sr No</th>
                                    <th>Category</th>
                                    <th> Brand</th>
                                    <th> Modal</th>

                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ViewProduct
