/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'
import { base_url, formDataWithToken, getData } from '../../utils';
import { Switch } from '@material-tailwind/react';

const CreateCategory = () => {
    interface Category {
        _id: string,
        title: string,
        image: string,
        is_hidden: boolean
    }
    const [image, setImage] = React.useState<File | null>(null);
    const [title, setTitle] = React.useState<string>('');
    const [mesg, setMsg] = React.useState<string>();
    const [data, setData] = React.useState<Category[]>([]);
    const handleimage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    }
    const handletitle = (e: React.ChangeEvent<HTMLInputElement>) => {

        setTitle(e.target.value);

    }
    const postdata = async () => {
        const formData = new FormData();
        if (!image) {
            setMsg("image is required");
            return;
        }
        formData.append('image', image);
        formData.append('title', title);

        try {
            await formDataWithToken('category', formData).then(resp => {
                //@ts-expect-error
                setMsg(resp.message);
                getdata();
                setTitle('');
                setImage(null);
            })

        } catch (error) {
            console.log(mesg)
            console.error('Error:', error);
        }
    };
    const getdata = async () => {
        await getData('category').then((resp) => {
            setData(resp.data);
        })
    }
    const deletecategory = async (id: string) => {
        await fetch(base_url + 'api/v1/category/delete/' + id, {
            method: "DELETE"
        }).then((resp) => {
            console.log(resp);
            getdata();
        })
    }
    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-3 gap-4 *:required:form-control">
                        {
                            mesg && (
                                <>
                                    <div className="col-span-3">
                                        <div className="w-full p-2 text-dark bg-indigo-200">
                                            {mesg}
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        <div className="col-span-1">
                            <label htmlFor="" className='form-label'>Enter Category</label>
                            <input title='category' type="text" onChange={handletitle} className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="" className='form-label'> Upload Image</label>
                            <input title='image' type="file" onChange={handleimage} className="form-control" />

                        </div>
                        <div className="col-span-1">
                            <label htmlFor="" className='block mb-2'>&nbsp;</label>
                            <button type='button' onClick={postdata} title='button' className="text-sm bg-gradient px-4 uppercase font-light tracking-widest py-2 rounded-lg shadow-lg shadow-indigo-600 text-white"><SaveOutlined /> Save Category</button>
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <table className="w-full *:text-start table-fixed">
                            <thead>
                                <tr className='*:text-start  *:border *:border-blue-gray-300 *:p-2'>
                                    <th>Sr No</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th>Hide</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 && data.map((itm, idx) => (
                                        <>
                                            <tr className='*:text-sm *:border *:border-blue-gray-300 *:p-2'>
                                                <td>
                                                    {idx + 1}
                                                </td>
                                                <td>
                                                    {itm.title}
                                                </td>
                                                <td>
                                                    <img src={base_url + itm.image} alt="" className="size-10 object-contain rounded-full" />
                                                </td>
                                                <td>
                                                    <Switch checked={itm.is_hidden} color='indigo' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                                                </td>
                                                <td>
                                                    <div className="inline-flex gap-2">
                                                        <button type='button' onClick={() => deletecategory(itm._id)} title='delet button' className="bg-red-500 text-xs uppercase tracking-widest text-white px-4 py-2 rounded-md">
                                                            <DeleteOutlined />
                                                        </button>
                                                        <button type='button' title='Edit button' className="bg-indigo-500 text-xs uppercase tracking-widest text-white px-4 py-2 rounded-md">
                                                            <EditOutlined />
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


export default CreateCategory
