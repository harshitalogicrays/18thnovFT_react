import './App.css';
import Firstclasscomp from './components/classcomp/firstclasscomp';
import FirstFunComp from './components/functionalcomp/FirstFunComp';
import PropsDemoinfun from './components/functionalcomp/PropsDemoinfun';

function App() {
  let name = "Happy Singh"
  return (
    <div className="container mt-5">
      {/* <h1 className="success">Hello {name}</h1> */}
      {/* <h2>Welcome to LRA</h2>
      <i className='bi bi-search'></i>
      <FirstFunComp></FirstFunComp>
      <Firstclasscomp/> */}
      <PropsDemoinfun username="Atul" mobileno={9087654321}
      isActive={true}></PropsDemoinfun>
  <hr/>
      <PropsDemoinfun username="Meera" 
      isActive={false}>
         <h2>Heading 2</h2>
      </PropsDemoinfun>
<hr/>
    <PropsDemoinfun username="Ram" 
      isActive={true}>
        <h2>Heading 2</h2>
        <p>para</p>
      </PropsDemoinfun> 
    </div>
  );
}

export default App;
