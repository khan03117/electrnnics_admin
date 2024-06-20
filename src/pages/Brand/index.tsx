import { SaveOutlined } from '@ant-design/icons'
import React from 'react'
import { getData } from '../../utils';

const Brand: React.FC = () => {
    interface Category {
        _id: string,
        title: string,
        image: string,
        is_hidden: boolean
    }
    const [image, setImage] = React.useState<File | null>(null);
    const [title, setTitle] = React.useState<string>('');
    // const [mesg, setMsg] = React.useState<string>();
    const [categories, setCategories] = React.useState<Category[]>([]);
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

            return;
        }
        formData.append('image', image);
        formData.append('title', title);
        //logic for post
    }
    const getdata = async () => {
        await getData('category').then((resp) => {
            setCategories(resp.data);
        })
    }
    React.useEffect(() => {
        getdata();
    }, []);
    return (

        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-4 gap-5">
                        <div className="col-span-1">
                            <label htmlFor="">Select Category</label>
                            <select name="" id="" className="form-select">
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
                            <label htmlFor="">Enter Brand</label>
                            <input title='Brand' type="text" onChange={handletitle} name="" id="" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Upload Image</label>
                            <input title='Brand' type="file" onChange={handleimage} name="" id="" className="form-control" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="" className='block mb-2'>&nbsp;</label>
                            <button type='button' onClick={postdata} title='button' className="text-sm bg-gradient px-4 uppercase font-light tracking-widest py-2 rounded-lg shadow-lg shadow-indigo-600 text-white"><SaveOutlined /> Save Brand</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand
