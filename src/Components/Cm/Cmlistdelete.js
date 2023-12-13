import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"

const Cmlistdelete = () =>{
    const navigate =  useNavigate()
   const {cmId} = useParams()
    const [user,setuser] = useState({})
    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:8000/oprational/get/${cmId}`)
        setuser(result.data[0])
    }

    function deletedata (){
        axios.delete(`http://localhost:8000/oprational/cmlistdelete/${cmId}`)
        navigate("/cmlist")
    }

    useEffect(()=>{
        fetchdata()
    },[])
    return(
        <>
       <form onSubmit={()=>deletedata()}>
        <h1>Are u want to delete data of {user.enquiryid}  </h1>

      <input className="btn btn-danger" type="submit" value="yes" />

       <NavLink to={"/cmlist"}><button className="btn btn-warning">No</button></NavLink>

       </form>
        </>
    )
}
export default Cmlistdelete;