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

               
           

           

            
            <table>
                <tr>
                    <th>Enquiry Id</th>
                    <th>Cibilscore</th>
                    <th>Status</th>
                    <th>Remark</th>
                 
                </tr>
                {
                    user.map(obj => {
                        return (
                            <tr>
                                <td>{obj.enquiryid}</td>
                                <td>{obj.cibilscore}</td>
                                <td>{obj.status}</td>
                                <td>{obj.remark}</td>
                                <td><NavLink to={"/cmform"} > <button className="btn btn-outline-primary" >Kyc Form</button></NavLink></td>
                                <td>
                                    <NavLink to={`/cmlistdelete/${obj.id}`} ><button>Delete</button></NavLink>
                                </td>
                            
                            </tr>
                        )
                    })
                }
            </table>
            </div>
            </div>
          
        </>
    )
}
export default Cmlist;