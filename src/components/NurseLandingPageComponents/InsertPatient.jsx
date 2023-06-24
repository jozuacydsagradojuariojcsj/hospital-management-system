import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {
      patient_number: "",
      first_name: "",
      middleinitial: "",
      last_name:"",
      age: "",
      sex: "",
      address: "",
      city: "",
      phone_number: "",
      entry_date: "",
      prefix: "",
      doctor_number: "",
      doctor_name_referred_to: "",
      diagnosis:"",
      department_name: ""
};


const InsertPatient = () => {

const [state, setState] = useState(initialState);

const {patient_number, first_name, middleinitial, last_name, age, sex	, address, city	, phone_number	, entry_date, prefix, doctor_number, doctor_name_referred_to	, diagnosis	,department_name} =  state;

const history = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();
    if(!patient_number || !first_name || !middleinitial || !last_name || !age || !sex	 || !address	 || !city	 || !phone_number	 || !entry_date	 || !prefix || !doctor_number || !doctor_name_referred_to	 || !diagnosis	 || !department_name){
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/patentry", {
            patient_number, 
            first_name, 
            middleinitial,
            last_name, 
            age, 
            sex	, 
            address	, 
            city	, 
            phone_number	, 
            entry_date	, 
            prefix,
            doctor_number	, 
            doctor_name_referred_to,
            diagnosis	,
            department_name

        }).then(() => {
            setState({

                patient_number: "",
                first_name: "",
                middleinitial: "",
                last_name:"",
                age: "",
                sex: "",
                address: "",
                city: "",
                phone_number: "",
                entry_date: "",
                prefix: "",
                doctor_number: "",
                doctor_name_referred_to: "",
                diagnosis:"",
                department_name: "" });
        }).catch((err) => toast.error(err.response.data));
        toast.success("Successfully inserted the data to the Entry Table!");
        
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
                        <h1 className='font-bold text-blueColor text-[30px]'>ENTRY PATIENT DATA RECORD</h1>
                    </div>

                    <div className='flex justify-center text-[12px]'>
                        <form  onSubmit={handleSubmit}>


                            <div className='flex justify-between items-center mx-5  my-2 '>
                                <label htmlFor="patient_number">Patient Number</label>
                                <div className='justify-end items-center ms-[100px]'>
                                    <label htmlFor="patient_number">PT - </label>
                                    <input className='text-center border-[1px] border-greenColor w-[200px]' type="number" id='patient_number' name="patient_number" placeholder='Patient Number...' value={patient_number || ""} onChange={handleInputChange}/>
                                </div>   
                            
                            </div>   

                  

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="first_name">First Name</label>
                            <input className='ms-[100px] text-center border-[1px] border-greenColor w-[200px]' type="text" id='first_name' name="first_name" placeholder='First Name...' value={first_name || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="middleinitial">Middle Initial</label>
                            <input className='ms-[100px] text-center border-[1px] border-greenColor w-[200px]' type="text" id='middleinitial' name="middleinitial" placeholder='Middle Initial...' value={middleinitial || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="last_name">Last Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='last_name' name="last_name" placeholder='Last Name...' value={last_name || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="age">Age</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="number" id='age' name="age" placeholder='Age...' value={age || ""} onChange={handleInputChange}/>

                            </div>


                            <div className='flex justify-between mx-5 my-2 '>
                                <label htmlFor="sex">Sex</label>
                                <select className='ms-10 text-center border-[1px] border-greenColor w-[200px] px-5' name='sex' value={sex || ""} onChange={handleInputChange}>
                                    <option value={""}>Select here...</option>
                                    <option value={"M"}>Male</option>
                                    <option value={"F"}>Female</option>
                                </select>
                            </div>



                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="address">Address</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='address' name="address" placeholder='Address...' value={address || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                <label htmlFor="city">City</label>
                                <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='city' name="city" placeholder='City...' value={city || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="phone_number">Phone Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='phone_number' name="phone_number" placeholder='Phone Number...' value={phone_number || ""} onChange={handleInputChange}/>
                            </div>

                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="entry_date">Entry Date</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="date" id='entry_date' name="entry_date" placeholder='Entry Date...' value={entry_date || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                                <label htmlFor="doctor_number">Doctor Number</label>

                                <div className='flex justify-end items-center ms-5'>

                                    <select className='ms-10 text-center border-[1px] border-red-500' name='prefix' value={prefix || ""} onChange={handleInputChange}>
                                        <option value={"DR"}>DR - </option>
                                        <option value={"DC"}>DC - </option>
                                    </select>
                                    <input className='ms-1 text-center border-[1px] border-greenColor w-[150px]' type="number" id='doctor_number' name="doctor_number" placeholder='Doctor Number...' value={doctor_number || ""} onChange={handleInputChange}/>
                                </div>  
                            </div> 


                            <div className='flex justify-between mx-5 my-2 '> 
                            <label htmlFor="doctor_name_referred_to">Referred Doctor</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='doctor_name_referred_to' name="doctor_name_referred_to" placeholder='Doctor Name...' value={doctor_name_referred_to} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '> 
                            <label htmlFor="diagnosis">Diagnosis</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="text" id='diagnosis' name="diagnosis" placeholder='Diagnosis...' value={diagnosis} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                                <label htmlFor="department_name">Department</label>
                                <select className='ms-10 text-center border-[1px] border-greenColor w-[200px]' name="department_name" id="department_name" value={department_name || ""} onChange={handleInputChange}>
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

                            <div className='mt-5 mb-5 flex justify-center'>

                                <input className='mx-3 px-10 py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />
                                

                                <Link to="/homenurse">
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

export default InsertPatient