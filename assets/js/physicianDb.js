// Mock pre-made database of physicians
const initialPhysicianData = [
  {
    id: 1,
    username: "boss_algs",
    password: "123",
    name: "Dr. Joshua Algarra",
    specialty: "Cardiology",
    image: "../img/dr_algarra.png",
    bio: "Board-certified cardiologist with 10+ years of experience.",
    contact: "0967-420-6969",
    schedule: {
      Monday: { available: true, hours: { start: "09:00", end: "17:00" } },
      Tuesday: { available: false, hours: null },
      Wednesday: { available: true, hours: { start: "08:00", end: "16:00" } },
      Thursday: { available: true, hours: { start: "10:00", end: "18:00" } },
      Friday: { available: true, hours: { start: "09:00", end: "15:00" } },
    },
  },
  {
    id: 2,
    username: "onobs",
    password: "123",
    name: "Dr. Bono Macariola",
    specialty: "Pediatrics",
    image: "../img/dr_macariola.png",
    bio: "Pediatrician specializing in child development.",
    contact: "0967-420-6969",
    schedule: {
      Monday: { available: true, hours: { start: "09:00", end: "17:00" } },
      Tuesday: { available: true, hours: { start: "08:00", end: "16:00" } },
      Wednesday: { available: false, hours: null },
      Thursday: { available: true, hours: { start: "10:00", end: "18:00" } },
      Friday: { available: true, hours: { start: "09:00", end: "15:00" } },
    },
  },
  {
    id: 3,
    username: "123",
    password: "123",
    name: "Dr. Ezekiel Santiago",
    specialty: "Neurology",
    image: "../img/dr_santiago.png",
    bio: "Neurologist focusing on migraine treatment.",
    contact: "0967-420-6969",
    schedule: {
      Monday: { available: true, hours: { start: "09:00", end: "17:00" } },
      Tuesday: { available: false, hours: null },
      Wednesday: { available: true, hours: { start: "08:00", end: "16:00" } },
      Thursday: { available: true, hours: { start: "09:00", end: "17:00" } },
      Friday: { available: false, hours: null },
    },
  },
];

// initialize localstorage with pre-made data
export const initializePhysiciansDb = () => {
  if (!localStorage.getItem("physicianData")) {
    localStorage.setItem("physicianData", JSON.stringify(initialPhysicianData));
  }
};

// get and set functions
const getPhysicianData = () =>
  JSON.parse(localStorage.getItem("physicianData"));
const savePhysicianData = (data) =>
  localStorage.setItem("physicianData", JSON.stringify(data));

// Functions to simulate DB queries
export const PhysicianDB = {
  getAll: () => getPhysicianData(),
  getById: (id) => getPhysicianData().find((p) => p.id === id),
  update: (id, newData) => {
    const data = getPhysicianData();
    const index = data.findIndex((p) => p.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...newData };
      savePhysicianData(data);
      return true;
    }
    return false;
  },
};
