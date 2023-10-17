'use client';

import { Carousel } from 'flowbite-react';
import React, { useEffect } from 'react'
import './Style.css'
import { Select, Textarea, Button, Datepicker, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import backgroundImage from './Images/FIrstBg.jpg'
import AppointmentWomen from './Images/AppointmentWomen.jpg'
import WelcomeSide from './Images/WelcomeSide.jpg'
import SecondBg from './Images/SecondBg.jpg'
import SliderSide from './Images/SliderSide.jpg'
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'

export default function BloodServices() {
  useEffect(()=>{
    function fetchDataAndPopulateTable() {
      const url = 'http://localhost/vydya/vydya/MainFile/backend/db1.php';
      fetch(url)
          .then(response => response.json())
          .then(data => {
              const donorTableBody = document.getElementById('donorTableBody');
              donorTableBody.innerHTML = '';

              

              // Iterate through the data and add rows to the table
              data.forEach(row => {
                  const newRow = document.createElement('tr');
                  newRow.innerHTML = `
                      <th>${row.donation_id}</th>
                      <th>${row.blood_group}</th>
                      <th>${row.donor_name}</th>
                      <th>${row.phone_number}</th>
                      <th>${row.donation_place}</th>
                  `;
                  donorTableBody.appendChild(newRow);
              });
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          })
        }
  
 

  
  fetchDataAndPopulateTable();
  },[])
  const SliderDonar = [
    {
      data: " I wish I could tell you my donor how grateful I am for your selfless act.You gave me new life. We may be coworkers or schoolmates or just two in the same community.I'm very grateful to you. ",
      img: img1,
      name: "BABA FAKRUDDIN",
      age: "20",
      place: "Guntakal Ap"
    },
    {
      data: " I proudly donate blood on a regular basis because it gives others something they desperately need to survive. Just knowing I can make a difference in someone else's life makes me feel great! ",
      img: img2,
      name: "Kushal Kumar",
      age: "20",
      place: "Chandragiri Ap"
    },
    {
      data: " I have been a donor since high school. Although I have not been a donor every year, I always want to give to the human race. I love to help others! Moreover it gives a real peace in my mind. ",
      img: img3,
      name: "Vishnu Vardhan",
      age: "20",
      place: "Tadipatri Ap"
    }
  ]


  return (
    <div>
      <div className='h-[60rem] flex items-center justify-start  bg-cover w-full bg-top' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='pl-[11rem]'>
          <p className='text-white text-3xl pb-[1.5rem]'>Donate blood,save life !</p>
          <p className='text-white text-8xl font-[1000] pb-[1rem]'>Your Blood <br />Can Bring Smile <br />In Other Person Face</p>
          <div><button className='bg-red-500 text-[20px] text-black hover:bg-blue-700 font-bold  py-2 px-4 border border-black h-[4rem] rounded'>Donate Now</button> <button className='bg-[#1e293b] hover:bg-blue-700 font-bold border-black rounded text-white py-2 px-4 text-[20px] h-[4rem] '>+91 94651XXXXX</button></div>
        </div>
      </div>


      <div className='flex h-[35rem] w-full items-center justify-center'>
        <div className='w-[40rem] h-[25rem] relative z-[2] bg-[#f1f5f9] translate-y-7 translate-x-7 p-9'>
          <p className='text-[900] text-[4rem]'>Who We Are</p>
          <p className='text-[1.25rem] pb-[0.75rem]'> Vydya Blood Services is for public donation center with blood donation members in the changing health care system.
          </p>
          <ul className=' list-disc list-inside'>
            <li className='text-lg'>Specialist blood donors and clinical supervision.</li>
            <li className='text-lg'>Increasing communication with our members.</li>
            <li className='text-lg'>High quality assessment, diagnosis and treatment.</li>
            <li className='text-lg'>Examine critically to ensure alignment.</li>
            <li className='text-lg'>The extra care of a multi-disciplinary team.</li>
          </ul>
        </div>
        <div className='w-[40rem] h-[25rem] relative flex items-center justify-center' ><img src={WelcomeSide} className='h-full w-full absolute' alt="" /> <a href="https://www.youtube.com/watch?v=dAbmL_kXHj8"><i className="fa-regular fa-circle-play fa-beat-fade relative z-[2] text-[8rem]"></i></a></div>
      </div>

      <div style={{ backgroundImage: `url(${SecondBg})`, background: "linearGradient( rgba(0,0,0,0),  rgba(0,0,0,0) )", backgroundPosition: "top center", backgroundRepeat: "no-repeat", backgroundAttachment: "inherit" }} className='bg-cover  justify-center items-center gap-3 flex-col flex h-[65rem]'>
        <div className='h-[15rem] w-full text-center pt-[3rem]'><p className='text-white text-3xl pt-5'>Awesome Words From Members</p> <p className='text-black font-bold text-5xl pt-10'>JOIN WITH US AND SAVE LIFE</p></div>
        <div className='h-[45rem] relative w-[75%] flex bg-white rounded-lg'>
          <div className='w-[50%] h-full z-20 '>
            <Carousel >
              {
                SliderDonar.map((ele, index) => {
                  return (
                    <div key={index} className=" p-[3rem] flex h-full  flex-col justify-center gap-10 bg-gray-400 dark:bg-gray-700 dark:text-white">
                      <p className='text-red-600 text-4xl font-extrabold'>DONOR OPINION</p>
                      <p className='text-2xl'>{ele.data} </p>
                      <img src={ele.img} alt="" className='h-[5rem] w-[5rem] rounded-[50%]' />
                      <p className='text-xl'>{ele.name} <br /> Age: <span>{ele.age} Male</span><br />  {ele.place}</p>

                    </div>
                  )
                })
              }

            </Carousel></div>
          <img src={SliderSide} alt='' className='w-[50%] h-full rounded-lg'></img>
        </div>
      </div>

      <div className='w-full h-[90rem] relative'>

        <div style={{ backgroundImage: `url(${AppointmentWomen})` }} className=' flex justify-end bg-cover relative h-[40%] '>
          <div className='h-full relative w-[35%] mr-[5%] bg-[#e2e8f0] '>
            <div className='h-[20%] flex justify-center items-center w-full bg-slate-800'> <p className='text-white text-3xl font-extrabold'>REQUEST APPOINTMENT</p></div>
             {/*<form action="" >
              <div className='grid grid-cols-2 gap-4'>
                <div className="max-w-md">

                  <TextInput
                    addon="@"
                    id="username3"
                    placeholder="User Name"
                    required
                  />
                </div>
                <div className="max-w-md">

                  <TextInput
                    id="email4"
                    placeholder="usermail@gmail.com"
                    required
                    rightIcon={HiMail}
                    type="email"
                  />
                </div>
                <div
                  className="max-w-md"
                  id="select"
                >

                  <Select
                    id="countries"
                    required
                  >
                    <option>
                      Timings for Blood Checking
                    </option>
                    <option>
                      9:00 AM
                    </option>
                    <option>
                      10:00 AM
                    </option>
                    <option>
                      11:00 AM
                    </option><option>
                      12:00 PM
                    </option>
                    <option>
                      4:00 PM
                    </option>
                    <option>
                      5:00 PM
                    </option><option>
                      6:00 PM
                    </option>
                  </Select>
                </div>
                <div >   <Datepicker /></div>
                <div className="relative mb-3" data-te-input-wrapper-init>
                  <input
                    type="number"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]"
                    id="exampleFormControlInputNumber"
                    placeholder="Age" />

                </div>
                <div className="relative mb-3" data-te-input-wrapper-init>
                  <input
                    type="tel"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]"
                    id="exampleFormControlInputTel"
                    placeholder="Phone Number" />

                </div>

              </div>
              <div
                className="w-full mt-[2rem]"
                id="textarea"

              >

                <Textarea
                  id="comment"
                  placeholder="Leave your some health condition for better procedure"
                  required
                  rows={4}
                />
              </div>
              <Button gradientDuoTone="cyanToBlue" className='m-[2rem] px-[1rem]' type='submit'>
                Get Appointment
              </Button>

            </form> */}
          </div>
        </div>

        <div className='relative h-[60%]'>

          <div className='w-[60%] relative h-[60%] z-[2] bg-[#f1f5f9] pl-[10rem] pt-[5rem]'>
            <p className='text-[900] text-[4rem] py-[1.5rem]'>Good To Know
            </p>
            <p className='text-[2rem] py-[0.75rem]'> Helpful Information
            </p>
            <ul className=' list-disc list-inside'>
              <li className='text-lg'>Maintain a healthy iron level by eating iron rich foods.</li>
              <li className='text-lg'>Drink an extra 16 oz. of water prior to your donation.</li>
              <li className='text-lg'>Avoid alcohol consumption before your blood donation.</li>
              <li className='text-lg'>Remember to bring the donor card or national ID/Passport.</li>
              <li className='text-lg'>Finally, Try to get a good night sound sleep after donation.</li>
            </ul>
          </div>
          <div className='flex justify-around items-center p-[3rem]'>



            <div className=" rounded-lg p-4 text-center w-[18rem] h-[15rem] bg-[aliceblue]">
              <i className="fas fa-heartbeat text-blue-500 text-5xl "></i>
              <span className="block text-4xl font-extrabold text-red-700 my-[1rem] mt-[2rem]">2578</span>
              <h4 className="text-3xl text-blue-900 uppercase pt-[1rem]">Success Smile</h4>
            </div>




            <div className=" rounded-lg p-4 text-center w-[18rem] h-[15rem] bg-[aliceblue]">
              <i className="fa fa-stethoscope icon text-blue-500 text-5xl "></i>
              <span className="block text-4xl font-extrabold text-red-700 my-[1rem] mt-[2rem]">3238</span>
              <h4 className="text-3xl text-blue-900 uppercase pt-[1rem]">Happy Donors</h4>
            </div>


            <div className="w-[18rem] h-[15rem] bg-[aliceblue] rounded-lg p-4 text-center">
              <i className="fa fa-users icon text-blue-500 text-5xl "></i>
              <span className="block text-4xl font-extrabold text-red-700 my-[1rem] mt-[2rem]">2158</span>
              <h4 className="text-3xl text-blue-900 uppercase pt-[1rem]">Happy Recipient</h4>
            </div>



            <div className="w-[18rem] h-[15rem] bg-[aliceblue] rounded-lg p-4 text-center">
              <i className="fa fa-building icon text-blue-500 text-5xl"></i>
              <span className="block text-4xl font-extrabold text-red-700 my-[1rem] mt-[2rem]">1021</span>
              <h4 className="text-3xl text-blue-900 uppercase pt-[1rem]">Total Rewards</h4>
            </div>



          </div>
        </div>
      </div>
    

       <div className='w-[80rem] ml-[13rem]'>
        <p className='font-extrabold text-[5rem] text-center'>NearBy Donars</p>
       <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light border">
          <thead className="border-[4px] font-medium border-black">
            <tr>
              <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Id</th>
              <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Blood Group</th>
              <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Donar Name</th>
              <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Phone Number</th>
              <th scope="col" className="px-6 text-[1.5rem] font-extrabold py-4">Place</th>
            </tr>
            
          </thead>
          <tbody className='donorTableBody' id='donorTableBody'>
            <tr>
              <th>1</th>
              <th>B+</th>
              <th>kushal</th>
              <th>6304499686</th>
              <th>tirupathi</th>
            </tr>
            <tr>
              <th>2</th>
              <th>A+</th>
              <th>sitha</th>
              <th>8751007246</th>
              <th>tirupathi</th>
            </tr>
            <tr>
              <th>3</th>
              <th>A-</th>
              <th>poorvaja</th>
              <th>9652769398</th>
              <th>Chandragiri</th>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
       </div>
       
    </div>



  )
}