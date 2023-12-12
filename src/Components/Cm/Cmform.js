

import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Cmform = () =>{
     const navigate = useNavigate()
    

    const { register, handleSubmit } = useForm()

    function savedata(data) {
        axios.post("http://localhost:8000/cm",data);
        alert("Loan Approved Succesfully")
        navigate("/approved");

    }


    return(
        <form onSubmit={handleSubmit(savedata)} >
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <h3>Chif Manager</h3>
                        <NavLink to={"/cmlist"}><button className="btn btn-primary col-5">CM List </button></NavLink>  <br /> <br />

                       


                        <NavLink to={"/login"}><button className="btn btn-primary col-5">Logout</button></NavLink>  <br />
                    </div>

                    <div className="col-8" >
                        <h3>KYC Form</h3> <br/>
                        <h5>Personal Details</h5>
                        <input type="text" placeholder="ID" id="id" style={{ width: 250 }} {...register("id")} /> &nbsp;&nbsp;

                        <input type="text" placeholder="Name" id="firstname" style={{ width: 250 }} {...register("firstname")} /> <br /><br />


                      
                            <label  id="city"></label> 
                            <select {...register("city")} style={{ width: 250 }}>
                                <option value={"Pune"} >Pune</option>
                                <option value={"Mumbai"} >Mumbai</option>
                                <option value={"Akola"} >Akola</option>
                                <option value={"Amravati"} >Amravati</option>
                                <option value={"Satara"} >Satara</option>
                                
                            </select>  &nbsp;
                         

                        
                            <label  id="cast" ></label>
                            <select {...register("cast")}style={{ width: 250 }} >
                                <option value={"OBC"} >OBC</option>
                                <option value={"SC"} >SC</option>
                                <option value={"NT"} >NT</option>
                                <option value={"OPEN"} >OPEN</option>
                                <option value={"ST"} >ST</option>
                            </select>
                             <br/>  <br/>

                            <h5>Education Details</h5>
                            <input type="number" placeholder="SSC Score" id="ssc" style={{ width: 250 }} {...register("ssc")} />  &nbsp;

                            <input type="number" placeholder="HSC Score" id="hsc" style={{ width: 250 }} {...register("hsc")} /> <br/><br/>


                            <label  id="graduation" ></label>
                            <select {...register("graduation")}style={{ width: 250 }} >
                                <option value={"BSC"} >BSC</option>
                                <option value={"BA"} >BA</option>
                                <option value={"B.COM"} >B.COM</option>
                                <option value={"BA"} >BA</option>
                                <option value={"BSC"} >BCA</option>
                            </select>  &nbsp;

                            <input type="number" placeholder="CGPA" id="cgpa" style={{ width: 250 }} {...register("cgpa")} /> <br/><br/>

                            <input type="text" placeholder="Address" id="address" style={{ width: 500 }} {...register("address")} /> <br/><br/>

                            <h5>LOAN Details</h5>
                            <input type="text" placeholder="Loan Purpose" id="loanpurpose" style={{ width: 500 }} {...register("loanpurpose")} /> <br/><br/>

                            <input type="number" placeholder="Loan Amount" id="loanamount" style={{ width: 250 }} {...register("loanamount")} />  &nbsp;
                            <input type="number" placeholder="Nominee Contact NO. " id="nominee" style={{ width: 250 }} {...register("nominee")} /> <br/><br/>

                            <input type="date" placeholder="loan" id="loandate" style={{ width: 500 }} {...register("loandate")} /> <br/><br/>


                        <button type="submit" class="btn btn-outline-info col-4 "  >Approved</button>




                    </div>

                </div>



            </div>
        </form>
    )
}
export default Cmform;