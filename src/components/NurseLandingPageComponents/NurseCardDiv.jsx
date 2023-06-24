import React, { useState } from 'react'
import Chart from "react-apexcharts";

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

//imported icon from react-icons ====
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {RiUserSharedLine} from 'react-icons/ri'
import {AiOutlineEllipsis} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineMeetingRoom} from 'react-icons/md'
import {AiOutlineUserAdd} from 'react-icons/ai'




//imported images from assets ====
import logo1 from '../../assets/logo1.jpg'

import stats from '../../assets/stats.png'
import { Link } from 'react-router-dom'

const NurseCardDiv = () => {
    const [value, setValue] = React.useState(dayjs('2023-06-17'));

   
const [chart, setChart] = useState({
    options: {
        colors: ['#2E93fA', '#66DA26', '#e2382f', '#f9d925', '#FF9800'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]
      }
    },
    series: [
      {
        name: "Patients Discharged",
        data: [ 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "Patients Operated",
        data: [10, 80, 71, 83, 88, 90, 81]
      },
      {
        name: "Regular Patients",
        data: [91, 65, 99, 91, 74, 82, 60]
      },
      {
        name: "Daily Patients",
        data: [41, 50, 65, 80, 60, 90, 77]
      }

    ]
  }
  )

  const [chart1, setChart1] = useState({
    options: {
        colors: ['#2E93fA', '#66DA26', '#eab308', '#E91E63', '#FF9800'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]
      }
    },
    series: [
      {
        name: "Check-Up",
        data: [ 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "Admitted",
        data: [10, 80, 71, 83, 88, 90, 81]
      },
      {
        name: "Discharged",
        data: [91, 65, 99, 91, 74, 82, 60]
      },
      {
        name: "Laboratories",
        data: [41, 50, 65, 80, 60, 90, 77]
      }

    ]
  }
  )

  const [state1, setState1] = useState({
    options: {
        colors: ['#e23aaa', '#13af6d', '#E91E63', '#FF9800'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]
      }
    },
    series: [
      {
        name: "Morning Patients",
        data: [ 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "Evening Patients",
        data: [99, 80, 71, 83, 88, 90, 81]
      }

    ]
  }
  )


  const [state2, setState2] = useState({
    options: {
        colors: ['#1eb1e1', '#74407a', '#E91E63', '#FF9800'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]
      }
    },
    series: [
      {
        name: "Updated Records",
        data: [ 40, 45, 99, 49, 60, 70, 91]
      },
      {
        name: "Pending Records",
        data: [33, 80, 71, 99, 88, 90, 81]
      },
      {
        name: "Upcoming Records",
        data: [66, 99, 71, 55, 88, 65, 81]
      }

    ]
  }
  )

  return (
    <>

        <div className='mb-[5px]'>
        
            <div className='grid gap-2 grid-cols-4 m-1 items-start'>

                <div className="justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]" >
                    <p className='block text-center text-[13px] text-red-500 opacity-[.9] font-semibold mt-3'>
                       Data obtained for the last 7 days.
                    </p>

                    <Chart
                        options={chart.options}
                        series={chart.series}
                        type="line"
                        width="300"
                    />
                </div>

                <div className='singleGrid justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]'>
                
                    <div className='flex justify-between items-center m-3'>
                        <div className='flex items-center '>
                            <FiUsers className='text-textColor text-[25px] me-1 icon'/>
                            <h4 className='font-bold text-textColor text-[15px] items-center'>
                                Vacant Rooms
                            </h4>
                        </div>
                        
                        <div className='flex justify-end  '>
                            <AiOutlineEllipsis className='justify-end text-textColor text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center m-3 '>
                        <span className='font-semibold text-textColor text-[30px]'>
                            312
                        </span>

                        <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-greenColor rounded-full  bg-slate-200 opacity-[.9]'>
                            +26 New Rooms
                        </span>

                    </div>
                
                    <div className='flex justify-center mb-3'>
                        <div className='grid grid-cols-8 w-[50%] items-end ms-3'>
                            <div className='bg-green-500 h-[70px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-blue-400 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-yellow-500 h-[100px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-300 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-purple-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-500 h-[20px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-300 h-[90px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                        </div>

                        <div className=' items-center mx-4'>
                            <p className='block text-center text-[13px] text-textColor opacity-[.9] font-semibold mb-2'>
                                Data updates within every 7 days.
                            </p>
                      
                            <div className='text-center justify-center bg-yellow-500 rounded-full hover:bg-slate-200 mt-2'>
                                <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"/nursevacantroomdetails"}>View All Vacant Rooms</Link></button>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='singleGrid justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]'>
                
                    <div className=''>
                        <div className='flex justify-between items-center mt-3'>
                            <div className='flex justify-center'>
                                <AiOutlineUserAdd className='text-textColor text-[25px] me-1 icon'/>
                                <h4 className='font-bold text-textColor text-[15px] border-b-[2px] border-b-green-500 items-center'>
                                    Entry Patients
                                </h4>
                            </div>

                            
                        </div>
                        
                    </div>

                    <div className='flex items-start ms-3 '>
                        <span className='font-semibold text-textColor text-[30px]'>
                            438
                        </span>

                        <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-greenColor rounded-full  bg-slate-200 opacity-[.9]'>
                            +9.4%
                        </span>

                        <p className='text-center block text-[13px] text-textColor opacity-[.9]  font-semibold mx-4'>
                            Data obtained for the last 7 days from 2,925 to 3,712 Registered Patients.
                        </p>

                    </div>


                    <div className='flex justify-center mb-3'>
                            <div className='grid grid-cols-8 w-[50%] items-end ms-3'>
                                <div className='bg-blue-500 h-[70px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-blue-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-blue-400 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-blue-500 h-[100px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-blue-300 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-blue-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-blue-500 h-[20px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-blue-300 h-[90px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            </div>


                            <div className='flex justify-center'>
                                <div className='flex justify-center bg-red-600 rounded-full hover:bg-slate-200 mx-2 mb-5 mt-5 w-[200px]'>
                                    <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"/insertpatient"}>Create Patients' Account</Link></button>
                                </div>
                            </div>

                        </div>



                

                  

                    


                    

                </div>

                <div className='singleGrid justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]'>
                
                        <div className='flex justify-between items-center m-3'>
                            <div className='flex items-center '>
                                <AiOutlineUserAdd className='text-greenColor text-[25px] me-1 icon'/>
                                <h4 className='font-bold text-textColor text-[15px] items-center'>
                                    My Schedule
                                </h4>
                            </div>
                            
                            <div className='flex justify-end  '>
                                <AiOutlineEllipsis className='justify-end text-textColor text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                            </div>
                            
                        </div>

                        <div className='flex items-center m-3 py-3'>
                            <span className='font-semibold text-textColor text-[30px]'>
                                344
                            </span>

                            <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-greenColor rounded-full  bg-slate-200 opacity-[.9]'>
                                Overall Rendered duty hours
                            </span>

                        </div>
            


                        <div className='flex justify-center'>
                            <div className='grid grid-cols-8 w-[50%] items-end ms-3'>
                                <div className='bg-green-500 h-[70px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-green-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-green-400 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-green-500 h-[100px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-green-300 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-green-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-green-500 h-[20px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                                <div className='bg-green-300 h-[90px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            </div>

                            <div className=' items-center mx-4'>
                                <p className='block text-center text-[13px] text-textColor opacity-[.9] font-semibold mb-2'>
                                    Data obtained for the last 7 days.
                                </p>
                                <div className='text-center justify-center bg-red-500 rounded-full hover:bg-slate-200'>
                                    <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"#"}>View My Schedule</Link></button>
                            </div>

                        </div>

                    </div>

                </div>


            </div>


            <div className='grid gap-1 grid-cols-3 items-start m-1 '>

                <div className='singleGrid justify-center rounded-[10px] border-[1px] border-greenColor h-[320px]'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
        
                            <DateCalendar
                                defaultValue={dayjs()}
                                views={['year', 'month', 'day']}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>

                <div className='justify-center gap-3'>
                <p className='block text-center text-[13px] text-red-700 opacity-[.9] px-[1rem] mt-3 font-semibold '>
                            Data shows the total number of patients who enters and exits the HMS.
                        </p>
                    <div className='flex justify-center'>
                      
                        <Chart
                            options={state1.options}
                            series={state1.series}
                            type="bar"
                            width="450"

                        />
                    </div>
                </div>

                 <div className='singleGrid justify-center rounded-[10px] p-[5px] border-[1px] border-greenColor bg-gradient-to-r from-blue-100 to-pink-100 h-[320px]'>
                
                    <div className='flex justify-between items-center m-3'>
                        <div className='flex items-center '>
                            <RiUserSharedLine className='text-textColor text-[25px] me-1 icon'/>
                            <h4 className='font-bold text-textColor text-[15px] items-center'>
                                Overall Registered Patients
                            </h4>
                        </div>
                        
                        <div className='flex justify-end  '>
                            <AiOutlineEllipsis className='justify-end text-textColor text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center m-3 '>
                        <span className='font-semibold text-textColor text-[30px] mt-5'>
                            867
                        </span>

                        <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-white rounded-full  bg-slate-200 opacity-[.9]'>
                            +9.26%
                        </span>

                        <p className='block text-center text-[13px] text-textColor opacity-[.9] px-[1rem] mt-3 font-semibold '>
                            Data shows the total number of patients who enters and exits the HMS.
                        </p>

                    </div>

                    <div className='flex justify-center'>
                        <Chart
                            options={chart1.options}
                            series={chart1.series}
                            type="bar"
                            width="300"

                        />
                    </div>

                    {/* <div className='grid grid-flow-row w-[50%] gap-2 items-end ms-3'>
                            <div className='bg-green-500 h-[7px] w-[190px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-200 h-[7px] w-[300px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-blue-400 h-[7px] w-[250px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-yellow-500 h-[7px] w-[180px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-300 h-[7px] w-[230px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-purple-200 h-[7px] w-[300px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-500 h-[7px] w-[200px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-300 h-[7px] w-[170px] rounded-t-lg rounded-b-lg'></div>
                    </div> */}
                  
{/* 
                    <div className='flex justify-center items-center m-3'>
                        <input
                            type="range"
                            className='transparent h-[10px] w-full cursor-pointer accent-purple-200 rounded-lg  bg-white'
                            id="customRange1" />
                        <p className='text-center text-[13px] text-white'>
                            3,816 Today
                        </p>
                    </div> */}

                </div>
            </div>


        </div>
    </>
  )
}

export default NurseCardDiv