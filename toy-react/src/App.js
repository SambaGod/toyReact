import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color= "primary">
        <div className="container">
          <NavbarBrand>
            This is my React Toy Project
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
