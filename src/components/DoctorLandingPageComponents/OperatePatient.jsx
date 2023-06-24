import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {
    patient_number: "",
      first_name: "",
      last_name:"",
      age: "",
      sex: "",
      address: "",
      city: "",
      phone_number: "",
      entry_date: "",
      doctor_number: "",
      diagnosis:"",
      department_code: "",
      advance_payment: "",
      mode_of_payment:"",
      room_number: "",
      date_of_admission: "",
      initial_condition: "",
      treatment: "",
      attendant_name: "",

      date_of_operation: "",
      doctor_number_conductedOperation: "",
      operationTheater_number: "",
      type_of_operation:"",
      patient_conditionBeforeOperation: "",
      patient_conditionAfterOperation: "",
      treatment_advice:"",
};


const OperatePatient = () => {

const [state, setState] = useState(initialState);

const {first_name, middleinitial,last_name, age, sex	, address, city	, 
    phone_number	, entry_date	, doctor_number	,doctor_name_referred_to, diagnosis	,department_name,
    advance_payment, mode_of_payment, room_number, date_of_admission, initial_condition, treatment, attendant_name,
    date_of_operation, doctor_number_conductedOperation, operationTheater_number, type_of_operation, patient_conditionBeforeOperation, patient_conditionAfterOperation, treatment_advice
} =  state;

const history = useNavigate();

const {patient_number} = useParams();

useEffect(() => {
    axios.get(`http://localhost:5002/api/get/viewoneaddmittedpatient/${patient_number}`).then((resp) => setState({...resp.data[0]}))
}, [patient_number])


const handleSubmit = (e) => {
    e.preventDefault();
    if(!date_of_operation || !doctor_number_conductedOperation || !operationTheater_number || !type_of_operation || !patient_conditionBeforeOperation || !patient_conditionAfterOperation	 || !treatment_advice){
    
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/insertoperatepatients", {


            patient_number, 
            date_of_admission, 
            date_of_operation, 
            doctor_number_conductedOperation,
            department_name,
            operationTheater_number, 
            type_of_operation, 
            patient_conditionBeforeOperation, 
            patient_conditionAfterOperation, 
            treatment_advice


        }).then(() => {
            setState({

                patient_number: "", 
                date_of_admission: "", 
                date_of_operation: "", 
                doctor_number_conductedOperation: "",
                department_name: "",
                operationTheater_number: "", 
                type_of_operation: "", 
                patient_conditionBeforeOperation: "", 
                patient_conditionAfterOperation: "", 
                treatment_advice: "" });

        }).catch((err) => toast.error(err.response.data));
        toast.success("Data Saved Successfully to the Operate Patient Table!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  


  return (
    <div className='mx-10 mt-2 border-[1px] border-greenColor p-7'>


        <div className=' mx-5'>
            <h1 className='font-bold text-blueColor text-[30px] text-center mb-5'>SCHEDUE AN OPERATION</h1>
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
                            <label htmlFor="first_name">Middle Initial</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='middle_initial' name="middle_initial" placeholder='Middle Initial' value={middleinitial || ""} onChange={handleInputChange}/>
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
                            <label htmlFor="department_code">Department Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='department_name' name="department_name" placeholder='Department Name' value={department_name || ""} onChange={handleInputChange}/>
                            </div>  


                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="advance_payment">Advance Payment</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="float" id='advance_payment' name="advance_payment" placeholder='Advance Payment...' value={advance_payment || ""} onChange={handleInputChange}/>
                            </div>
                            

                            


                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="mode_of_payment">Mode of Payment</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='mode_of_payment' name="mode_of_payment" placeholder='Mode of Payment...' value={mode_of_payment || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="room_number">Room Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='room_number' name="room_number" placeholder='Room Number...' value={room_number || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="department_name">Department Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='department_name' name="department_name" placeholder='Department Name...' value={department_name || ""} onChange={handleInputChange}/>
                            </div>
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="date_of_admission">Date of Addmission</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='date_of_admission' name="date_of_admission" placeholder='Date of Admission...' value={date_of_admission || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="initial_condition">Initial Condition</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='initial_condition' name="initial_condition" placeholder='Initial Condition...' value={initial_condition || ""} onChange={handleInputChange}/>
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
                            <label htmlFor="attendant_name">Attendant Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='attendant_name' name="attendant_name" placeholder='Attendant Name...' value={attendant_name || ""} onChange={handleInputChange}/>
                            </div>
                        </div>

                        <div className='shadow-lg'>

                        <h1 className='font-bold text-greenColor text-[16px] ms-5 mb-5 me-5 border-b-[2px]'>OPERATION DETAILS</h1>


                        <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="date_of_operation">Date of Operation</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[250px]' type="date" id='date_of_operation' name="date_of_operation" placeholder='Date of Operation...' value={date_of_operation || ""} onChange={handleInputChange}/>
                            </div>
      
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doctor_number_conductedOperation">Conducted by</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[250px]' type="text" id='doctor_number_conductedOperation' name="doctor_number_conductedOperation" placeholder='Conducted by...' value={doctor_number_conductedOperation || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="operationTheater_number">Operation Theater No.</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[250px]' type="text" id='operationTheater_number' name="operationTheater_number" placeholder='Operation Theater No....' value={operationTheater_number || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="type_of_operation">Type of Operation</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[250px]' type="text" id='type_of_operation' name="type_of_operation" placeholder='Type of Operation...' value={type_of_operation || ""} onChange={handleInputChange}/>
                            </div>
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="patient_conditionBeforeOperation">Patient Condition Before Surgery</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[250px]' type="text" id='patient_conditionBeforeOperation' name="patient_conditionBeforeOperation" placeholder='Patient Condition Before Surgery...' value={patient_conditionBeforeOperation || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                
                            
                            <label htmlFor="patient_conditionAfterOperation">Patient Condition After Surgery</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[250px]' type="text" id='patient_conditionAfterOperation' name="patient_conditionAfterOperation" placeholder='Patient Condition After Surgery...' value={patient_conditionAfterOperation || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="treatment_advice">Treatment Advice</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[250px]' type="text" id='treatment_advice' name="treatment_advice" placeholder='Treatment Advice...' value={treatment_advice || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-center mt-5 mb-5'>
                                <input className='mx-3 px-10 py-1 rounded-full bg-red-500 text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />
                    
                                <Link to={`/viewoneadmittedpatient/${patient_number}`}>
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

export default OperatePatient