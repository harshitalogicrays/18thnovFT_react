import './App.css';
import Firstclasscomp from './components/classcomp/firstclasscomp';
import EventDemoinfun from './components/functionalcomp/EventDemoinfun';
import FirstFunComp from './components/functionalcomp/FirstFunComp';
import PropsDemoinfun from './components/functionalcomp/PropsDemoinfun';
import Statedemo1 from './components/functionalcomp/Statedemo1';
import Statedemocounter from './components/functionalcomp/Statedemocounter';
import cssm from './app.module.css'
import Image1 from './assets/images/a.jpg'
import ListRendering from './components/functionalcomp/ListRendering';
import Products from './components/functionalcomp/Products';
import SaleProducts from './components/functionalcomp/SaleProducts';
import Header from './components/functionalcomp/Header';
function App() {
  let name = "Happy Singh"
  return (
    <>
      {/* <h1 className="success">Hello {name}</h1>
      <h2 className={cssm.error}>Welcome to LRA</h2>
      <img src={Image1} className='img-fluid'/> */}
       {/* <i className='bi bi-search'></i>
      <FirstFunComp></FirstFunComp>
      <Firstclasscomp/> */}
      {/* <PropsDemoinfun username="Atul" mobileno={9087654321}
      isActive={true}></PropsDemoinfun>
  <hr/>
      <PropsDemoinfun username="Meera" 
      isActive={false}>
         <h2>Heading 2</h2>
      </PropsDemoinfun>
<hr/> */}
    {/* <PropsDemoinfun username="Ram" 
      isActive={true}>
        <h2>Heading 2</h2>
        <p>para</p>
      </PropsDemoinfun>  */}
  {/* <EventDemoinfun/> */}

      {/* <Statedemocounter c={1}/> */}
      {/* <Statedemo1/> */}

      {/* <ListRendering/> */}

      <Header/>
      <Products/>
      <SaleProducts/>
    </>
  );
}

export default App;
