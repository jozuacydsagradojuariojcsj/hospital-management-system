
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";


import {AiOutlineSearch} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'


// HOME
const DisplayDischargePatients = () => {

    const [filterValue, setFilterValue] = useState('');
    const [data,setData] = useState([]);




    const handleFilter = (value) => {
        const filtered = originalData.filter((item) =>
          item.data.toLowerCase().includes(value.toLowerCase())
        );
    
        setData(filtered);
      };



    const loadData = async() => {
        const response = await axios.get("http://localhost:5002/api/get/billerdischargelist");
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
        
        <div className=' justify-between mt-4'>
            <div className='grid grid-cols-2 items-center justify-between ms-3 me-3 py-[0.5rem] mb-3 '>
                <div className='flex items-center' >
                    <FaUsers className=' text-[20px] font-bold me-2 icon '/>
                    <h4 className='text-blueColor text-[20px] font-bold'>LIST OF PATIENTS</h4>
                </div>

                <div className='flex justify-end items-center text-end ' >
                    <AiOutlineSearch className='text-[20px] me-1 icon'/>
                    <input 
                        className='ps-3 w-[50%] text-[13px] border-[1px] border-textColor p-1 rounded-[10px]' 
                        type="text" 
                        placeholder='Search Department Here...' 
                        value={filterValue} 
                        onChange={(e) => {
                            setFilterValue(e.target.value);
                            handleFilter(e.target.value);
                        } }
                    />
                    
                </div>
            
            </div>

          
        </div>

        <div class="flex  text-center  justify-center shadow-md m-5 ">

            <table className='w-full justify-center text-[15px] text-center font-light' >
                <thead className=" text-[18px] ">

                    <tr>

                        <th className=' '>Patient Number</th>
                        <th className=''>First Name</th>
                        <th className=' '>Middle Initial</th>
                        <th className=''>Last Name</th>
                        <th className=''>Action</th>

                    </tr>
                </thead>
                <tbody className='my-10'>
                {data.map((item, index) =>{
                        return (
                            <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'
                                key={item.id}>
                            
                                <td>{item.patient_number}</td>
                                <td>{item.first_name}</td>
                                <td>{item.middleinitial}</td>
                                <td>{item.last_name}</td>
                                <td>
                                    
                                    <Link to={`/displayonepatienttodischarge/${item.patient_number}`} >
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

export default DisplayDischargePatients;