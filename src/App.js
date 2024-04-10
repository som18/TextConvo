

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import Darkmode from './Components/Darkmode'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router=  createBrowserRouter([
    {path:"/Textform.js",
    element:<Textform  heading="Enter your Text"/>},
    {path:"/About.js",
    element:<About/>},
  ])
  
  return (
    <>
    {/* <BrowserRouter> */}
    <div className='container-1'>
      <Navbar title ="TextConvo" aboutText="About Us"/>
      </div>
      
      <RouterProvider router={router}/>
      {/* <Darkmode/> */}
      
    
    {/* <div className='container my-3' >
      <About/> 
    </div> */}
    {/* <div className="container my-3">
        <Textform heading="Enter your Text"/>
     </div>
     <div className="container my-4" >
    <Routes>
            
            <Route  path="/Textform.js"
              element={
                <><Navbar/><div className="container my-3">
               <Textform heading="Enter your Text"/>
               </div></>
              }
            ></Route>
            <Route  path="/About.js" element={<><Navbar/><div className='container my-3' >
                <About/> 
                </div> </>}>
            </Route>
    </Routes>
    </div>
    </BrowserRouter>  */}
    </>
  );
}

export default App;
