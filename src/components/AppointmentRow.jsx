import React from 'react';
import PropTypes from 'prop-types';

const AppointmentRow = ({data, deleteAppointment}) => (
    <tr>
        <td>{data.petName}</td>
        <td>{data.petOwner}</td>
        <td>{data.date}</td>
        <td>{data.time}</td>
        <td>{data.symptoms}</td>
        <td>
            <i 
                className="fas fa-trash text-danger"
                style={{cursor: 'pointer'}}
                onClick={() => deleteAppointment(data.id)}
            ></i>
        </td>
    </tr>
);

AppointmentRow.propTypes = {
    data: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default AppointmentRow;
