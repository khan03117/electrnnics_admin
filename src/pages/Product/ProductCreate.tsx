import { EyeOutlined, PlusCircleOutlined, SaveOutlined } from '@ant-design/icons';

import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CkeditorCom from '../../layout/CkeditorCom';
import { formDataWithToken, getData } from '../../utils';
import { Checkbox } from '@material-tailwind/react';


const ProductCreate: React.FC = () => {
    interface Smodal { brand: string | undefined; modal: string; stock: number; moq: number; }
    interface Category {
        _id: string,
        title: string,
        image: string,
        is_hidden: boolean
    }
    interface Brand {
        _id: string,
        title: string,
        image: string,
        is_hidden: boolean
    }

    interface Modal {
        title: string,
        url: string,
        image: string,
        _id: string,
        modals: Brand[]
    }

    const [title, setTitle] = React.useState<string>('');
    const [editorData, setEditorData] = React.useState<string>('');
    const [images, setImages] = useState<File[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [modals, setModals] = useState<Modal[]>([]);
    const [selectedmodal, setSelectedModal] = useState<Smodal[]>([]);
    const [amount, setAmount] = useState<string>('')
    const [category_id, setCategoryId] = useState<string>('');
    const [msg, setMsg] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const getModals = async () => {
        await getData('modal').then(resp => {
            setModals(resp.data)
        });
    }

    const handlemodalselect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const brand = e.target.dataset.brand;
        const arr: Smodal[] = [...selectedmodal];
        if (e.target.checked) {
            const obj: Smodal = {
                brand: brand,
                modal: val,
                stock: 0,
                moq: 0
            }
            arr.push(obj);
            setSelectedModal(arr);
        } else {
            const narr = arr.filter(obj => obj.modal != val);
            setSelectedModal(narr);
        }
    }
    useEffect(() => {
        getModals();
    }, [])

    const getcategories = async () => {
        await getData('category').then((resp) => {
            setCategories(resp.data);
        })
    }




    useEffect(() => {
        getcategories();
    }, [])
    const handleEditorChange = (data: string) => {
        setEditorData(data);
    };
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImages(Array.from(event.target.files));
        }
    };

    const handletitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handlecategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryId(e.target.value);
    }
    const handleamount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }
    const moqhandle = (e: React.ChangeEvent<HTMLInputElement>, bid: string, mid: string) => {
        const newMoq = parseInt(e.target.value, 10);
        const updatedArray = selectedmodal.map((item) => {
            if (item.brand == bid && item.modal == mid) {
                return { ...item, moq: newMoq };
            }
            return item;
        });

        setSelectedModal(updatedArray);

    }
    const stockhandle = (e: React.ChangeEvent<HTMLInputElement>, bid: string, mid: string) => {
        const stock = parseInt(e.target.value, 10);
        const updatedArray = selectedmodal.map((item) => {
            if (item.brand == bid && item.modal == mid) {
                return { ...item, stock: stock };
            }
            return item;
        });

        setSelectedModal(updatedArray);

    }
    useEffect(() => {
        console.log(selectedmodal)
    }, [selectedmodal])




    const postdata = async () => {
        const formData = new FormData();
        if (images.length > 0) {
            images.forEach((file) => {
                formData.append('images', file);
            });
        }
        formData.append('title', title);
        formData.append('modals', JSON.stringify(selectedmodal));
        formData.append('price', amount)
        formData.append('description', editorData)
        formData.append('product_type', 'wholesell');
        formData.append('category', category_id);
        await formDataWithToken('product', formData).then((resp) => {
            setMsg(resp.message);
            setStatus(resp.success);
            setTimeout(() => {
                setMsg('');
                setStatus('');
            }, 1000)
        })
    }

    return (
        <>

            <section>
                <div className="container">
                    <div className="flex gap-3 justify-end mb-4">
                        <Link to={'/view-product'} className="text-sm bg-gradient px-4 uppercase font-light tracking-widest py-2 rounded-lg shadow-lg shadow-indigo-600 text-white"><EyeOutlined /> View Product</Link>

                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        {
                            msg && (
                                <>
                                    <div className={`col-span-4 rounded-md ${status == "1" ? 'bg-green-700' : 'bg-red-700'}`}>
                                        <div className="w-full rounded-md p-4 text-white">
                                            {msg}
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        <div className="col-span-1">
                            <label htmlFor="">Select Category</label>
                            <select onChange={handlecategory} className="form-select form-control">
                                <option value="">--Select---</option>
                                {
                                    categories.map((cat) => (
                                        <>
                                            <option value={cat._id} key={cat._id}>{cat.title}</option>
                                        </>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="col-span-1">
                            <label htmlFor="">Enter Title</label>
                            <input title='Title' type="text" onChange={handletitle} name="" id="" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Enter Images</label>
                            <input title='files' type="file" onChange={handleFileChange} className="form-control" multiple />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Enter Amount <small className="text-deep-orange-800">per piece</small> </label>
                            <div className="flex border border-blue-gray-100 rounded-md">
                                <span className='p-2'>
                                    ₹
                                </span>
                                <input type="text" title='amount' onChange={handleamount} className="w-full p-2 outline-none focus-within:outline-none" />
                            </div>
                        </div>
                        <div className="col-span-4">

                            <div className="w-full">
                                {
                                    modals.map(modl => (
                                        <>
                                            <div className="w-full p-2 bg-white">
                                                <div className="w-full py-1 border-b border-blue-gray-300 bg-blue-gray-100 flex justify-between">
                                                    <h4 className="text-sm">
                                                        {modl.title}
                                                    </h4>
                                                    <button title='button' type="button">
                                                        <PlusCircleOutlined />
                                                    </button>
                                                </div>
                                                <div className="w-full p-2 bg-white">
                                                    <div className="grid grid-cols-6 gap-4">
                                                        {
                                                            modl.modals.map(modal => (
                                                                <>
                                                                    <div className="col-span-1 modalcheckbox">
                                                                        <Checkbox data-brand={modl._id} checked={selectedmodal.find(obj => obj.modal == modal._id) ? true : false} label={modal.title} onChange={handlemodalselect} className='text-xs' value={modal._id} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                                                                        {
                                                                            selectedmodal.find(obj => obj.modal == modal._id) ? (
                                                                                <>
                                                                                    <div className="w-full">
                                                                                        <div className="flex gap-2">
                                                                                            <div className="w-full">
                                                                                                <input type="number" value={selectedmodal.find(obj => obj.modal == modal._id)?.moq} onChange={(event) => moqhandle(event, modl._id, modal._id)} title='quantity' min={0} placeholder='MOQ' className="outline-none border w-full px-2 border-blue-gray-200 py-1 text-xs" />
                                                                                            </div>
                                                                                            <div className="w-full">
                                                                                                <input type="number" title='stock' value={selectedmodal.find(obj => obj.modal == modal._id)?.stock} onChange={(event) => stockhandle(event, modl._id, modal._id)} min={0} placeholder='Stock' className="outline-none border w-full px-2 border-blue-gray-200 py-1 text-xs" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                                            ) : (
                                                                                <></>
                                                                            )
                                                                        }

                                                                    </div>

                                                                </>
                                                            ))
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </div>



                        <div className="col-span-4">
                            <label htmlFor="description">Description</label>
                            <CkeditorCom value={editorData} onChange={handleEditorChange} />
                        </div>

                        <div className="col-span-1">
                            <label htmlFor="" className='block mb-2'>&nbsp;</label>
                            <button type='button' onClick={postdata} title='button' className="text-sm bg-gradient px-4 uppercase font-light tracking-widest py-2 rounded-lg shadow-lg shadow-indigo-600 text-white"><SaveOutlined /> Next</button>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}

export default ProductCreate
