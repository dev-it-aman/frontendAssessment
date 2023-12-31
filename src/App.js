import './App.css';
import { useEffect,useState } from 'react';
import { Toaster } from 'react-hot-toast';
import JobCardContainer from './Components/JobCardContainer';
import JobForm from './Components/JobForm';
import NavBar from './Components/NavBar/NavBar';
import useAxios from './CustomHooks/useAxios';

function App() {
  const [openings, setOpenings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [jobOpeningDataEdit,setJobOpeningDataEdit] = useState();
  const { sendRequest: fetchOpeningsRequest } = useAxios();
  const { sendRequest: deleteOpeningRequest } = useAxios();

  useEffect(()=> {
    const url = "/openings";

    fetchOpeningsRequest( { url },
    data=>{  setOpenings(data); console.log(data)},
    "Openings Fetched");
   },[]);

   const editOpening = (openingData) => {
        setJobOpeningDataEdit(openingData);
        setShowForm(true);
   }

   const createOpening = () => {
         setJobOpeningDataEdit();
         setShowForm(true);
   }

   const onEditDoneHandler = (editedOpening) => {
        setShowForm(false);
        setJobOpeningDataEdit();
        setOpenings( openings.map(opening => opening.id === editedOpening.id ? editedOpening : opening));
   }

   const onOpeningCreatedHandler = (newOpeningData) => {
        setShowForm(false);
        setOpenings([...openings,newOpeningData]);
   }

   const closeFormHandler =() => {
    setShowForm(false);
   }

   const deleteOpening = (id) => {
      const url = `openings/${id}`
      deleteOpeningRequest({
          url,
          method:'DELETE',
      },(data)=>console.log(data),
      "Opening Deleted")

      setOpenings(openings.filter(opening=> opening.id !== id));
   }

  return (
       <>
            <Toaster position='top-center' toastOptions={{
              success: {
                theme: {
                  primary: '#4aed88',
                }
              }
            }
            }>
            </Toaster>
             <NavBar createOpeningHandler={createOpening}/>
             <JobCardContainer openings={openings} deleteHandler={deleteOpening} editHandler={editOpening}/> 
           {showForm>0 && <JobForm 
                              closeJobForm={closeFormHandler} 
                              jobOpeningData={jobOpeningDataEdit} 
                              editOpeningPosted={onEditDoneHandler} 
                              createOpeningPosted={onOpeningCreatedHandler}/>}
       </>
  );
}

export default App;
