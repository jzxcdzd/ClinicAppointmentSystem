// Mock database of appointments
export const appointmentData = [
    {
        id: 1, // Appointment ID
        date: "2025-04-10",
        time: "10:00",
        patientId: 1, // Reference to patientData (Alice)
        physicianId: 1, // Reference to physicianData (Dr. Bono Macariola)
        chiefConcern: "Fever and cough",
        notes: "Prescribed antibiotics and rest."
    },
    {
        id: 2,
        date: "2025-04-11",
        time: "14:00",
        patientId: 2, // Reference to patientData (Bob)
        physicianId: 1, // Reference to physicianData (Dr. Joshua Algarra)
        chiefConcern: "Chest pain",
        notes: "Scheduled for ECG and blood tests."
    },
    {
        id: 3,
        date: "2025-04-12",
        time: "09:00",
        patientId: 3, // Reference to patientData (Charlie)
        physicianId: 1, // Reference to physicianData (Dr. Ezekiel Santiago)
        chiefConcern: "Migraine",
        notes: "Recommended MRI and follow-up in 2 weeks."
    }
];

// Functions to simulate DB queries
export const AppointmentDB = {
    getAll: () => appointmentData,
    getById: (id) => appointmentData.find(a => a.id === id),
    getByPatientId: (patientId) => appointmentData.filter(a => a.patientId === patientId),
    getByPhysicianId: (physicianId) => appointmentData.filter(a => a.physicianId === physicianId),
    add: (newAppointment) => {
        const newId = appointmentData.length > 0 ? appointmentData[appointmentData.length - 1].id + 1 : 1;
        const appointment = { id: newId, ...newAppointment };
        appointmentData.push(appointment);
        return appointment;
    },
    update: (id, newData) => {
        const index = appointmentData.findIndex(a => a.id === id);
        if (index !== -1) {
            appointmentData[index] = { ...appointmentData[index], ...newData };
            return true;
        }
        return false;
    },
    delete: (id) => {
        const index = appointmentData.findIndex(a => a.id === id);
        if (index !== -1) {
            appointmentData.splice(index, 1);
            return true;
        }
        return false;
    }
};