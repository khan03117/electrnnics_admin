import React from 'react'
import CkeditorCom from '../../layout/CkeditorCom'

const CreatePolicy = () => {
    const [editorData, setEditorData] = React.useState<string>('');
    const handleEditorChange = (data: string) => {
        setEditorData(data);
    };
    return (
        <>
            <section className="py-10">
                <div className="container">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">
                            <label htmlFor="">Select Policy</label>
                            <select name="" id="" className="w-full p-2 text-sm rounded-md border border-blue-gray-200">
                                <option value="">---Select---</option>
                                <option value="new">Create New</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="policy_title">Enter Policy Title</label>
                            <input placeholder='Enter policy tilte' type="text" name="" id="policy_title" className="form-control" />
                        </div>
                        <div className="col-span-3">
                            <CkeditorCom value={editorData} onChange={handleEditorChange} />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default CreatePolicy
