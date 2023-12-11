import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cmlist = () => {

    const [user, setuser] = useState([])
    async function fetchdata() {
        const result = await
            axios.get("http://localhost:8000/oprational")
        setuser(result.data)

    }

    useEffect(() => {
        fetchdata()
    }, [])



    return (



        <>
          <div className="container" >
            <div className="row">

                <div className="col-4" >
                    <h3>Regional Executive</h3>
                    <NavLink to={"/add"}><button className="btn btn-primary col-5">Enquiry</button></NavLink>  <br /> <br />

                    <NavLink to={"/show"}><button className="btn btn-primary col-5">Show List</button></NavLink>  <br /> <br />


                    <NavLink to={"/login"}><button className="btn btn-primary col-5">Logout</button></NavLink>  <br />
                </div>
           

             <div className="col-8" >

            
            <table>
                <tr>
                    <th>Name</th>
                 
                </tr>
                {
                    user.map(obj => {
                        return (
                            <tr>
                                <td>{obj.namee}</td>
                             
                            
                            </tr>
                        )
                    })
                }
            </table>
            </div>
            </div>
            </div>
        </>
    )
}
export default Cmlist;