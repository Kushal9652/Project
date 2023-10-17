

'use client';

// import { Carousel } from 'flowbite-react';
import { Select, Textarea, Button, Datepicker, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

// import React, { useState } from 'react';
import './login.css'
import { useState } from 'react';
export default function Appointment() {
  const [Check, setCheck] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    timing: '',
    date: '',
    age: '',
    phoneNumber: '',
    healthCondition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
/*
  const Onsubmit = () => {
    setCheck(!Check);
  };
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the appointment.php file
    fetch('http://localhost/vydya/vydya/MainFile/backend/appointments.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        // Handle the response from the server (if needed)
        console.log('Server response:', data);

        // Update the state to show the success message
        setCheck(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error (e.g., show an error message)
      });
  };
  return (
    <div className='dummybody'>
         {
          Check?
          <form action="http://localhost/vydya/vydya/MainFile/backend/appointments.php" /*onSubmit={()=>Onsubmit()}*/ method='post'>
          <div className='grid grid-cols-2 gap-4'>
            <div className="max-w-md">

              <TextInput
                addon="@"
                id="username3"
                name="username"
                placeholder="User Name"
                required
              />
            </div>
            <div className="max-w-md">

              <TextInput
                id="email4"
                name="email"
                placeholder="usermail@gmail.com"
                required
                rightIcon={HiMail}
                type="email"
              />
            </div>
            <div
              className="max-w-md"
              id="select"
              name="timing"
            >
               <input
        type="text"
        id="time"
        name="time"
        placeholder="time"
      />

            </div>
            <div >  <label for="date"></label>
<input type="text" id="date" name="date" pattern="\d{4}-\d{2}-\d{2}" placeholder="yyyy-mm-dd" required/>
</div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="number"
                className="peer block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]"
                id="exampleFormControlInputNumber"
                name="age"
                placeholder="Age" />

            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="tel"
                name="phoneNumber"
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
              name="healthCondition"
              rows={5}
            />
          </div>
          <Button gradientDuoTone="cyanToBlue" className='m-[2rem] px-[1rem]' type='submit'>
            Get Appointment
          </Button>

        </form>:
        <div className=''><div className="message">
        <h1>Registration Successful</h1>
        <p>You will receive an email with your plan shortly.</p>
        <Button gradientDuoTone="cyanToBlue"/*onClick={()=>Onsubmit()}*/ className='mx-auto my-3 px-[1rem]' type='submit'>
            Get Another Appointment
          </Button>
    </div></div>
         }
    </div>
  );
}