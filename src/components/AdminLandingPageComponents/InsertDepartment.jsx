import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {

    department_name: "",
    department_location:"",
    facilities_available: ""
};


const InsertDepartment = () => {

const [state, setState] = useState(initialState);

const {department_name, department_location, facilities_available} =  state;

const history = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();
    if( !department_name || !department_location || !facilities_available){
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/insertdepartment", {

                department_name, 
                department_location, 
                facilities_available

        }).then(() => {
            setState({

                department_name: "",
                department_location:"",
                facilities: ""  });
        }).catch((err) => toast.error(err.response.data));
        toast.success("Successfully inserted the data to the Department Table!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  


  return (
        <>
            <div className='flex justify-center'>

                <div className='m-10 justify-center border-[1px] border-greenColor w-[40%]'>

                    <div className='flex justify-center mx-5 my-2 '>
                        <h1 className='font-bold text-blueColor text-[30px]'>DEPARTMENT ENTRY RECORD</h1>
                    </div>

                    <div className='flex justify-center text-[12px]'>
                        <form  onSubmit={handleSubmit}>


                       

                  

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="department_name">Department Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='department_name' name="department_name" placeholder='Department Name...' value={department_name || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="department_location">Department Location</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='department_location' name="department_location" placeholder='Department Location...' value={department_location || ""} onChange={handleInputChange}/>

                            </div>




                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="facilities_available">facilities_available</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='facilities_available' name="facilities_available" placeholder='Facilities...' value={facilities_available || ""} onChange={handleInputChange}/>
                            </div>
                            

                            <div className='mt-5 mb-5 flex justify-center'>

                                <input className='mx-3 px-10 py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />
                                

                                <Link to="/departments">
                                    <input className='mx-3 px-10 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400' type="button" value="Go Back" />
                                
                                </Link>
                            </div>
                            
                        </form>
                    </div>
                </div>


            </div>
        </>
  )
}

// addEdit

export default InsertDepartment