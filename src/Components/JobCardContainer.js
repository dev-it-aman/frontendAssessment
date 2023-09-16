import React from 'react';
import JobCard from './JobCard';
const JobCardContainer = ({openings, deleteHandler, editHandler}) => {
    console.log(openings);
    const jobOpeningEditHandler = (jobOpeningData) => {
        editHandler(jobOpeningData);
    }

    const jobOpeningDeleteHandler = (id) =>{
        deleteHandler(id);
    };
    

    return (
        <div className="w-[100%] pl-[85px] pr-[44.88px] pt-[30px] pb-[30px] bg-zinc-300 items-start gap-[83.12px] flex flex-wrap">
           {openings.map((opening) =>
            {
            return (
                   <JobCard key={opening.id}
                    openingData={opening} 
                    deleteHandler={jobOpeningDeleteHandler} 
                    editHandler={jobOpeningEditHandler}/>
            )
           })}
        </div>
    )
};

export default JobCardContainer;