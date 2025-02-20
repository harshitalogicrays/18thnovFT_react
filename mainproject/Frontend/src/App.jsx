import { Outlet } from 'react-router'
import './App.css'
import Image1 from '/src/assets/images/a.jpg'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
  <>
    {/* <img src={Image1}/> */}

    {/* <h1 className='font-bold text-red-500'>Hello world!</h1>
    <button type="button" className='bg-amber-400 border-2 border-amber-900
     border-solid p-10 cursor-pointer hover:bg-red-600 hover:text-3xl 
     transition-all duration-3000 ease' onClick={()=>alert("button clicked")}>click me</button> */}
    <ToastContainer position="bottom-left"
                  autoClose={2000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable={false}
                  pauseOnHover={false}
                  theme="colored"
/>
    <Outlet/>
  </>
  )
}

export default App
