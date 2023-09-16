import React from 'react';

const InputField = ({labelText, placeholder, name, value, onChange, onBlur, IsValid, hasError, isMandatory}) => {
    
    const inputClass = `grow self-stretch max-h-9 min-w-0 max-w-[513px] px-3 py-2 bg-white rounded-[5px] border border-neutral-200`;
    const invalidStyles = `border border-red-600 bg-red-100 focus:border-yellow-500 focus:bg-yellow-50`;
    const inputClasses = hasError ? `${inputClass} ${invalidStyles}` : `${inputClass}`;

    return (
        <div className="w-[513px] h-[60px] flex-col gap-2">
            <div className=" h-[60px] flex-col justify-end items-start gap-1 flex">
                <div className="w-[214px] justify-start items-end gap-2 inline-flex">
                    <div><span className="text-neutral-800 text-sm font-medium leading-tight">{labelText}</span>{isMandatory==="mandatory" && <span className="text-red-400 text-sm font-medium leading-tight">*</span>}</div>
                    {hasError && <p className='text-sm text-red-600 leading-tight'>Required</p>}
                </div>
                    <input className={inputClasses} placeholder={placeholder} name={name} value={value} onChange={onChange} onBlur={onBlur}></input>
            </div>
        </div>
    )
}

export default InputField;