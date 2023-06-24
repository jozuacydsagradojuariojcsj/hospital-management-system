import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {
    doctor_number: "",
    doc_first_name: "",
    doc_middle_initial: "",
    doc_last_name:"",
    qualification: "",
    address: "",
    phone_number: "",
    salary: "",
    date_of_joining: "",
    department_assigned: ""
};


const RegularDoctor = () => {

const [state, setState] = useState(initialState);

const {    doctor_number, doc_first_name, doc_middle_initial, doc_last_name, qualification, address, phone_number, salary, date_of_joining, department_assigned} =  state;

const history = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();
    if(!doctor_number || !doc_first_name || !doc_middle_initial || !doc_last_name || !qualification	 || !address	 || !phone_number	 || !salary	 || !date_of_joining || !department_assigned){
    
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/dradddata", {
                doctor_number, 
                doc_first_name, 
                doc_middle_initial, 
                doc_last_name, 
                qualification, 
                address, 
                phone_number, 
                salary, 
                date_of_joining,
                department_assigned

        }).then(() => {
            setState({

                doctor_number: "",
                doc_first_name: "",
                doc_middle_initial: "",
                doc_last_name:"",
                qualification: "",
                address: "",
                phone_number: "",
                salary: "",
                date_of_joining: "",
                department_assigned: ""  });

        }).catch((err) => toast.error(err.response.data));
        toast.success("Data Saved Successfully to Regular Doctor's Table!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  


  return (
    <div className='justify-center  p-7'>

        <div className=' mx-5 my-2 '>
            <h1 className='font-bold text-blueColor text-[30px] text-center mb-5'>CREATE NEWLY HIRED REGULAR DOCTOR'S ACCOUNT</h1>
        </div>

        <div className='flex justify-center text-[14px] '>
            <form  onSubmit={handleSubmit}>

                <div className=' flex justify-center '>
                    <div className='container justify-between'>


                        <div className='shadow-2xl p-5'>

                            <div className='flex justify-between items-center  my-2 '>
                                <label htmlFor="doctor_number">Doctor Number</label>
                                <div className='justify-end items-center mx-5 '>
                                    <label htmlFor="doctor_number">DR - </label>
                                    <input className='text-center border-[1px] border-greenColor' type="number" id='doctor_number' name="doctor_number" placeholder='Doctor Number...' value={doctor_number || ""} onChange={handleInputChange}/>
                                </div>   
                            
                            </div>   

                            

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doc_first_name">First Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doc_first_name' name="doc_first_name" placeholder='First Name...' value={doc_first_name || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doc_middle_initial">Middle Initial</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doc_middle_initial' name="doc_middle_initial" placeholder='Middle Initial...' value={doc_middle_initial || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doc_last_name">Last Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doc_last_name' name="doc_last_name" placeholder='Last Name...' value={doc_last_name || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="qualification">Qualification</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='qualification' name="qualification" placeholder='Qualification...' value={qualification || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="address">Address</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='address' name="address" placeholder='Address...' value={address || ""} onChange={handleInputChange}/>
                            </div>
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="phone_number">Phone Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='phone_number' name="phone_number" placeholder='Phone Number...' value={phone_number || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="salary">Salary</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='salary' name="salary" placeholder='Salary...' value={salary || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="date_of_joining">Date Hired</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[180px]' type="date" id='date_of_joining' name="date_of_joining" placeholder='Date Hired...' value={date_of_joining || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                                <label htmlFor="department_assigned">Department</label>
                                <select className='ms-10 text-center border-[1px] border-greenColor w-[180px]' name="department_assigned" id="department_assigned" value={department_assigned || ""} onChange={handleInputChange}>
                                    <option value="Placeholder"> Select Department</option>
                                    <option value="Anaesthetics">Anaesthetics</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Dermatology"> Dermatology</option>
                                    <option value="General Surgery">General Surgery</option>
                                    <option value="Intensive Care Medicine">Intensive Care Medicine</option>
                                    <option value="Internal Medicine">Internal Medicine</option>
                                    <option value="Medicine"> Medicine</option>
                                    <option value="Nephrology">Nephrology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Obstetrics and Gynaecology">Obstetrics and Gynaecology</option>
                                    <option value="Ophtamology">Ophtamology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Otorhinolaryngology">Otorhinolaryngology</option>
                                    <option value="Outpatient Department">Outpatient Department</option>
                                    <option value="Pathology">Pathology</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                    <option value="Pharmacy">Pharmacy</option>
                                    <option value="Physiotherapy">Physiotherapy</option>
                                    <option value="Radiology">Radiology</option>
                                    <option value="Surgery">Surgery</option>
                                    <option value="Urology">Urology</option>
                                </select>
                            </div>
                            
                           
                            <div className='flex justify-center mt-7 mb-5'>
                                <input className='mx-3 px-10 py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />
                    
                                <Link to="/homeadmin">
                                    <input className='mx-3 px-10 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400' type="button" value="Go Back" />
                                
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
        

                
            </form>
        </div>
        
    </div>
  )
}

// addEdit

export default RegularDoctor