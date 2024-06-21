import { Checkbox } from '@material-tailwind/react'
import React from 'react'

const CreateVariant: React.FC = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h2 className='font-bold text-2xl'>Make Variant For Product</h2>
                        </div>
                        <div className="grid grid-cols-3  align-center justify-center">
                            <div className="col-span-1">
                                <h3 className='font-bold '>These Are Variant </h3>
                            </div>
                            <div className="col-span-1">
                                <Checkbox label="Brand" color='indigo' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                                <Checkbox label="Color" color='indigo' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                            </div>
                            <div className="col-span-2 justify-center">
                                <div className="bg-white shadow p-3">
                                    <h3 className='font-bold text-xl'>Add New Varient Products</h3>
                                    <form>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="col-span-1">
                                                <label htmlFor="">Brand</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className="col-span-1">
                                                <label htmlFor="">Material</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className="col-span-1">
                                                <label htmlFor="">Mrp</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                            <div className="col-span-1">
                                                <label htmlFor="">Price</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateVariant
