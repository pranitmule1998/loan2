import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "./login.css";

const Login = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")

  const islogin = () => {
    if (name === "re" && pwd === "re") {

      alert("Login successful")
      navigate("/add")
    }      else if(name=== "oe" && pwd==="oe"){
      alert("Login Successful")
      navigate("/oprational")
    }
      else if(name=== "cm" && pwd==="cm"){
          alert("Login Successful")
          navigate("/cm")
          }
          else{
            alert('login Not Successfully');
         }
  }
  return (
    <>

      <form id="c" >

        <div className="row col-12  ">
          <div className="col-4" ></div>
          <div class="col-md-5  ">
            <label for="inputEmail4" class="form-label  "  >Name</label>
            <input type="email" class="form-control" id="nm" 
             value={name}  onChange={e => setName(e.target.value)}/>
          </div>

        </div>

        <div className="row mt-5 ">
          <div className="col-4" ></div>
          <div class="col-md-5">
            <label for="inputEmail4" class="form-label" >Password</label>
            <input type="passwors" class="form-control" id="pass"
              value={pwd}  onChange={e => setPwd(e.target.value)} />
          </div>

        </div>

        <div className="row col-12 mt-3 mb-3 ">


          {/* <NavLink to={"/enquiry"} > <button id="log" type="submit" onClick={islogin} className="btn btn-primary" style={{ marginLeft: 45 }} >Login</button> </NavLink> */}

          <input type='signup'  value='SIGNUP' onClick={islogin}  className='btn btn-primary col-3  'style={{ marginLeft: 220 }}/>
        </div>

      </form>



    </>
  )
}
export default Login