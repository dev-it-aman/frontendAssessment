import React from 'react';
import JobCard from './JobCard';

const JobCardContainer = () => {
    return (
        <div className="w-[100%] pl-[85px] pr-[44.88px] pt-[30px] pb-[30px] bg-zinc-300 items-start gap-[83.12px] flex flex-wrap">
           <JobCard/>
           <JobCard/>
            <JobCard/>
           {/* <JobCard/> */} 
        </div>
    )
};

export default JobCardContainer;