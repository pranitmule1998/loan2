import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"

const Delete = () =>{
    const navigate =  useNavigate()
   const {studentId} = useParams()
    const [user,setuser] = useState({})
    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:8000/students/${studentId}`)
        setuser(result.data)
    }

    function deletedata (){
        axios.delete(`http://localhost:8000/students/${studentId}`)
        navigate("/show")
    }

    useEffect(()=>{
        fetchdata()
    },[])
    return(
        <>
       <form onSubmit={()=>deletedata()}>
        <h1>Are u want to delete data of {user.name}  </h1>

      <input className="btn btn-danger" type="submit" value="yes" />

       <NavLink to={"/show"}><button className="btn btn-warning">No</button></NavLink>

       </form>
        </>
    )
}
export default Delete;