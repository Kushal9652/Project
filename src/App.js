import { Outlet } from 'react-router';
import './App.css';
import { useMatch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Vydyafooter from './Components/Vydyafooter';

// import FooterNav from './Components/Footer';

function App() {
  const check = useMatch('');
if(check){
  return(
    <div className='h-auto w-screen '>
          <Outlet />
        </div>
  )
}
 else {
  return (
    <>
      <div className='relative '>
        <Navbar />
        <div className='h-auto w-screen scrollbar-hide relative top-[4rem]'>
          <Outlet />
        </div>
       <div className='relative top-[4rem]'>
       <Vydyafooter/>
       </div>
      </div>
    </>
  );
 }
}

export default App;