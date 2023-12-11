

import { useForm } from "react-hook-form";
import axios from "axios";

const Cibilform = () =>{
    

    const { register, handleSubmit } = useForm()

    function savedata(data) {
        axios.post("http://localhost:8000/oprational",data);
        alert("data goes to cm")
    }


    return(
        <form onSubmit={handleSubmit(savedata)} >
         
         <input type="text" placeholder="Name" id="namee" style={{ width: 250 }} {...register("namee")}/> &nbsp;&nbsp;

         <button type="submit" class="btn btn-secondary col-2 "  >Submit</button>
    
        </form>
    )
}
export default Cibilform;