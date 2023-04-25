import React, {useState} from 'react'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './DatePicker.css'

const DateOfBirth = ({label}) =>{
    const [value, onChange] = useState(new Date())
    
    // Calculate the date 100 years ago
    const hundredYearsAgo = new Date();
    hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);

    return (
        <div className='date-picker'>
            <label>{label}</label>
            <DatePicker
                onChange={onChange} 
                value={value}
                required
                format={"dd M yyyy"}
                maxDate={new Date()}
                minDate={hundredYearsAgo}

                locale={'es-ES'} 
            />
        </div>
    )
}

export default DateOfBirth