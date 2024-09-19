import { useState } from 'react'
import { Container,Card,CardBody } from 'react-bootstrap'
import Data from './components/data'

function App() {
  return (
    <>
    <div>
    <Container className=''>
    {/*   <nav className='nav navbar bg-primary p-4 Header navbar-expand-md fixed-top'>
        <ul className='navbar-links'>
        <li><a href='' className='text-white fs-4'>Image</a></li>
        <li><a href=''>Name</a></li>
        <li><a href=''>Age</a></li>
        <li className='text-white fs-4'>Total users is : <span className='bi bi-person'></span><span className='badge badge-sm bg-danger'>{Data.length}</span></li>
        </ul>
      </nav> */}

<nav class="navbar navbar-expand-sm bg-dark navbar-expand-md navbar-dark fixed-top Header">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav navbar-links">
        <li class="nav-item">
          <a class="nav-link" href="#">Image</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Name</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Age</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Address</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Phone</a>
        </li>
        <li className='text-white fs-4'>Total users is : <span className='bi bi-person'></span><span className='badge badge-sm bg-danger'>{Data.length}</span></li>    
      </ul>
    </div>
  </div>
</nav>


      <div className='w-75 mx-auto bg-secondary p-5 Index'>
       
        {Data && Data.map((row)=>{
          return(
            <>
          <Card className='bg-dark text-white mt-5'>
          <CardBody className='p-4 mt-3'>
            <div className='row'>
              
                {/* <td>{row.id}</td> */}
                <div className='col-md Fomak'><img src={row.photo} alt='img' className='img-fluid w-75 rounded-circle' /></div>
                <div className='col-md fs-4'>{row.name}</div>
                <div className='col-md fs-5'>{row.age}</div>
                <div className='col-md fs-5'>{row.address}</div>
                <div className='col-md fs-5'>{row.phone}</div>
              
            </div>
          </CardBody>
        </Card>
     
            </>
          )
        })}   
      
      
      </div>

    </Container>
      
    </div>
    </>
  )
}

export default App
