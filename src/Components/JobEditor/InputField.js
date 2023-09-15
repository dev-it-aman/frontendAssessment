import React from 'react';

const InputField = ({labelText, placeholder, name, value, onChange}) => {
    return (
        <div className="w-[513px] h-[60px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
                <div className="w-[214px] justify-start items-center gap-2 inline-flex">
                    <div><span className="text-neutral-800 text-sm font-medium leading-tight">{labelText}</span><span className="text-red-400 text-sm font-medium leading-tight">*</span></div>
                </div>
                <div className="self-stretch px-3 py-2 bg-white rounded-[5px] border border-neutral-200 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-center flex">
                        <input className="flex-grow min-w-0 max-w-[513px]" placeholder={placeholder} name={name} value={value} onChange={onChange}></input>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default InputField;