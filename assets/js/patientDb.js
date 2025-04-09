// Mock database of patients
const initialPatientData = [
  {
    id: 1,
    name: {
      first: "Jose Miguel",
      middle: "F",
      last: "Custodio",
    },
    birthdate: "2025-04-10",
    sex: "male",
    address: "de lozolle",
    mobile: "0967-276-7929",
    email: "sir_custodio@example.com",
  },
  {
    id: 2,
    name: {
      first: "Bob",
      middle: "R",
      last: "Johnson",
    },
    birthdate: "1990-03-25",
    sex: "male",
    address: "456 Pine Rd",
    mobile: "0967-276-7929",
    email: "bob@example.com",
  },
  {
    id: 3,
    name: {
      first: "Charlie",
      middle: "S",
      last: "Brown",
    },
    birthdate: "1985-07-14",
    sex: "male",
    address: "789 Maple Ave",
    mobile: "0967-276-7929",
    email: "charlie@example.com",
  },
];

// init with pre-made data
export const initializePatientsDb = () => {
  if (!localStorage.getItem("patientData")) {
    localStorage.setItem("patientData", JSON.stringify(initialPatientData));
  }
};

// get and set functions
const getPatientData = () => JSON.parse(localStorage.getItem("patientData"));
const savePatientData = (data) =>
  localStorage.setItem("patientData", JSON.stringify(data));

// Functions to simulate DB queries
export const PatientDB = {
  getAll: () => getPatientData(),
  getById: (id) => getPatientData().find((p) => p.id === id),
  update: (id, newData) => {
    const data = getPatientData();
    const index = data.findIndex((p) => p.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...newData };
      savePatientData(data);
      return true;
    }
    return false;
  },
  add: (newPatient) => {
    const data = getPatientData();
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const patient = { id: newId, ...newPatient };
    data.push(patient);
    savePatientData(data);
    return patient;
  },
  delete: (id) => {
    const data = getPatientData();
    const index = data.findIndex((p) => p.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      savePatientData(data);
      return true;
    }
    return false;
  },
};
