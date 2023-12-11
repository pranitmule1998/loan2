import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Show = () => {

    const [user, setuser] = useState([])
    async function fetchdata() {
        const result = await
            axios.get("http://localhost:8000/students")
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
                    <th>Surname</th>
                    <th>Date</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Pancard</th>
                    <th>Adharcard</th>
                    <th>cibil</th>
                    <th>Gender</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {
                    user.map(obj => {
                        return (
                            <tr>
                                <td>{obj.name}</td>
                                <td>{obj.lastname}</td>
                                <td>{obj.date}</td>
                                <td>{obj.email}</td>
                                <td>{obj.phone}</td>
                                <td>{obj.pancard}</td>
                                <td>{obj.adharcard}</td>
                                <td>{obj.cibil}</td>
                                <td>{obj.gender}</td>
                                <td><NavLink to={`/update/${obj.id}`} ><button className="btn btn-secondary" >Update</button></NavLink></td>
                                <td><NavLink to={`/delete/${obj.id}`} ><button className="btn btn-warning" >Delete</button></NavLink></td>
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
export default Show;