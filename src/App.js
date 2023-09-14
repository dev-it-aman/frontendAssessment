import './App.css';
import { Toaster } from 'react-hot-toast';
import JobCardContainer from './Components/JobCardContainer';

function App() {
  return (
       <>
          <div>
            <Toaster position='top-center' toastOptions={{
              success: {
                theme: {
                  primary: '#4aed88',
                }
              }
            }
            }>
            </Toaster>
          </div>
         <JobCardContainer/>
       </>
  );
}

export default App;
