import React from 'react';

const JobCard = ({openingData, deleteHandler}) => {

    const deleteButtonClick = () => {
        deleteHandler(openingData.id);
    }

    return (
        <div className='w-[45%] px-6 py-4 bg-white rounded-[10px] border border-black-300 flex justify-between gap-2.5'>
            <div className='flex items-start gap-2 self-stretch'>
                <img className="w-12 h-12 rounded-[5px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2w4EzSNsy6oIlmMcFalyEaYDhh4kRvsXbtosNaZEZEQ&s" />
                    <div className='flex flex-col items-start gap-6'>
                        <div className="flex flex-col items-start">
                            <div className="font-poppins text-2xl font-normal leading-8">
                               {openingData.jobTitle}
                            </div>
                            <div className="font-poppins text-base font-normal leading-6">
                                {openingData.companyName} - {openingData.industry}                            
                            </div>
                            <div className="font-poppins text-base font-normal leading-6 text-gray-700">
                                {openingData.location}
                            </div>   
                        </div>
                         <div className="flex flex-col items-start gap-2 self-stretch">
                            <div className="font-poppins text-base font-normal leading-6 text-gray-800">
                                 Part-Time (9.00 am - 5.00 pm IST)
                            </div>
                            <div className="font-poppins text-base font-normal leading-6 text-gray-800">
                                 Experience ({openingData.experience.minimum} - {openingData.experience.maximum} years)
                            </div>
                            <div className="font-poppins text-base font-normal leading-6 text-gray-800">
                                 INR (₹) {openingData.salary.minimum} - {openingData.salary.maximum} / Month
                            </div>
                            <div className="font-poppins text-base font-normal leading-6 text-gray-800">
                                {openingData.totalEmployee} employees
                            </div>
                         </div>
                             <button className="w-[118px] h-10 justify-start items-start inline-flex text-white px-4 py-2 bg-sky-500 rounded-md shadow text-base font-medium leading-normal">Apply Now</button>
                    </div>
            </div>
            <div className=" items-start w-32 h-14 gap-2 flex justify-end ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-blue-700 transform scale-100 hover:scale-125 transition-transform duration-300 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-blue-700 transform scale-100 hover:scale-125 transition-transform duration-300 cusror-pointer" onClick={deleteButtonClick}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

            </div>
        </div>
    )
};

export default JobCard;