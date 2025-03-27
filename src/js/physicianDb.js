// Mock database of physicians
export const physicianData = [
    {
      id: 1,
      username: "boss_algs",
      password: "123",
      name: "Dr. Joshua Algarra",
      specialty: "Cardiology",
      image: "",
      bio: "Board-certified cardiologist with 10+ years of experience.",
      schedule: {
            Monday: { available: true, hours: { start: "09:00", end: "17:00" } },
            Tuesday: { available: false, hours: null },
            Wednesday: { available: true, hours: { start: "08:00", end: "16:00" } },
            Thursday: { available: true, hours: { start: "10:00", end: "18:00" } },
            Friday: { available: true, hours: { start: "09:00", end: "15:00" } }
        }
    },
    {
      id: 2,
      username: "onobs",
      password: "123",
      name: "Dr. Bono Macariola",
      specialty: "Pediatrics",
      image: "",
      bio: "Pediatrician specializing in child development.",
      schedule: {
            Monday: { available: true, hours: { start: "09:00", end: "17:00" } },
            Tuesday: { available: true, hours: { start: "08:00", end: "16:00" } },
            Wednesday: { available: false, hours: null },
            Thursday: { available: true, hours: { start: "10:00", end: "18:00" } },
            Friday: { available: true, hours: { start: "09:00", end: "15:00" } }
        }
    },
    {
      id: 3,
      username: "123",
      password: "123",
      name: "Dr. Ezekiel Santiago",
      specialty: "Neurology",
      image: "",
      bio: "Neurologist focusing on migraine treatment.",
      schedule: {
            Monday: { available: true, hours: { start: "09:00", end: "17:00" } },
            Tuesday: { available: false, hours: null },
            Wednesday: { available: true, hours: { start: "08:00", end: "16:00" } },
            Thursday: { available: true, hours: { start: "09:00", end: "17:00" } },
            Friday: { available: false, hours: null }
        }
    }
];
  
// functions to simulate DB queries
export const PhysicianDB = {
getAll: () => physicianData,
getById: (id) => physicianData.find(p => p.id === id),
update: (id, newData) => {
    const index = physicianData.findIndex(p => p.id === id);
    if (index !== -1) {
        physicianData[index] = { ...physicianData[index], ...newData };
    return true;
    }
    return false;
},
};
