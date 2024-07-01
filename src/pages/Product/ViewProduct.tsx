import { DeleteOutlined, EditOutlined, LeftOutlined, PlusOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { base_url, getData } from '../../utils'
import Swal from 'sweetalert2';
interface Category {
    _id: string;
    url: string;
    image: string;
    title: string;
    is_hidden: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Modal {
    brand: string;
    modal: string;
    moq: number;
    stock: number;
    _id: string;
}

interface Product {
    _id: string;
    url: string;
    category: Category;
    product_type: string;
    title: string;
    price: number;
    images: string[];
    modals: Modal[];
    description: string;
    is_hidden: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}


const ViewProduct: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const deleteHandle = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'User will have Admin Privileges',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(base_url + 'api/v1/product/delete/' + id, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                getdata();
            }
        })
    }
    const getdata = async () => {
        await getData('product').then(resp => {
            setProducts(resp.data);
        })
    }
    useEffect(() => {
        getdata();
    }, [])
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
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((pdt, index) => (
                                        <>
                                            <tr className='*:text-start *:text-sm  *:border *:border-blue-gray-300 *:p-2'>
                                                <td>
                                                    {index + 1}
                                                </td>
                                                <td>
                                                    {pdt.category?.title}
                                                </td>
                                                <td>
                                                    {pdt.title}
                                                </td>
                                                <td>
                                                    {pdt?.price}
                                                </td>
                                                <td>
                                                    <ul className='flex flex-wrap'>
                                                        {pdt.images.map(img => (
                                                            <>
                                                                <li>
                                                                    <img src={base_url + img} alt="" className="size-10" />
                                                                </li>
                                                            </>
                                                        ))}
                                                    </ul>

                                                </td>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <Link to={'/product/edit/'+pdt._id} title='edit' className='bg-indigo-800 text-white p-3'>
                                                            <EditOutlined />
                                                        </Link>
                                                        <button onClick={() => deleteHandle(pdt._id)} title='delete+' className='bg-amber-800 text-white p-3'>
                                                            <DeleteOutlined />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ViewProduct
