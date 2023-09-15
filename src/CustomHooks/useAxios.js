import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const useAxios = () =>{

    axios.defaults.baseURL = "https://64ff468df8b9eeca9e29eea2.mockapi.io/jobOpenings";

    const sendRequest = useCallback( async (requestConfig, applyData, searchField ) => {
        
        const loadingToast = toast.loading('Fetching data...'); 
        try{   
            const response = await axios.request(requestConfig.url, {
                method: requestConfig.method ?  requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                data: requestConfig.data ? requestConfig.data : null, 
            });
            console.log(requestConfig)
            console.log(response.status);
            toast.dismiss(loadingToast.id)
            if(response.status===200){
                console.log(response.status);
            }

            const data = await response.data;
            toast.success(`${searchField} Fetched Successfully!!`);
             
            applyData(data);
        }catch (err){
            toast.dismiss(loadingToast.id);
            toast.error(`${searchField} not Found!!`) 
        }
        
    },[]);

    return {
        sendRequest,
    };
};

export default useAxios;