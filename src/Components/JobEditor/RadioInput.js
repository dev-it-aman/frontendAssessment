import React from 'react';

const RadioInput = ({ value, radioButtonChange}) => {
    
    const optionChangeHandler = (event) =>{
        console.log(event.target.value);
         radioButtonChange(event.target.value);
    }

    return (
        <div className='flex flex-col items-start gap-[4px]'>
            <div className="font-poppins text-base text-neutral-800 font-medium leading-tight">
                Apply type
            </div>
            <div className="flex h-9 py-2 items-center gap-4">
                <div className='flex gap-1'>
                     <input type="radio" value='Quick apply' checked={value === 'Quick apply'} onChange={optionChangeHandler}></input>
                     <label className='text-neutral-500 text-sm font-normal leading-tight' >Quick apply</label>
                </div>
                <div className='flex gap-1'>
                    <input type='radio' value='External apply' checked={value === 'External apply'} onChange={optionChangeHandler}></input>
                    <label className='text-neutral-500 text-sm font-normal leading-tight' >External apply</label>
                </div>
            </div>
        </div>
    )
};

export default RadioInput;