import { NavLink } from "react-router-dom";

import one from "../Assets/one.mp4";
const Home = ()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Home LOAN</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" to="/about">  </button>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/oprational">O.E</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/login"} > <button type="submit" class="btn btn-primary"  >LOG-IN</button> </NavLink>
        </li>
 
       <li>
          <NavLink to={"/enquirylist"} ><video muted autoPlay loop src={one} width={80} /></NavLink> 
       </li>

      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Home;