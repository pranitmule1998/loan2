

import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Cibilform = () =>{
    

    const { register, handleSubmit } = useForm()

    function savedata(data) {
        axios.post("http://localhost:8000/oprational",data);
        alert("data goes to cm")
    }


    return(
        <form onSubmit={handleSubmit(savedata)} >
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <h3>Regional Executive</h3>
                        <NavLink to={"/cibillist"}><button className="btn btn-primary col-5">Enquiry List </button></NavLink>  <br /> <br />

                       


                        <NavLink to={"/login"}><button className="btn btn-primary col-5">Logout</button></NavLink>  <br />
                    </div>

                    <div className="col-8" >
                        <h3>Enquiry Form</h3>
                        <input type="text" placeholder="Enquiry ID" id="enquiryid" style={{ width: 250 }} {...register("enquiryid")} /> &nbsp;&nbsp;

                        <input type="text" placeholder="Cibilscore" id="cibilscore" style={{ width: 250 }} {...register("cibilscore")} /> <br /><br />


                        <div >
                            <label  id="status"></label>
                            <select {...register("status")} >
                                <option value={"aprove"} >Aprove</option>
                                <option value={"noaprove"} >Not Aprove</option>
                               
                            </select>
                        </div> <br/>

                        <div >
                            <label  id="remark" ></label>
                            <select {...register("remark")} >
                                <option value={"Good"} >Good</option>
                                <option value={"Better"} >Better</option>
                               
                            </select>
                        </div>

                       

                       

                        

                        <button type="submit" class="btn btn-secondary col-2 "  >Submit</button>




                    </div>

                </div>



            </div>
        </form>
    )
}
export default Cibilform;