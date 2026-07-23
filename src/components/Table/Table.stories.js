import { fn } from 'storybook/test';
import Table from './Table';

//#region sample data
const people = [
  {
    name: "Arthur",
    age: 24,
    city: "Namur",
    job: "Développeur",
    salary: 3200,
    active: true,
    country: "Belgique",
    email: "arthur@example.com"
  },
  {
    name: "Charlie",
    age: 22,
    city: "Charleroi",
    job: "Étudiant",
    salary: 900,
    active: true,
    country: "Belgique",
    email: "charlie@example.com"
  },
  {
    name: "Romeo",
    age: 19,
    city: "Milan",
    job: "Designer",
    salary: 2400,
    active: false,
    country: "Italie",
    email: "romeo@example.com"
  },
  {
    name: "Enrique",
    age: 32,
    city: "Barcelone",
    job: "Architecte",
    salary: 4100,
    active: true,
    country: "Espagne",
    email: "enrique@example.com"
  },
  {
    name: "Alice",
    age: 25,
    city: "Paris",
    job: "Infirmière",
    salary: 2800,
    active: true,
    country: "France",
    email: "alice@example.com"
  },
  {
    name: "François",
    age: 34,
    city: "Lyon",
    job: "Professeur",
    salary: 3500,
    active: false,
    country: "France",
    email: "francois@example.com"
  },
  {
    name: "Bob",
    age: 30,
    city: "Londres",
    job: "Ingénieur",
    salary: 4800,
    active: true,
    country: "Royaume-Uni",
    email: "bob@example.com"
  },
  {
    name: "Sophie",
    age: 28,
    city: "Bruxelles",
    job: "Comptable",
    salary: 3100,
    active: true,
    country: "Belgique",
    email: "sophie@example.com"
  },
  {
    name: "Lucas",
    age: 27,
    city: "Berlin",
    job: "Développeur",
    salary: 4200,
    active: true,
    country: "Allemagne",
    email: "lucas@example.com"
  },
  {
    name: "Emma",
    age: 31,
    city: "Amsterdam",
    job: "Chef de projet",
    salary: 4500,
    active: false,
    country: "Pays-Bas",
    email: "emma@example.com"
  },
  {
    name: "Nathan",
    age: 23,
    city: "Liège",
    job: "Technicien",
    salary: 2500,
    active: true,
    country: "Belgique",
    email: "nathan@example.com"
  },
  {
    name: "Camille",
    age: 29,
    city: "Marseille",
    job: "Graphiste",
    salary: 2900,
    active: true,
    country: "France",
    email: "camille@example.com"
  },
  {
    name: "Julien",
    age: 41,
    city: "Genève",
    job: "Médecin",
    salary: 7800,
    active: true,
    country: "Suisse",
    email: "julien@example.com"
  },
  {
    name: "Laura",
    age: 26,
    city: "Rome",
    job: "Journaliste",
    salary: 2600,
    active: false,
    country: "Italie",
    email: "laura@example.com"
  },
  {
    name: "Hugo",
    age: 36,
    city: "Luxembourg",
    job: "Banquier",
    salary: 6200,
    active: true,
    country: "Luxembourg",
    email: "hugo@example.com"
  },
  {
    name: "Sarah",
    age: 33,
    city: "Montréal",
    job: "Data Analyst",
    salary: 5100,
    active: true,
    country: "Canada",
    email: "sarah@example.com"
  },
  {
    name: "Thomas",
    age: 38,
    city: "Dublin",
    job: "Consultant",
    salary: 5600,
    active: false,
    country: "Irlande",
    email: "thomas@example.com"
  },
  {
    name: "Chloé",
    age: 21,
    city: "Toulouse",
    job: "Étudiante",
    salary: 850,
    active: true,
    country: "France",
    email: "chloe@example.com"
  }
];
//#endregion

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/arg-types
//   argTypes: {
//     rowsPerPage: {
//         type: 
//     }
//   },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple = {
  args: {
    items: people
  },
};

export const CustomColumns = {
  args: {
    items: people,
    columns: ["salary", "job", "city", "country", "name"]
  },
};

export const LimitRowsPerPage = {
  args: {
    items: people,
    rowsPerPage: 5
  },
};

export const Empty = {
  args: {
    items: []
  },
};
