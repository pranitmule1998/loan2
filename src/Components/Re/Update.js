import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Update = () => {
    const { studentId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue } = useForm()

    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:8000/students/get/${studentId}`)
      result.data=result.data[0]
        setValue("name", result.data.name)
        setValue("lastname", result.data.lastname)
        setValue("date", result.data.date)
        setValue("email", result.data.email)
        setValue("phone", result.data.phone)
        setValue("pancard", result.data.pancard)
        setValue("adharcard", result.data.adharcard)
        setValue("cibil", result.data.cibil)
        setValue("gender", result.data.gender)

    }

    function savedata(data) {
        axios.put(` http://localhost:8000/students/update/${studentId}`, data);
        navigate("/show");

    }

    useEffect(() => {
        fetchdata()
    }, [])
    return (



        <form onSubmit={handleSubmit(savedata)} >
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <h3>Regional Executive</h3>
                        <NavLink to={"/add"}><button className="btn btn-primary col-5">Enquiry</button></NavLink>  <br /> <br />

                        <NavLink to={"/show"}><button className="btn btn-primary col-5">Show List</button></NavLink>  <br /> <br />


                        <NavLink to={"/login"}><button className="btn btn-primary col-5">Logout</button></NavLink>  <br />
                    </div>

                    <div className="col-8" >
                        <h3>Enquiry Form</h3>
                        <input type="text" placeholder="Name" id="name" style={{ width: 250 }} {...register("name")} /> &nbsp;&nbsp;
                        <input type="text" placeholder="Last Name" id="lastname" style={{ width: 250 }} {...register("lastname")} /> <br /><br />


                        <input type="date" id="date" style={{ width: 500 }} {...register("date")} /> <br /><br />

                        <input type="email" id="email" placeholder="Email" style={{ width: 250 }} {...register("email")} /> &nbsp;&nbsp;

                        <input type="number" id="phone" placeholder="Phone" style={{ width: 250 }} {...register("phone")} /> <br /><br />

                        <input type="number" id="pancard" placeholder="Pancard" style={{ width: 250 }} {...register("pancard")} /> &nbsp;&nbsp;

                        <input type="number" id="adharcard" placeholder="Adharcard" style={{ width: 250 }} {...register("adharcard")} /> <br /><br />

                        <input type="number" id="cibil" placeholder="CIBIL" style={{ width: 250 }} {...register("cibil")} /> <br /><br />

                        <label htmlFor="gender" ></label>
                        <label>Male</label>&nbsp;
                        <input type="radio" id="male" value="Male" name="gender" {...register("gender")} />
                        &nbsp;&nbsp;

                        <label>Female</label>&nbsp;
                        <input type="radio" id="female" value="Female" name="gender" {...register("gender")} />&nbsp;&nbsp;

                        <label>Other</label>&nbsp;
                        <input type="radio" id="other" value="Other" name="gender"  {...register("gender")} /> <br /><br />

                        <button type="submit" class="btn btn-secondary col-2 "  >Update</button>




                    </div>

                </div>



            </div>
        </form>
    )
}
export default Update;