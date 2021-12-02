import React from 'react';
import AppointmentRow from './AppointmentRow';
import PropTypes from 'prop-types';

const AppointmentsTable = ({appointments, deleteAppointment}) => {

    return (
        <div className="col-6">
            <table className="table table-striped table-hovered">
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Owner</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Symptoms</th>
                        <th><i className="fas fa-trash"></i></th>
                    </tr>
                </thead>
                <tbody>
                {appointments.map(e => (
                    <AppointmentRow 
                        key={e.id}
                        data={e}
                        deleteAppointment={(deleteAppointment)}
                    />
                ))}
                </tbody>   
                
        </table>
        </div>
    )
}

AppointmentsTable.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default AppointmentsTable;