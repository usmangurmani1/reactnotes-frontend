import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav className="navbar">
          <h2 className="primary-color">Doctor Request App</h2>
          <div>
           <Link to="/">Home</Link>
           <Link to="#" className="ml-3">New Request</Link>
          </div>
        </nav>
     );
}
 
export default Navbar;
