import React, {useState, useEffect, useRef} from 'react';
import {useReactToPrint} from 'react-to-print'
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';



import logo1 from '../../assets/logo1.jpg'


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




const PrintDischargePatientDetails = () => {


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
    axios.get(`http://localhost:5002/api/get/printbillingstatement/${patient_number}`).then((resp) => setState({...resp.data[0][0]}))
}, [patient_number])


// const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!patient_number || !first_name || !last_name || !age || !sex	 || !address	 || !city	 || !phone_number	 || !entry_date	 || !doctor_number	 || !diagnosis	 || !department_code ||
//                     !treatment_given || !treatment_advice || !payment_made || !mode_of_payment || !date_admitted	 || !date_discharge){
    
//         toast.error("Fill out all the necessary information!");
//     }else {
//             axios.post("http://localhost:5002/api/post/discharge", {
//             patient_number, 
//             first_name, 
//             last_name, 
//             age, 
//             sex	, 
//             address	, 
//             city	, 
//             phone_number	, 
//             entry_date	, 
//             doctor_number	, 
//             diagnosis	,
//             department_code,
//             treatment_given, 
//             treatment_advice, 
//             payment_made, 
//             mode_of_payment, 
//             date_admitted,
//             date_discharge

//         }).then(() => {
//             setState({

//                 patient_number: "", 
//                 first_name: "", 
//                 last_name: "", 
//                 age: "", 
//                 sex	: "", 
//                 address	: "", 
//                 city	: "", 
//                 phone_number	: "", 
//                 entry_date	: "", 
//                 doctor_number: "", 
//                 diagnosis: "",
//                 department_code: "",
//                 treatment_given: "",
//                 treatment_advice:"",
//                 payment_made: "",
//                 mode_of_payment: "",
//                 date_admitted: "",
//                 date_discharge: "" });

//         }).catch((err) => toast.error(err.response.data));
//         toast.success("Data Saved Successfully to the Discharge Patient Table!");
        
//         setTimeout(() =>  history.push("/"), 500);
//     }
// };

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  



const componentRef = useRef();
const handlePrint = useReactToPrint({

    content: () => componentRef.current,
    documentTitle: 'Patients Medical Bill',
    onAfterPrint: () => alert('Printed Successfully!!')

});


// const subtotal = {room_and_board+central_supplies+emergency_room+medicine+laboratory+radiology+station_charges};


  return (

    <>

    <div className='flex  mt-3'>
       
        <div className=''>
            <Link to="/showpatientsbills">
                <input className='mx-3 px-10 py-1 rounded-full bg-red-500 text-white font-semibold hover:bg-red-400' type="button" value="Go Back" />
            </Link>
        </div>

        <button onClick={handlePrint} className='mx-3 px-10 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400'>Print</button>

    </div>

    <div ref={componentRef} className='m-10 border-[1px] border-greenColor p-7 ' style={{width: '90%', height: '100%'}}>
       
        

        <div className='flex justify-center items-center gap-6'>

            <a class="flex-shrink-0" href="#">
                <img className='w-[130px] h-[120px]' src={logo1} alt="logo"/>
            </a>

            <div className='text-center'>
                <h3 className='text-[13px] font-bold text-slate-700'>HOSPITAL MANAGEMENT SYSTEM</h3>
                <h5 className='text-[10px] font-semibold text-slate-7 '>University of Science and Technology of Southern Philippines</h5>
                <h5 className='text-[10px]  text-slate-700 '>Lapasan, Cagayan de Oro City, 9000, Philippines</h5>
                <h5 className='text-[10px] text-slate-700 '>Tel., MTI # 855-5099/740783 ; E-Mail Add: hms.ustp.hosp@yahoo.com</h5>
            </div>

        </div>

        <div className=' justify-start items-center gap-6 mt-5 '>

            <div className='flex justify-start items-center  mx-5'>
                <label className='text-[13px]'>Patient : {[patient_number, "  -  ", last_name,",  ", first_name, "  -  ", sex]} </label>
            </div>   

            <div className='flex justify-between text-left ms-5'>

                <div className='grid grid-flow-row'>

                    <label className='text-[10px]'>Company : </label>
                    <label className='text-[10px]'>Insurance : </label>
                    <label className='text-[10px]'>Address : {[address, "  , ", city]}</label>
                    <label className='text-[10px]'>Tel. No. : {phone_number}</label>
                    <label className='text-[10px]'>First Case Rate : {diagnosis}</label>
                    <label className='text-[10px]'>Second Case Rate :</label>

                </div>
                
                <div className='grid grid-flow-row'>
                    <label className='text-[10px]'>Admission # :</label>
                    <label className='text-[10px]'>Medicare Type :</label>
                    <label className='text-[10px]'>Date Admitted : {date_of_admission}</label>
                    <label className='text-[10px] '>Date Discharged : {date_of_discharge}</label>
                    <label className='text-[10px]'>No. of Days : {}</label>

                </div>

            </div>


            <div class="flex  text-center  justify-center shadow-md m-5 ">

                <table className='w-full justify-center text-[9px] text-center font-light' >
                    <thead>

                        <tr className='border-b-[1px] border-t-[1px]  border-textColor'>

                            <th className='text-[9px] '>PROFESSIONAL FEES</th>
                            <th className='text-[9px] '> TOTAL</th>
                            <th className='text-[9px] '>MEDICARE</th>
                            <th className='text-[9px] '>COMPANY</th>
                            <th className='text-[9px] '>INSURANCE</th>
                            <th className='text-[9px] '>PERSONAL</th>

                        </tr>
                    </thead>
                    <tbody className='my-10'>
                    
                        <tr className=' border-[1px] border-none bg-gray-200 dark:hover:bg-gray-100'>

                            <td className=''>SERVICES</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'>

                            <td>ROOM AND BOARD</td>
                            <td>{room_and_board}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                        </tr>

                        <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'>

                            <td>CENTRAL SUPPLIES</td>
                            <td>{central_supplies}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                        </tr>

                        <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'>

                            <td>EMERGENCY ROOM</td>
                            <td>{emergency_room}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                        </tr>

                        <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'>

                            <td>MEDICINE</td>
                            <td>{medicine}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                        </tr>

                        <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'>

                            <td>LABORATORY</td>
                            <td>{laboratory}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                        </tr>

                        <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'>

                            <td>RADIOLOGY</td>
                            <td>{radiology}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                        </tr>

                        <tr className='bg-white border-b-[1px]   border-textColor'>

                            <td>STATION CHARGES</td>
                            <td>{station_charges}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>

                        </tr>

                        <tr className='font-bold border-b-[1px] border-t-[1px]  border-textColor'>

                            <td className=''>HOSPITAL SUB-TOTAL</td>
                            <td>{room_and_board+central_supplies+emergency_room+medicine+laboratory+radiology+station_charges}</td>
                            <td>{medicare}</td>
                            <td>{company}</td>
                            <td>{insurance}</td>
                            <td>{(room_and_board+central_supplies+emergency_room+medicine+laboratory+radiology+station_charges)-(medicare+company+insurance)}</td>

                        </tr>

                            
                        <tr className=' border-[1px] border-none bg-gray-200 dark:hover:bg-gray-100'>

                            <td className=''>PROFESSIONAL FEES</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>

                        
                        <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'>

                            <td>{doctor_name_referred_to}</td>
                            <td>{doctor_fee}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>{doctor_fee}</td>

                        </tr>

                        <tr className='font-bold'>

                            <td>PROFESSIONAL FEES SUB-TOTAL</td>
                            <td>{doctor_fee}</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>{doctor_fee}</td>

                        </tr>


                        <tr className='font-bold bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'>

                            <td>GRAND TOTAL</td>
                            <td>{room_and_board+central_supplies+emergency_room+medicine+laboratory+radiology+station_charges+doctor_fee}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{((room_and_board+central_supplies+emergency_room+medicine+laboratory+radiology+station_charges)-(medicare+company+insurance))+doctor_fee}</td>

                        </tr>

                        <tr className='font-bold text-red-600 text-[13px]'>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>BALANCE DUE :</td>
                            <td>{((room_and_board+central_supplies+emergency_room+medicine+laboratory+radiology+station_charges)-(medicare+company+insurance))+doctor_fee}</td>

                        </tr>
                    
                    </tbody>
                </table>
                
                

            </div>

            <div className='grid grid-cols-3 gap-10 mt-[100px]'>

                    <div className=''>
                        <h6 className='text-[10px] text-center mb-7 text-textColor font-semibold' >Certified and Corrected by:</h6>
                        <hr className=' border-textColor mx-5' />
                        <h6 className='text-[10px] text-center  text-textColor ' >Billing Clerk</h6>
                    </div>

                    <div className=' '>
                        <h6 className='text-[10px] text-center mb-7 text-textColor font-semibold' >Reviewed and Acknowledged by:</h6>
                        <hr className=' border-textColor mx-5' />
                        <h6 className='text-[10px] text-center  text-textColor ' >Patient/Relative or Authorized Representative</h6>
                    </div>

                    <div className=''>
       
                        <hr className=' border-textColor mx-5 mt-10' />
                        <h6 className='text-[10px] text-center  text-textColor ' >Relationship</h6>
                    </div>

    


                </div>
        </div>

        
    </div>
    </>
  )
}

// addEdit

export default PrintDischargePatientDetails