import React from 'react';

const InputField = () => {
    return (
        <div className="flex flex-col items-start self-stretch gap-[4px]">
             <label>
                  Input Label<span className="text-red-500">*</span>:
             </label>
             <input type='text' placeholder='placeholder' value="ex. UX UI Designer"/>
        </div>
    )
}

export default InputField;