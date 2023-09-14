import './App.css';
import { Toaster } from 'react-hot-toast';
import JobCardContainer from './Components/JobCardContainer';
import JobForm from './Components/JobForm';

function App() {
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
         <JobForm/>
       </>
  );
}

export default App;
