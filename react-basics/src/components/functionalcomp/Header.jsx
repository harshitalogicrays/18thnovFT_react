import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  let funlinks = [
    {id:1,url:"/fun/first",text:"First Functional Component"},
    {id:2,url:"/fun/props",text:"Props in Functional Component"},
    {id:4,url:"/fun/counter",text:"Counter App"},
    {id:5,url:"/fun/list",text:"List Rendering"},
    {id:6,url:"/fun/list/products",text:"List Rendering2"},
    {id:7,url:"/fun/form/validation/regular" ,text:"Form Validations"},
    {id:8,url:"/fun/form/validation/rhf" ,text:"React Hook Form"},
    {id:9,url:"/fun/ltsu" ,text:"Lifting the state up"},
   {id:10,url:"/fun/hooks" ,text:"Hooks Demo"},
  ] 
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">routing</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link" >
            <NavLink to='/'  className={({ isActive }) =>
                  isActive ? "text-danger bg-warning text-decoration-none" : "text-white text-decoration-none"
                }>Home</NavLink>
        </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >
            <NavLink to='/about'
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
                backgroundColor:isActive ? "yellow" : "",
                textDecoration:"none"
              })}
            >About</NavLink></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Functional Component
          </a>
          <ul class="dropdown-menu">
            {funlinks.map((link,index)=>
            <React.Fragment key={link.id}>
                <li><a class="dropdown-item"><NavLink to={link.url}
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    backgroundColor:isActive ? "yellow" : "",
                    textDecoration:"none"
                  })} 
                  end
                >{link.text}</NavLink></a></li>
                {index != funlinks.length-1 && 
                <li><hr class="dropdown-divider"/></li>}
            </React.Fragment>
            )}
           
          </ul>
        </li>


        <li class="nav-item">
          <a class="nav-link" >
            <NavLink to='/class/first'
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
                backgroundColor:isActive ? "yellow" : "",
                textDecoration:"none"
              })}
            >Class Component</NavLink></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" >
            <NavLink to='/styledcomp'
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
                backgroundColor:isActive ? "yellow" : "",
                textDecoration:"none"
              })}
            >Styled Component</NavLink></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <div className="input-group">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-danger" type="submit"><i className='bi bi-search'></i></button></div>
      </form>
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
