import React, {useState, useEffect} from 'react';
import {useParams, Link } from 'react-router-dom';
import axios from 'axios';

import { toast } from 'react-toastify';



import {AiOutlineSearch} from 'react-icons/ai'
import {MdMeetingRoom} from 'react-icons/md'

////////////////
const initialState = {

    doctor_number: ""
};
///////////////////////
// HOME
// HOME
const OccupiedRoomDetails = () => {



    
//////////////////////////////////////////////

const [state, setState] = useState(initialState);


const {doctor_number} = useParams();

useEffect(() => {
    axios.get(`http://localhost:5002/api/get/get_doctor_number/${doctor_number}`).then((resp) => setState({...resp.data[0]}))
}, [doctor_number])

/////////////////////////////////////////////////////////////////////

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.data.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }

    const [data,setData] = useState([]);


    const loadData = async() => {
        const response = await axios.get("http://localhost:5002/api/get/occupiedrooms");
        setData(response.data[0]);

       
    };
    useEffect (() => {
         loadData();
}, []);

const deleterPatient = (patient_number) => {
    if(window.confirm("Are You Sure You want To Delete Patient?")){
        axios.delete(`http://localhost:5002/api/remove/${patient_number}`);
        toast.success("Patient deleted Successfully!");
        setTimeout(() => loadData, 100);
    }
};

  return (
    


<div className='justify-center'>
        <Link to={`/homedoctor/${doctor_number}`}>
         <input className='mt-3 mx-3 px-10 py-1 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400' type="button" value="Go Back" />
        </Link>
        
        <div className=' justify-between mt-4'>
            <div className=' items-center justify-between ms-3 me-3 border-b-[1px] py-[0.5rem] mb-3'>
                <div className='flex items-center' >
                    <MdMeetingRoom className='text-[20px] me-2 icon '/>
                    <h4 className='text-[20px] text-greenColor'>List of Occupied Rooms</h4>
                </div>
            </div>
        </div>

        <div class="flex  text-center  justify-center shadow-md m-5">

            <table className='w-full h-[200px] justify-center text-[12px] text-center font-light p-10' >
                <thead className=" text-[12px] ">

                    <tr>

                        <th className='px-2 m-5'>No.</th>
                        <th className='px-2 m-5'>Room Number</th>
                        <th className='px-2 m-5'>Room Type</th>
                        <th className='px-2 m-5'>Room Status</th>
                        <th className='px-2 m-5'>Charges Per Day</th>
                        <th className='px-2 m-5'>Patient Number</th>
                        <th className='px-2 m-5'>Action</th>

                    </tr>
                </thead>
                <tbody className='my-5'>
                {data.map((item, index) =>{
                        return (
                            <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'
                                key={item.id}>
                            
                                <th scope="row">{index+1}</th>
                                <td>{item.room_number}</td>
                                <td>{item.room_type}</td>
                                <td>{item.room_occupied}</td>
                                <td>{item.charges_per_day}</td>
                                <td>{item.patient_number}</td>
                                
                                <td>
                                    
                                    <Link to={`/occupiedshowpatient/${item.patient_number}`} >
                                        <button className='border-[1px] border-greenColor px-3 py-1 m-2 rounded-md hover:bg-greenColor hover:textwhite '>View</button>
                                    </Link>
                                </td>

                            </tr>
                        )
                    })}
                
                
                </tbody>
            </table>
</div>



    </div>
  )
}

export default OccupiedRoomDetails;