import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
<Navbar expand="lg" className="dark-bg bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">YummyTaste</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor: '#fff'}} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px'}}
            navbarScroll
          >
            <Nav.Link href="/" style={{color: '#000'}}>Home</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown title="Blog" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Blog" style={{color: '#000'}}>Blog</NavDropdown.Item>
              <NavDropdown.Item href="#Blog-Details" style={{color: '#000'}}>
                Blog Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{color: '#000'}}>
                Element
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/Contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{backgroundColor: '#fff'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

// import { NavLink } from "react-router-dom";

// const NavBar = () => {
//     return ( 
//         <div className="navHeader">
//             <div className="logo">
//                 YummyTaste2
//             </div>
//             <div className="navLinks">
//                 <div className="showContentOnSmallerSreen">
//                     <button className="menuBtn">MENU</button>
//                 </div>
//                 <div className="options">
//                     <ul>
//                         <li>
//                             <NavLink to="/">Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/Menu">Menu</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/About">About</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/Blog">Blog</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/Contact">Contact</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }
 
// export default NavBar;