import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import '../timepicker.css';
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';


const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('10:00');

  return (
    <section className='py-20 px-4'>
          <div className=''>
            {/* datepicker */}
            <div>
              <div className='flex space-x-4'>
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* timepicker */}
            <div>
              <div className='flex space-x-4'>
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                className='input'
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>
            {/* person number */}
            <div>
              <div className='flex space-x-4'>
                <FaUsers />
                <div>How many people?</div>
              </div>
              <input className='input' type='text' placeholder='1' />
            </div>
          </div>
          {/* button */}
          <div className=''>
            <button className='border px-6 py-2 rounded-full bg-blue-400'>
              Submit
            </button>
          </div>
    </section>
  );
};

export default Reservation;
