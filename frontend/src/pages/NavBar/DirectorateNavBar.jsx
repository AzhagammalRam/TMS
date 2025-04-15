import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../../assets/images';
import { Avatar } from '@mui/material';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} className="img-fluid" style={{width:'80px'}}   alt="Sample image" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/TrainingDirectorate">Home</Nav.Link>
            <Nav.Link href="#action2">Data Bank</Nav.Link>
            <Nav.Link href="/CreateCourse">Create & Publish Course</Nav.Link>
            <NavDropdown title="Masters" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/MTrainingCenter">Training Center</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/HopfLetterOutside">HoPF</Nav.Link>
            <Nav.Link href="/CollateandSent">Collate</Nav.Link>
            <Nav.Link href="/ApprovedListInternalCommunication">Internal Communication</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex me-2 title-clr"><Avatar style={{background:'#232771'}}/><h6 className='title-clr mt-2'>&nbsp;&nbsp;Training Directorate</h6></div>
      </Container>
    </Navbar>
  );
}

export default NavBar;