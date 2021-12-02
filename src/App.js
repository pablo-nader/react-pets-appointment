import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import AppointmentsTable from "./components/AppointmentsTable";

function App() {
  // local Storage 
  let localAppointments = JSON.parse(localStorage.getItem('appointments'));

  if (!localAppointments) {
    localAppointments = [];
  }

  // appointments array
  const [appointments, setAppointments] = useState(localAppointments);

  // add appointment
  const addAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  }

  // delete appointment
  const deleteAppointment = id => {
    setAppointments(appointments.filter(e => e.id !== id));
  }

  //
  useEffect(() => {
    let localAppointments = JSON.parse(localStorage.getItem('appointments'));

    if (localAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments])

  return (
    <div className="container">
      <h1 className="text-center mt-4">Pets Appointments</h1>
      <div className="row">
        <Form
          addAppointment={addAppointment}
        />
        <AppointmentsTable 
          appointments={appointments}
          deleteAppointment={deleteAppointment}
        />
      </div>
    </div>
  );
}

export default App;
