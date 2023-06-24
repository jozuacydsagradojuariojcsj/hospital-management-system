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
      doctor_name_referred_to: "" ,
      diagnosis:"",
      department_name: "",
      treatment_given: "",
      treatment_advice:"",
      payment_made: "",
      mode_of_payment: "",
      date_of_admission: "",
      date_of_discharge: "",

      room_and_board: "",
      central_supplies: "",
      emergency_room: "",
      medicine: "",
      laboratory: "",
      radiology: "",
      station_charges: "",
      doctor_fee:"",
      medicare: "",
      company: "",
      insurance: ""
};


const DisplayOnePatientToDischarge = () => {

const [state, setState] = useState(initialState);

const {first_name, middleinitial,last_name, age, sex	, address, city	, 
    phone_number	, entry_date	, doctor_number	, doctor_name_referred_to,  diagnosis	,department_name,
    treatment_given, treatment_advice, date_of_admission, date_of_discharge
    , room_and_board, central_supplies, emergency_room, medicine, laboratory, radiology,
    station_charges, doctor_fee, medicare, company, insurance
} =  state;

const history = useNavigate();

const {patient_number} = useParams();

useEffect(() => {
    axios.get(`http://localhost:5002/api/get/billerviewonedischargedpatient/${patient_number}`).then((resp) => setState({...resp.data[0][0]}))
}, [patient_number])


const handleSubmit = (e) => {
    e.preventDefault();
    if(!patient_number || !room_and_board || !central_supplies || !emergency_room || !medicine || !laboratory	 || !radiology ||
                    !station_charges || !doctor_fee || !medicare || !company || !insurance
                    ){
    
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/billingrecords", {
            patient_number, 
  
            room_and_board, central_supplies, emergency_room, medicine, laboratory, radiology,
            station_charges, doctor_fee, medicare, company, insurance

        }).then(() => {
            setState({

                patient_number: "", 

                room_and_board: "",
                central_supplies: "",
                emergency_room: "",
                medicine: "",
                laboratory: "",
                radiology: "",
                station_charges: "",
                doctor_fee:"",
                medicare: "",
                company: "",
                insurance: ""     
               });

        }).catch((err) => toast.error(err.response.data));
        toast.success("Data Saved Successfully to the Billing Patient Table!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  


  return (
    <div className=' border-[1px] border-greenColor p-7'>
        
        <div className=''>
            <Link to="/displaydischargepatients">
                <input className='mx-3 px-10 py-1 rounded-full bg-red-500 text-white font-semibold hover:bg-red-400' type="button" value="Go Back" />
            </Link>
        </div>


        <div className=' mx-5 my-2 '>
            <h1 className='font-bold text-red-500 text-[30px] text-center mb-5'>DISCHARGE PATIENT DATA RECORD</h1>
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
                            <label htmlFor="middleinitial">Middle Initial</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='middleinitial' name="middleinitial" placeholder=' Middle Initial...' value={middleinitial || ""} onChange={handleInputChange}/>
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
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[155px]' type="text" id='entry_date' name="entry_date" placeholder='Entry Date...' value={entry_date || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doctor_number">Doctor Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doctor_number' name="doctor_number" placeholder='Doctor Number...' value={doctor_number || ""} onChange={handleInputChange}/>
                            </div>


                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doctor_name_referred_to">Doctor Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doctor_name_referred_to' name="doctor_name_referred_to" placeholder='Doctor Name...' value={doctor_name_referred_to || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '> 
                            <label htmlFor="diagnosis">Diagnosis</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='diagnosis' name="diagnosis" placeholder='Diagnosis...' value={diagnosis} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="department_name">Department Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='department_name' name="department_name" placeholder='Department Code...' value={department_name} onChange={handleInputChange}/>
                            </div>  


                            

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="treatment_given">Treatment Given</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='treatment_given' name="treatment_given" placeholder='Treatment Given...' value={treatment_given || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="treatment_advice">Treatment Advice</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='treatment_advice' name="treatment_advice" placeholder='Treatment Advice...' value={treatment_advice || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="date_of_admission">Date Admitted</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[155px]' type="text" id='date_of_admission' name="date_of_admission" placeholder='Date Admitted...' value={date_of_admission || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="date_of_discharge">Date Discharge</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[155px]' type="text" id='date_of_discharge' name="date_of_discharge" placeholder='Date Discharge...' value={date_of_discharge || ""} onChange={handleInputChange}/>
                            </div>

                        </div>

                        <div className='shadow-lg'>


                            <div className='flex justify-between items-center border-b-[2px] px-10 bg-slate-100'>
                                <h3 className=' text-red-500 text-[20px] text-center'>Medical Bills</h3>
                                
 
                            </div>
                            

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="room_and_board">Room and Board</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='room_and_board' name="room_and_board" placeholder='Room and Board...' value={room_and_board || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="central_supplies">Central Supplies</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='central_supplies' name="central_supplies" placeholder='Central Supplies...' value={central_supplies || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="emergency_room">Emergency Room</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='emergency_room' name="emergency_room" placeholder='Emergency Room...' value={emergency_room || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="medicine">Medicine</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='medicine' name="medicine" placeholder='Medicine...' value={medicine || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="laboratory">Laboratory</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='laboratory' name="laboratory" placeholder='Laboratory...' value={laboratory || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="radiology">Radiology</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='radiology' name="radiology" placeholder='Radiology...' value={radiology || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="station_charges">Station Charges</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='station_charges' name="station_charges" placeholder='Station Charges...' value={station_charges || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="doctor_fee">Professional Fee</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='doctor_fee' name="doctor_fee" placeholder='Professional Fee...' value={doctor_fee || ""} onChange={handleInputChange}/>
                            </div>


                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="medicare">Medicare</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='medicare' name="medicare" placeholder='Medicare...' value={medicare || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="company"> Company</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='company' name="company" placeholder='Company...' value={company || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-10 my-2 '>
                            <label htmlFor="insurance">Insurance</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='insurance' name="insurance" placeholder='Insurance...' value={insurance || ""} onChange={handleInputChange}/>
                            </div>


                            <div className='flex justify-end me-8 mt-5'>
                                <input className='mx-3 px-10 py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />
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

export default DisplayOnePatientToDischarge