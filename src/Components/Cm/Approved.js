import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Approved = () => {

    const [user, setuser] = useState([])
    async function fetchdata() {
        const result = await
            axios.get("http://localhost:8000/cm")
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
                    <h3>Loan Approved list</h3>
                    <NavLink to={"/cmlist"}><button className="btn btn-primary col-5">CM List</button></NavLink>  <br /> <br />

                    <NavLink to={"/cmform"}><button className="btn btn-primary col-5">CM Form</button></NavLink>  <br /> <br/>


                    <NavLink to={"/login"}><button className="btn btn-primary col-5">Logout</button></NavLink>  <br />
                </div>
           

             <div className="col-8" >

            
            <table>
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>City</th>
                    <th>Cast</th>
                    <th>SSC</th>
                    <th>HSC</th>
                    <th>Graduation</th>
                    <th>CGPA</th>
                    <th>Address</th>
                    <th>Loanpurpose</th>
                    <th>Nominee No. </th>
                    <th>Loan Date</th>
                </tr>
                {
                    user.map(obj => {
                        return (
                            <tr>
                                <td>{obj.id}</td>
                                <td>{obj.firstname}</td>
                                <td>{obj.city}</td>
                                <td>{obj.cast}</td>
                                <td>{obj.ssc}</td>
                                <td>{obj.hsc}</td>
                                <td>{obj.graduation}</td>
                                <td>{obj.cgpa}</td>
                                <td>{obj.address}</td>
                                <td>{obj.loanpurpose}</td>
                                <td>{obj.nominee}</td>
                                <td>{obj.loandate}</td>
                               
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
export default Approved;