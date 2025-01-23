import { Outlet } from 'react-router'
import './App.css'
import Image1 from '/src/assets/images/a.jpg'
function App() {
  return (
  <>
    {/* <img src={Image1}/> */}

    <h1 className='font-bold text-red-500'>Hello world!</h1>
    <button type="button" className='bg-amber-400 border-2 border-amber-900
     border-solid p-10 cursor-pointer hover:bg-red-600 hover:text-3xl 
     transition-all 4s ease' onClick={()=>alert("button clicked")}>click me</button>
    <Outlet/>
  </>
  )
}

export default App
