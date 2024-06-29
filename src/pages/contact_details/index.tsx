import React, { useEffect, useState } from 'react'
import { getData, postDataWithToken } from '../../utils'
import { Dialog, DialogBody, DialogHeader, Input } from '@material-tailwind/react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const ContactDetails = () => {
    interface Media {
        _id: string;
        title: string;
        type: string;
        media_value: string;
    }
    const [data, setData] = useState<Media[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [ntitle, setNtitle] = useState<string>('')
    const [nval, setNval] = useState<string>('')
    const [type, setType] = useState<string>('')
    const getdata = async () => {
        const resp = await getData('social/contact-media');
        setData(resp.data);
    }
    const handletitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNtitle(e.target.value);
    }
    const handlevalue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNval(e.target.value);
    }
    const handletype = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }
    const savedata = async () => {
        const adata = {
            title: ntitle,
            type: type,
            media_value: nval
        }
        await postDataWithToken('social/contact-media', { ...adata });
        setOpen(false);
        getdata();
        setNval('');
        setNtitle('')
    }
    const updatedata = async (id: string) => {
        const udata = {
            media_id: id,
            title: ntitle.length > 0 ? ntitle : data.find(obj => obj._id == id)?.title,
            type: type,
            media_value: nval.length > 0 ? nval : data.find(obj => obj._id == id)?.media_value,
        }
        await postDataWithToken('social/contact-media', { ...udata });
        setOpen(false);
        getdata();
    }
    const addnewsocial = () => {
        setOpen(!open);
    }
    useEffect(() => {
        getdata();
    }, [])
    return (
        <>
            {
                open && (
                    <>
                        <Dialog size='sm' open={open} handler={addnewsocial} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Add New Social Media
                            </DialogHeader>
                            <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <div className="w-full">

                                    <div className="form-group mb-3">
                                        <select onChange={handletype} className='w-full p-2 text-sm border border-blue-gray-200 outline-none rounded-sm' >
                                            <option value="">Select type</option>
                                            <option value="Social">Social</option>
                                            <option value="Contact">Contact</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <Input onChange={handletitle} value={ntitle} className='w-full' label='Enter Title Social' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <Input onChange={handlevalue} value={nval} className='w-full' label='Enter Social URL' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button onClick={savedata} className="w-full bg-indigo-900 text-white rounded-md p-3">Submit</button>
                                    </div>
                                </div>
                            </DialogBody>
                        </Dialog>

                    </>
                )
            }
            <section className="py-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-3">

                        <div className="col-span-2">
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className='*:border *:text-sm *:p-2 *:text-start'>
                                            <th>Sr No</th>
                                            <th>Type</th>
                                            <th>Title</th>
                                            <th>Url</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index} className='*:border *:text-sm *:p-2 *:text-start'>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {item.type}
                                                    <select onChange={handletype} className='w-full p-2 text-sm border border-blue-gray-200 outline-none rounded-sm' >
                                                        <option value="">Select type</option>
                                                        <option value="Social" >Social</option>
                                                        <option value="Contact">Contact</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    {item.title}
                                                    <input type="text" onChange={handletitle} value={ntitle} className="w-full p-2 outline-none border border-blue-gray-200" />
                                                </td>
                                                <td>
                                                    {item.media_value}
                                                    <input type="text" onChange={handlevalue} value={nval} className="w-full p-2 outline-none border border-blue-gray-200" />
                                                </td>
                                                <td>
                                                    <div className="inline-flex gap-2">
                                                        <button onClick={() => updatedata(item._id)} className="bg-indigo-800 px-2 py-2 rounded-sm text-white">
                                                            <EditOutlined />
                                                        </button>
                                                        <button onClick={() => updatedata(item._id)} className="bg-orange-800 px-2 py-2 rounded-sm text-white">
                                                            <DeleteOutlined />
                                                        </button>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))}
                                        <tr className='*:border *:text-sm *:p-2 *:text-start'>
                                            <td colSpan={4}>

                                            </td>
                                            <td>
                                                <button onClick={addnewsocial} className='bg-indigo-700 text-white rounded-sm p-1 text-xs '>Add New</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactDetails