import React from 'react';

const JobCard = () => {
    return (
        <div className='w-[830px] self-stretch px-6 py-4 bg-white rounded-[10px] border border-black-300 flex justify-between gap-2.5'>
            <div className='flex items-start gap-2 self-stretch'>
                <img className="w-12 h-12 rounded-[5px]" src="https://via.placeholder.com/48x48" />
                    <div className='flex flex-col items-start gap-6'>
                        <div class="flex flex-col items-start">
                            <div class="font-poppins text-2xl font-normal leading-8">
                                Your text goes here
                            </div>
                            <div class="font-poppins text-base font-normal leading-6">
                                Your text goes here
                            </div>
                            <div class="font-poppins text-base font-normal leading-6 text-gray-700">
                                Your text goes here
                            </div>   
                        </div>
                         <div className="flex flex-col items-start gap-2 self-stretch">
                            <div class="font-poppins text-base font-normal leading-6 text-gray-800">
                                Your text goes here
                            </div>
                            <div class="font-poppins text-base font-normal leading-6 text-gray-800">
                                Your text goes here
                            </div>
                            <div class="font-poppins text-base font-normal leading-6 text-gray-800">
                                Your text goes here
                            </div>
                            <div class="font-poppins text-base font-normal leading-6 text-gray-800">
                                Your text goes here
                            </div>
                         </div>
                         <div className="w-[118px] h-10 justify-start items-start inline-flex">
                             <div className="px-4 py-2 bg-sky-500 rounded-md shadow justify-center items-center flex">
                             <button className="text-white text-base font-medium leading-normal">Apply Now</button>
                         </div>
                        </div>
                    </div>
            </div>
            <div className="flex flex-col items-start w-32 h-14 gap-2">
                Edit
            </div>
        </div>
    )
};

export default JobCard;