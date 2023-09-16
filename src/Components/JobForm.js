import React, { useEffect, useState } from 'react';
import ReactDOM  from 'react-dom';
import InputField from './JobEditor/InputField';
import RadioInput from './JobEditor/RadioInput';
import useAxios from '../CustomHooks/useAxios';

const JobForm = ({jobOpeningData, editOpeningPosted, createOpeningPosted, closeJobForm}) => {
    const [step,setStep] = useState(1);
    const initialJobOpeningData = jobOpeningData ? jobOpeningData  : {
        "id":500,
        "jobTitle":'',
        "companyName":'',
        "industry":'',
        "location":'',
        "remoteType":'',
        "experience":{
            "minimum":0,
            "maximum":0,
        },
        "salary":{
            "minimum":0,
            "maximum":0,
        },
        "totalEmployee":0,
        "applyType":"",
    }
    console.log(initialJobOpeningData);
    const [openingData, setOpeningData]= useState(initialJobOpeningData);
    useEffect(()=>{
        setOpeningData(initialJobOpeningData);
    },[jobOpeningData]);
    const { sendRequest: uploadOpeningData } = useAxios(); 

    const openingButtonClickHandler = (event) =>{
        event.preventDefault();
        if(step===1){
            setStep(step+1);
        }else{
            setStep(1);
            const url = '/openings' + (jobOpeningData ? `/${openingData.id}` : '');
            uploadOpeningData({
                method:jobOpeningData?'PUT':'POST',
                url,
                headers:{'content-type':'application/json'},
                data:openingData,
            },(data)=> { 
                if(jobOpeningData){
                    editOpeningPosted(data);
                }else{
                    createOpeningPosted(data);
                };
                setOpeningData();
            },
            "Data posted") 
        }
    }

    const inputChangeHandler = (event) => {
        const { name, value} = event.target;
        const [fieldName, subField]= name.split('.');

        if (subField) {
            setOpeningData(prevFormData => ({
              ...prevFormData,
              [fieldName]: {
                ...prevFormData[fieldName],
                [subField]: value,
              },
            }));
          } else {
            setOpeningData({
              ...openingData,
              [fieldName]: value,
            });
          }
    }

    const step1Content = (
        <>
            <InputField labelText="Job title" placeholder="ex. UX UI Designer" name="jobTitle" value={openingData.jobTitle} onChange={inputChangeHandler}/>
            <InputField labelText="Company name" placeholder="ex. Google" name="companyName" value={openingData.companyName} onChange={inputChangeHandler}/>
            <InputField labelText="Industry" placeholder="ex. Information technology" name="industry" value={openingData.industry} onChange={inputChangeHandler}/>
            <div className="max-w-[513px] flex gap-6">
                <InputField labelText="Location" placeholder="ex. Chennai" name="location" value={openingData.location} onChange={inputChangeHandler}/>
                <InputField labelText="Remote type" placeholder="ex. In-office" name="remoteType" value={openingData.remoteType} onChange={inputChangeHandler}/>
            </div>
        </>
    );

    const step2Content = (
        <>
            <div className="max-w-[513px] flex gap-6">
                <InputField labelText="Experience" placeholder="Minimum" name="experience.minimum" value={openingData.experience.minimum} onChange={inputChangeHandler}/>
                <InputField placeholder="Maximum" name="experience.maximum" value={openingData.experience.maximum} onChange={inputChangeHandler}/>
                </div>
                <div className="max-w-[513px] flex gap-6">
                <InputField labelText="Salary" placeholder="Minimum" name="salary.minimum" value={openingData.salary.minimum} onChange={inputChangeHandler}/>
                <InputField placeholder="Maximum" name="salary.maximum" value={openingData.salary.maximum} onChange={inputChangeHandler}/>
            </div>
            <InputField labelText="Total Employee" placeholder="ex. 100" name="totalEmployee" value={openingData.totalEmployee} onChange={inputChangeHandler}/>
            <RadioInput name="applyType" value={openingData.applyType}/>
        </>
    );

    return ReactDOM.createPortal(
        <>
<div className="fixed inset-0 bg-gray-400 bg-opacity-90" onClick={closeJobForm}></div>
        <div className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[579px] h-[566px] p-8 bg-white rounded-[10px] border border-neutral-200 flex-col justify-between items-center gap-8 inline-flex">  
            <div className="w-[513px] h-[364px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-[513px] justify-between items-center gap-2 inline-flex">
                    <div className="text-zinc-900 text-xl font-normal leading-7">Create a job</div>
                    <div className="text-right text-zinc-900 text-base font-medium leading-normal">Step {step}</div>
                </div>
                {step===1 && step1Content}
                {step!==1 && step2Content}
            </div>
            <div className="flex w-[513px] justify-end items-center">
                <button className=" bg-sky-500 rounded-md shadow text-base font-medium leading-normal flex p-2 justify-center items-center" onClick={openingButtonClickHandler}>{step===1 && "Next" }{step!==1 && "Save"}</button>
            </div>
        </div>
        </>
        , document.querySelector(".JobForm")
    )
}

export default JobForm;