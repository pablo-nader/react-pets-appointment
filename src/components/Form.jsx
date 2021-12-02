import React, { useState } from 'react';
import { v4 as uuid_v4 } from "uuid";
import PropTypes from 'prop-types';

const Form = ({addAppointment}) => {
    
    const [appointment, setAppointment] = useState({
        petName: '',
        petOwner: '',
        date: '',
        time: '',
        symptoms: '',
    });

    const [error, setError] = useState(false);

    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name] : e.target.value
        });
        
    }

    const { petName, petOwner, date, time, symptoms } = appointment;

    const handleSubmit = e => {
        e.preventDefault();

        // Validate
        if (petName.trim() === '' ||
            petOwner.trim() === '' ||
            date.trim() === '' ||
            time.trim() === '' ||
            symptoms.trim() === ''
        ) {
            setError(true);
            return;
        } 

        setError(false);
        
        // Set ID
        appointment.id = uuid_v4();

        // Create Appointment
        addAppointment(appointment);

        // Form reset
        setAppointment({
            petName: '',
            petOwner: '',
            date: '',
            time: '',
            symptoms: '',
        });
    }
    
    return (
    <div className="col-6">
        { error ? <div className="alert alert-danger"> ERROR : All fields are required </div> : null }
        <form
            onSubmit={handleSubmit}
        >
            <div className="mb-3">
                <label className="form-label">Pet Name</label>
                <input 
                    name="petName"
                    type="text"     className="form-control form-control-sm"
                    onChange={handleChange} 
                    value={petName}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Pet Owner</label>
                <input 
                    name="petOwner"
                    type="text" className="form-control form-control-sm" 
                    onChange={handleChange} 
                    value={petOwner}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input 
                    name="date"
                    type="date" className="form-control form-control-sm" 
                    onChange={handleChange} 
                    value={date}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Time</label>
                <input 
                    name="time"
                    type="time" className="form-control form-control-sm"
                    onChange={handleChange} 
                    value={time}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Symptoms</label>
                <textarea
                    name="symptoms"
                    className="form-control form-control-sm"
                    onChange={handleChange} 
                    value={symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="btn btn-success form-control btn-sm mt-4"
                >Add Appointment</button>
            </div>
        </form>
    </div>
)};

Form.propTypes = {
    addAppointment: PropTypes.func.isRequired
}

export default Form;