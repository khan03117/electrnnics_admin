import React from 'react'
import { EyeOutlined, LeftOutlined, SaveOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';




const ModalCreate: React.FC = () => {
    interface Category {
        _id: string,
        title: string,
        image: string,
        is_hidden: boolean
    }
    const [categories, setCategories] = React.useState<Category[]>([]);
    // const [brand, setbrand] = React.useState<Brand[]>([]);

    const [image, setImage] = React.useState<File | null>(null);
    const [title, setTitle] = React.useState<string>('');

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
    return (
        <section>
            <div className="container">
                <div className="w-full my-10">
                    <div className="flex gap-3 justify-end">
                        <Link to={'/modal-view'} className="text-sm bg-gradient px-4 uppercase font-light tracking-widest py-2 rounded-lg shadow-lg shadow-indigo-600 text-white" ><EyeOutlined />View Modal</Link>
                        <button className="text-sm bg-black px-4 py-2 text-white uppercase font-light tracking-widest rounded-lg shadow-lg"><LeftOutlined /> Back</button>
                    </div>


                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-1">
                        <label htmlFor="">Select Category</label>
                        <select name="" id="" className="form-select form-control">
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
                        <label htmlFor="">Select Brand</label>
                        <select name="" id="" className="form-select form-control">
                            <option value="">--Select---</option>
                            <option value="">dfsdsdfjfd</option>

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
                        <button type='button' onClick={postdata} title='button' className="text-sm bg-gradient px-4 uppercase font-light tracking-widest py-2 rounded-lg shadow-lg shadow-indigo-600 text-white"><SaveOutlined /> Save Modal</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModalCreate
