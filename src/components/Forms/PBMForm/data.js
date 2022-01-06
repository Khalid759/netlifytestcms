export const formFields = [
  {
    id: "1",
    name: "name",
    placeholder: "Name*",
    required: true,
    tag: "input",
    type: "text",
    value: "",
  },

  {
    id: "2",
    name: "email",
    placeholder: "Email*",
    tag: "input",
    required: true,
    type: "email",
    value: "",
  },
  {
    id: "3",
    name: "phone",
    placeholder: "Phone*",
    tag: "input",
    required: true,
    type: "tel",
    value: "",
  },

  {
    id: "4",
    name: "applicant",
    placeholder: "What are you doing currently*",
    tag: "select",
    required: true,
    type: "tel",
    value: "",
    options: [
      "Studying",
      "Working",
      "Freelancer/Business Owner",
      "Looking for a Job (Fresher)",
      "Looking for a Job",
    ],

    group: {
      studying: {
        passYear: ["2021", "2022", "2023", "2024"],
        pursuing: ["Bachelors", "Masters", "Other"],
        course: ["MBA/PGDM", "B.E./B.Tech", "B.Com", "BA", "BBA", "Other"],
      },
    },
  },

  {
    id: "5",
    name: "marketing-experience",
    placeholder: "Do you have prior full-time marketing experience?*",
    tag: "radio",
    required: true,
    type: "tel",
    value: "",
    options: ["Yes", "No"],
  },

  {
    id: "6",
    name: "slot_screen",
    placeholder: "Choose your slot for Screening Test*",
    tag: "radio",
    required: true,
    type: "tel",
    value: "",
    options: ["Yes", "No"],
  },
]

export const data = [
  { id: "name", name: "" },
  { id: "phone", phone: "" },
  { id: "email", email: "" },
  { id: "lead_type", lead_type: "" },
  { id: "profession", profession: "" },
  { id: "pass_year", pass_year: "" },
  { id: "org", org: "" },
  { id: "desig", desig: "" },
  { id: "program", program: "Professional Brand Management" },
  { id: "preferredSlot", preferredSlot: "" },
]
