import mongoose from "mongoose";
import Designer from "../models/designer.model.js"; // Adjust path if needed


// mongoose.connect("mongodb://localhost:27017/your-db-name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

export const seedDesigners = async () => {
//   await Designer.deleteMany(); // Optional: clears previous entries

  await Designer.insertMany([
    {
      name: "Epic Designs",
      stars: 4,
      description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 57,
      years: 8,
      price: "$$",
      phone1: "984532853",
      phone2: "984532854",
      shortlisted: true,
    },
    {
      name: "Studio - D3",
      stars: 4,
      description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 43,
      years: 6,
      price: "$$$",
      phone1: "984532853",
      phone2: "984532854",
      shortlisted: false,
    },

    {
      name: "Yet Another Yepic",
      stars: 3,
      description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 22,
      years: 3,
      price: "$$$",
      phone1: "984532853",
      phone2: "984532854",
      shortlisted: false,
    },

    {
      name: "Super Studio",
      stars: 1,
      description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 3,
      years: 2,
      price: "$$$",
      phone1: "984532853",
      phone2: "984532854",
      shortlisted: false,
    },

    {
      name: "Cool Stud",
      stars: 5,
      description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 423,
      years: 26,
      price: "$$",
      phone1: "984532853",
      phone2: "984532854",
      shortlisted: true,
    },

    {
      name: "Studio - Z3",
      stars: 4,
      description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
      projects: 43,
      years: 6,
      price: "$$$",
      phone1: "984532853",
      phone2: "984532854",
      shortlisted: false,
    },
  ]);

  console.log("Designers seeded!");
//   mongoose.connection.close();
};

// seedDesigners();
