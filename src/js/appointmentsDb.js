// Mock database of appointments
const initialAppointmentData = [
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
        patientId: 1, // Reference to patientData (Bob)
        physicianId: 1, // Reference to physicianData (Dr. Joshua Algarra)
        chiefConcern: "Chest pain",
        notes: "Scheduled for ECG and blood tests."
    },
    {
        id: 3,
        date: "2025-04-12",
        time: "09:00",
        patientId: 1, // Reference to patientData (Charlie)
        physicianId: 1, // Reference to physicianData (Dr. Ezekiel Santiago)
        chiefConcern: "Migraine",
        notes: "Recommended MRI and follow-up in 2 weeks."
    }
];

// Initialize localStorage with initial data if not already set
export const initializeAppointmentsDb = () => {
    if (!localStorage.getItem('appointmentData')) {
        localStorage.setItem('appointmentData', JSON.stringify(initialAppointmentData));
    }
};

// Helper functions to interact with localStorage
const getAppointmentData = () => JSON.parse(localStorage.getItem('appointmentData'));
const saveAppointmentData = (data) => localStorage.setItem('appointmentData', JSON.stringify(data));

// Functions to simulate DB queries
export const AppointmentDB = {
    getAll: () => getAppointmentData(),
    getById: (id) => getAppointmentData().find(a => a.id === id),
    getByPatientId: (patientId) => getAppointmentData().filter(a => a.patientId === patientId),
    getByPhysicianId: (physicianId) => getAppointmentData().filter(a => a.physicianId === physicianId),
    add: (newAppointment) => {
        const data = getAppointmentData();
        const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        const appointment = { id: newId, ...newAppointment };
        data.push(appointment);
        saveAppointmentData(data);
        return appointment;
    },
    update: (id, newData) => {
        const data = getAppointmentData();
        const index = data.findIndex(a => a.id === id);
        if (index !== -1) {
            data[index] = { ...data[index], ...newData };
            saveAppointmentData(data);
            return true;
        }
        return false;
    },
    delete: (id) => {
        const data = getAppointmentData();
        const index = data.findIndex(a => a.id === id);
        if (index !== -1) {
            data.splice(index, 1);
            saveAppointmentData(data);
            return true;
        }
        return false;
    }
};