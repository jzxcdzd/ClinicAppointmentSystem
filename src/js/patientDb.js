// Mock database of patients
export const patientData = [
    {
        id: 1,
        name: {
            first: "Alice",
            middle: "Q",
            last: "Smith"
        },
        birthdate: "1998-10-12",
        sex: "female",
        address: "123 Oak St",
        mobile: "555-1234",
        email: "alice@example.com"
    },
    {
        id: 2,
        name: {
            first: "Bob",
            middle: "R",
            last: "Johnson"
        },
        birthdate: "1990-03-25",
        sex: "male",
        address: "456 Pine Rd",
        mobile: "555-5678",
        email: "bob@example.com"
    },
    {
        id: 3,
        name: {
            first: "Charlie",
            middle: "S",
            last: "Brown"
        },
        birthdate: "1985-07-14",
        sex: "male",
        address: "789 Maple Ave",
        mobile: "555-9012",
        email: "charlie@example.com"
    }
];

// Functions to simulate DB queries
export const PatientDB = {
    getAll: () => patientData,
    getById: (id) => patientData.find(p => p.id === id),
    update: (id, newData) => {
        const index = patientData.findIndex(p => p.id === id);
        if (index !== -1) {
            patientData[index] = { ...patientData[index], ...newData };
            return true;
        }
        return false;
    },
    add: (newPatient) => {
        const newId = patientData.length > 0 ? patientData[patientData.length - 1].id + 1 : 1;
        const patient = { id: newId, ...newPatient };
        patientData.push(patient);
        return patient;
    },
    delete: (id) => {
        const index = patientData.findIndex(p => p.id === id);
        if (index !== -1) {
            patientData.splice(index, 1);
            return true;
        }
        return false;
    }
};