import React from 'react';
import InputField from './JobEditor/InputField';

const JobForm = () => {
    return (
        <div className="w-[579px] h-[566px] p-8 bg-white rounded-[10px] border border-neutral-200 flex-col justify-between items-center gap-8 inline-flex">  
            <div className="w-[513px] h-[364px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-[513px] justify-between items-center gap-2 inline-flex">
                    <div className="text-zinc-900 text-xl font-normal leading-7">Create a job</div>
                    <div className="text-right text-zinc-900 text-base font-medium leading-normal">Step 1</div>
                </div>
                 <InputField/>
                 <InputField/>
                 <InputField/>
                 <div className="max-w-[513px] flex gap-6">
                       <InputField/>
                       <InputField/>
                 </div>
            </div>
            <div className="flex w-[513px] justify-end items-center">
                <button className=" bg-sky-500 rounded-md shadow text-base font-medium leading-normal flex p-2 justify-center items-center">Next</button>
            </div>
        </div>
    )
}

export default JobForm;