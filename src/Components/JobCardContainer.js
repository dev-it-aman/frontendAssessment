import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import useAxios from '../CustomHooks/useAxios';
const JobCardContainer = () => {

    const {sendRequest: fetchOpenings} = useAxios();
    const [openings, setOpenings] = useState([]);

    useEffect(()=> {
        const url = "/openings";

        fetchOpenings( {url},
        (data)=> { setOpenings(data);
            console.log(data);},
        "Openings");
    },[]);

    const jobOpeningDeleteHandler = (id) =>{
        const url = `openings/${id}`
        fetchOpenings({
            url,
            method:'DELETE',
        },(data)=>console.log(data),
        "JobId")
          setOpenings(openings.filter(opening=> opening.id !== id));
    };
    

    return (
        <div className="w-[100%] pl-[85px] pr-[44.88px] pt-[30px] pb-[30px] bg-zinc-300 items-start gap-[83.12px] flex flex-wrap">
           {openings.map((opening) => {
            return (
                   <JobCard key={opening.id} openingData={opening} deleteHandler={jobOpeningDeleteHandler}/>
            )
           })}
        </div>
    )
};

export default JobCardContainer;