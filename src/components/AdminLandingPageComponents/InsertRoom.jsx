import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {
    room_number: "",
    room_type: "",
    charges_per_day: "",

};


const InsertRoom = () => {

const [state, setState] = useState(initialState);

const {room_number, room_type, charges_per_day} =  state;

const history = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();
    if(!room_number || !room_type || !charges_per_day){
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/insertroomdetails", {

            room_number, 
            room_type, 
            charges_per_day

        }).then(() => {
            setState({

                room_number: "",
                room_type: "",
                charges_per_day: ""  });
        }).catch((err) => toast.error(err.response.data));
        toast.success("Successfully inserted the data to the Room Table!");
        
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
                        <h1 className='font-bold text-blueColor text-[30px]'>ROOM ENTRY RECORD</h1>
                    </div>

                    <div className='flex justify-center text-[12px]'>
                        <form  onSubmit={handleSubmit}>


                       

                  

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="room_number">Room Number</label>
                            <input className='ms-[100px] text-center border-[1px] border-greenColor w-[200px]' type="number" id='room_number' name="room_number" placeholder='Room Number...' value={room_number || ""} onChange={handleInputChange}/>
                            </div>


                            <div className='flex justify-between mx-5 my-2 '>
                                <label htmlFor="room_type">Room Type</label>
                                <select className='ms-10 text-center border-[1px] border-greenColor w-[200px] px-5' name='room_type' value={room_type || ""} onChange={handleInputChange}>
                                    <option value={""}>Select here...</option>
                                    <option value={"G"}>General</option>
                                    <option value={"P"}>Private</option>
                                </select>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="charges_per_day">Charges per Day</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor w-[200px]' type="number" id='charges_per_day' name="charges_per_day" placeholder='Charges Per Day...' value={charges_per_day || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='mt-5 mb-5 flex justify-center'>

                                <input className='mx-3 px-10 py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />

                                <Link to="/adminvacantroomdetails">
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

export default InsertRoom