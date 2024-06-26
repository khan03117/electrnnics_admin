import React, { useEffect, useState } from 'react'
import { base_url, delete_data, formDataWithToken, getData } from '../../utils';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const CreateBanner = () => {
    interface Banner {
        _id: string;
        type: string;
        image: string;
        heading?: string;
        text?: string
    }
    const [image, setImage] = useState<File>();
    const [banners, setBanner] = useState<Banner[]>([]);
    const [heading, setHeading] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [type, setType] = useState('Banner');
    const [mesg, setMsg] = React.useState<string>();
    const [status, setStatus] = React.useState<string>();
    const handlefile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }
    const getbanners = async () => {
        await getData('banner').then(resp => {
            setBanner(resp.data)
        })
    }
    const deletebanner = async (id: string) => {
        await delete_data('banner/' + id).then(resp => {
            if (resp) {
                getbanners();
                setMsg(resp?.message);
                setStatus(resp?.success);
                setTimeout(() => {
                    setMsg('');
                    setStatus('0');
                }, 1000);
            }
        })
    }
    const save_banner = async () => {
        const Fdata = new FormData();
        if (image) {
            Fdata.append('image', image);
            Fdata.append('heading', heading);
            Fdata.append('text', text);
        }

        Fdata.append('type', type);
        await formDataWithToken('banner', Fdata).then((resp) => {
            if (resp) {
                getbanners();
                setMsg(resp?.message);
                setStatus(resp?.success);
                setTimeout(() => {
                    setMsg('');
                    setStatus('0');
                }, 1000);
            }
        })

    }
    useEffect(() => {
        getbanners();
    }, [])
    return (
        <>
            <section className="py-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-5 gap-4 mb-10">
                        {
                            mesg && (
                                <>
                                    <div className={`col-span-5 rounded-md ${status == "1" ? 'bg-green-700' : 'bg-red-700'}`}>
                                        <div className="w-full rounded-md p-4 text-white">
                                            {mesg}
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        <div className="col-span-1">
                            <label htmlFor="">Select Type</label>
                            <select onChange={(e) => setType(e.target.value)} className="w-full p-2 border border-blue-gray-200">
                                <option value="Banner">Banner</option>
                                <option value="CTA">CTA</option>
                            </select>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Select Image</label>
                            <input title="image" onChange={handlefile} type="file" className="w-full p-2 border border-blue-gray-200" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Enter Heading</label>
                            <input title="text" onChange={(e) => setHeading(e.target.value)} type="text" name="" id="" className="w-full p-2 border border-blue-gray-200" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Enter Text</label>
                            <input title="text" onChange={(e) => setText(e.target.value)} type="text" name="" id="" className="w-full p-2 border border-blue-gray-200" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="" className='block'>&nbsp;</label>
                            <button onClick={save_banner} className="px-3 text-white text-sm py-2 bg-blue-800">Save Banner</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className='*:text-sm *:border *:border-blue-gray-200 *:p-2 *:text-start'>
                                            <th>Sr No</th>
                                            <th>Type</th>
                                            <th>Image</th>
                                            <th>Heading</th>
                                            <th>text</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            banners.map((bann, index) => (
                                                <>
                                                    <tr className='*:text-sm  *:border-blue-gray-200 *:border *:p-2'>
                                                        <td>
                                                            {index + 1}
                                                        </td>
                                                        <td>
                                                            {bann.type}
                                                        </td>
                                                        <td>
                                                            <img src={base_url + bann.image} alt="" className="size-20" />
                                                        </td>
                                                        <td>
                                                            {bann.heading}
                                                        </td>
                                                        <td>
                                                            {bann.text}
                                                        </td>
                                                        <td>
                                                            <div className="flex gap-2">
                                                                <button onClick={() => deletebanner(bann._id)} title='delete button' className="bg-amber-900 text-white size-10 rounded-md">
                                                                    <DeleteOutlined />
                                                                </button>
                                                                <button title='delete button' className="bg-blue-900 text-white size-10 rounded-md">
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


                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateBanner
