import React from 'react';
import InputField from './JobEditor/InputField';

const JobForm = () => {
    return (
        <div className="w-[579px]  justify-center p-[32px] bg-white items-center rounded-[10px] border border-var(--elements-color-card-border-e-6-e-6-e-6, #E6E6E6) bg-var(--elements-color-card-color-ffffff, #FFF)">
            <div className="flex w-[513px] flex-col items-start gap-[24px]">
                 <div className="flex w-[513px] justify-between items-center">
                    <div className="font-poppins text-base font-normal leading-7">
                        Create a job
                    </div>
                    <div className="flex justify-end">
                        <p>Step 1</p>
                    </div>
                 </div>
                 <InputField/>
                 <InputField/>
                 <InputField/>
                 <div className='flex gap-24px'>
                       <InputField/>
                       <InputField/>
                 </div>
            </div>
        </div>
    )
}

export default JobForm;