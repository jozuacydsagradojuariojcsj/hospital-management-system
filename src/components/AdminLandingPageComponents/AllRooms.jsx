
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";


import {AiOutlineSearch} from 'react-icons/ai'
import {MdMeetingRoom} from 'react-icons/md'


// HOME
const AllRooms = () => {


    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.data.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }

    const [data,setData] = useState([]);


    const loadData = async() => {
        const response = await axios.get("http://localhost:5002/api/get/allrooms");
        setData(response.data);

       
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
        
<       div className=' justify-between mt-4'>
            <div className=' items-center justify-between ms-3 me-3 py-[0.5rem] mb-3'>
                <div className='flex items-center' >
                    <MdMeetingRoom className=' me-2 w-[20px] h-[20px] icon'/>
                    <h4 className='text-[20px] text-greenColor'>List of Vacant Rooms</h4>
                </div>

            </div>
            <div className='border-b-[1px] pb-3'>
                <Link to={"/insertroom"}>
                <button className='mx-3 px-10 py-1 rounded-full bg-greenColor text-white font-semibold hover:bg-green-400 '>+ Add New Room</button>
                </Link>
            </div>
        </div>

        <div class="flex  text-center  justify-center shadow-md m-5">

            <table className='w-full h-[200px] justify-center text-[12px] text-center font-light p-10' >
                <thead className=" text-[12px] ">

                    <tr>

                        <th className='px-2 m-5'>No.</th>
                        <th className='px-2 m-5'>Room Number</th>
                        <th className='px-2 m-5'>Room Type</th>
                        <th className='px-2 m-5'>Room Occupied</th>
                        <th className='px-2 m-5'>Charges Per Day</th>

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
                        
                            </tr>
                        )
                    })}
                
                
                </tbody>
            </table>
</div>



    </div>
  )
}

export default AllRooms;