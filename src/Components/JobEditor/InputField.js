import React from 'react';

const InputField = ({labelText, placeholder, name, value, onChange}) => {
    return (
        <div className="w-[513px] h-[60px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
                <div className="w-[214px] justify-start items-center gap-2 inline-flex">
                    <div><span className="text-neutral-800 text-sm font-medium leading-tight">{labelText}</span><span className="text-red-400 text-sm font-medium leading-tight">*</span></div>
                </div>
                    <input className="grow self-stretch h-5 min-w-0 max-w-[513px] px-3 py-2 bg-white rounded-[5px] border border-neutral-200" placeholder={placeholder} name={name} value={value} onChange={onChange}></input>
                    
            </div>
        </div>
    )
}

export default InputField;