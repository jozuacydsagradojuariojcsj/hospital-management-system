import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {
    patient_number: "",
      first_name: "",
      middleinitial:"",
      last_name:"",
      age: "",
      sex: "",
      address: "",
      city: "",
      phone_number: "",
      entry_date: "",
      doctor_number: "",
      doctor_name_referred_to:"",
      diagnosis:"",
      treatment: "",
      department_name: "",
      date_of_visit: "",
      medicine_recommended: "",
      status_of_treatment: ""
};


const RegularPatient = () => {

const [state, setState] = useState(initialState);

const {first_name, middleinitial,last_name, age, sex	, address, city	, 
    phone_number	, entry_date	, doctor_number	, doctor_name_referred_to, diagnosis	,department_name,
    date_of_visit, treatment, medicine_recommended, status_of_treatment
} =  state;

const history = useNavigate();

const {patient_number} = useParams();

useEffect(() => {
    axios.get(`http://localhost:5002/api/get/${patient_number}`).then((resp) => setState({...resp.data[0]}))
}, [patient_number])


const handleSubmit = (e) => {
    e.preventDefault();
    if(!patient_number || !first_name|| !middleinitial || !last_name || !age || !sex	 || !address	 || !city	 || !phone_number	 || !entry_date	 || !doctor_number	|| !doctor_name_referred_to || !diagnosis	 || !department_name ||
            !date_of_visit ||    !treatment   || !medicine_recommended || !status_of_treatment ){
    
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/regularcheckup", {
            patient_number, 
            date_of_visit,
            diagnosis,
            treatment,
            medicine_recommended,
            status_of_treatment

        }).then(() => {
            setState({

                patient_number: "", 
                date_of_visit: ""	, 
                diagnosis: "",
                treatment: "",
                medicine_recommended: "",
                status_of_treatment: ""
                
            });

        }).catch((err) => toast.error(err.response.data));
        toast.success("Data Saved Successfully to the Regular Patient Table!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  


  return (
    <div className='mx-10 mt-3 border-[1px] border-greenColor p-7'>

        <Link to={`/viewpatient/${patient_number}`}>
            <input className='mx-3 px-10 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400' type="button" value="Go Back" />                   
        </Link>

        <div className=' mx-5'>
            
            <h1 className='font-bold text-blueColor text-[30px] text-center mb-5'>CHECKUP PATIENT DATA RECORD</h1>
        </div>

        <div className=' ms-10 text-[12px]'>
            <form  onSubmit={handleSubmit}>

                <div className=''>
                    <div className='grid grid-cols-2 gap-2'>

                        <div className='shadow-lg w-[400px]'>
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="patient_number">Patient Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='patient_number' name="patient_number" placeholder='Patient Number...' value={patient_number || ""} onChange={handleInputChange}/>
                            </div>   

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="first_name">First Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='first_name' name="first_name" placeholder='First Name...' value={first_name || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="patient_number">Middle Initial</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='middleinitial' name="middleinitial" placeholder='Middle Initial' value={middleinitial || ""} onChange={handleInputChange}/>
                            </div>  

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="last_name">Last Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='last_name' name="last_name" placeholder='Last Name...' value={last_name || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="age">Age</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='age' name="age" placeholder='Age...' value={age || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="sex">Sex</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='sex' name="sex" placeholder='Sex...' value={sex || ""} onChange={handleInputChange}/>
                            </div>
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="address">Address</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='address' name="address" placeholder='Address...' value={address || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="city">City</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='city' name="city" placeholder='City...' value={city || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="phone_number">Phone Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='phone_number' name="phone_number" placeholder='Phone Number...' value={phone_number || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            

                            <label htmlFor="entry_date">Entry Date</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='entry_date' name="entry_date" placeholder='Entry Date...' value={entry_date || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doctor_number">Doctor Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doctor_number' name="doctor_number" placeholder='Doctor Number...' value={doctor_number || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doctor_name_referred_to">Referred Doctor</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doctor_name_referred_to' name="doctor_name_referred_to" placeholder='Doctor' value={doctor_name_referred_to || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '> 
                            <label htmlFor="diagnosis">Diagnosis</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='diagnosis' name="diagnosis" placeholder='Diagnosis...' value={diagnosis} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="department_code">Department Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='department_name' name="department_name" placeholder='Department Name' value={department_name} onChange={handleInputChange}/>
                            </div>  
                        </div>

                        <div className='shadow-lg'>

                            <div>
                                
                                <h1 className='font-bold text-greenColor text-[16px] ms-5 mb-5 me-5 border-b-[2px]'>REGULAR PATIENT DATA RECORD</h1>

                                <div className='flex justify-between mx-5 my-2 '>
                                    <label htmlFor="date_of_visit">Date of Visit</label>
                                    <input className='ms-10 text-center border-[1px] border-greenColor w-[155px]' type="date" id='date_of_visit' name="date_of_visit" placeholder='Date of Visit...' value={date_of_visit || ""} onChange={handleInputChange}/>
                                </div>

                                <div className='flex justify-between mx-5 my-2 '>
                                    <label htmlFor="diagnosis">Diagnosis</label>
                                    <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='diagnosis' name="diagnosis" placeholder='Diagnosis...' value={diagnosis || ""} onChange={handleInputChange}/>
                                </div>   

                                <div className='flex justify-between mx-5 my-2 '>
                                    <label htmlFor="treatment">Treatment</label>
                                    <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='treatment' name="treatment" placeholder='Treatment Needed...' value={treatment || ""} onChange={handleInputChange}/>
                                </div>

                                <div className='flex justify-between mx-5 my-2 '>
                                    <label htmlFor="medicine_recommended">Medicine</label>
                                    <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='medicine_recommended' name="medicine_recommended" placeholder='Medicine Recommended...' value={medicine_recommended || ""} onChange={handleInputChange}/>
                                </div>

                                <div className='flex justify-between mx-5 my-2 '>
                                    <label htmlFor="status_of_treatment">Status of Treatment</label>
                                    <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='status_of_treatment' name="status_of_treatment" placeholder='Status of Treatment...' value={status_of_treatment || ""} onChange={handleInputChange}/>
                                </div>

                                <div className='flex justify-end mt-3 mb-5 me-2'>
                                    <input className='mx-3 px-[47px] py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />
                                </div>
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

export default RegularPatient