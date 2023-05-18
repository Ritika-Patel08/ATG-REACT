import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (<>
  <Navbar bg="light" expand="lg" className='ml-40 mr-40 mt-24 nav2'>
      <Container fluid className=''>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">All posts()</Nav.Link>
            <Nav.Link href="#action2">Article</Nav.Link>
            <Nav.Link href="#action2">Education</Nav.Link>
            <Nav.Link href="#action2">Job</Nav.Link>
            <NavDropdown title="Write a post" id="navbarScrollingDropdown" className='ml-96'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Button className='h-9' variant="primary">Join Group</Button>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='spost flex'>
        <p> <b>All posts()</b></p>
        <button className='mt-0 ml-40' style={{backgroundColor:"lightgray", borderRadius:"5%" ,height:"30px" ,width:"100px"}}><b>Filter:All🔽</b></button>
  
    </div>
  </>
    
  );
}

export default NavScrollExample;