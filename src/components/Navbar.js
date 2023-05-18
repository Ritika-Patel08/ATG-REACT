import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoMain from '../images/logo.png';
import '../../src/App.css';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className='nav1'>
      <Container>
        <Navbar.Brand href="#home"><img src={LogoMain} alt="Not found" width={150} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-64">
            <div class="row">
              <div class="input-group">
                <input class="form-control inputSearch" type="search" value="search" id="example-search-input" />

              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <script src="https://kit.fontawesome.com/7222c65f87.js" crossorigin="anonymous"></script>
    </Navbar>
    
  );
}

export default BasicExample;


