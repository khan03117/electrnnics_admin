import { EyeOutlined, LeftOutlined, SaveOutlined } from '@ant-design/icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react'
import { Link } from 'react-router-dom';

const ProductCreate: React.FC = () => {
    const [title, setTitle] = React.useState<string>('');
    const [detail, setdetail] = React.useState<string>('');

    const [image, setImage] = React.useState<File | null>(null);

    const handletitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    // const handleimage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         setImage(e.target.files[0]);
    //     }
    // }

    const handledetail = (event: React.ChangeEvent<HTMLInputElement>, editor: { getData: () => any; }) => {
        const data = editor.getData();
        setdetail(data);
    };

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
        <>

            <section>
                <div className="container">
                    <div className="flex gap-3 justify-end mb-10">
                        <Link to={'/view-product'} className="text-sm bg-gradient px-4 uppercase font-light tracking-widest py-2 rounded-lg shadow-lg shadow-indigo-600 text-white"><EyeOutlined /> View Product</Link>
                        <button className="text-sm bg-black px-4 py-2 text-white uppercase font-light tracking-widest rounded-lg shadow-lg"><LeftOutlined /> Back</button>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="col-span-1">
                            <label htmlFor="">Select Category</label>
                            <select name="" id="" className="form-select form-control">
                                <option value="">--Select---</option>
                                {/* {
                                    categories.map((cat) => (
                                        <>
                                            <option value={cat._id} key={cat._id}>{cat.title}</option>
                                        </>
                                    ))
                                } */}
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
                            <label htmlFor="">Select Modal</label>
                            <select name="" id="" className="form-select form-control">
                                <option value="">--Select---</option>
                                <option value="">dfsdsdfjfd</option>

                            </select>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Enter Title</label>
                            <input title='Title' type="text" onChange={handletitle} name="" id="" className="form-control" />
                        </div>


                        <div className="col-span-4">
                            <label htmlFor="description">Description</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={detail}
                                onChange={handledetail}

                                id="detail"
                            />
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
