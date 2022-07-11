/* Create a function that will receive two collections of employees and adds the items of the second collection to the first collection. Use push method  */

let collection1 = [
  {
    firstName: "Arabela",
    lastName: "Fockes",
    email: "afockes0@wired.com",
    salary: "$6.18",
    isEngineer: true,
    gender: "Female"
  },
  {
    firstName: "Bryant",
    lastName: "Marchi",
    email: "bmarchi1@theatlantic.com",
    salary: "$8.05",
    isEngineer: false,
    gender: "Male"
  },
  {
    firstName: "Batholomew",
    lastName: "Eim",
    email: "beim2@goodreads.com",
    salary: "$7.26",
    isEngineer: true,
    gender: "Male"
  }
];

let collection2 = [
  {
    firstName: "Ritchie",
    lastName: "Ferreira",
    email: "rferreira3@booking.com",
    salary: "$4.07",
    isEngineer: true,
    gender: "Male"
  },
  {
    firstName: "Kaylyn",
    lastName: "Ivain",
    email: "kivain4@gmpg.org",
    salary: "$5.89",
    isEngineer: false,
    gender: "Female"
  },
  {
    firstName: "Wilhelmina",
    lastName: "Portigall",
    email: "wportigall5@plala.or.jp",
    salary: "$2.06",
    isEngineer: false,
    gender: "Female"
  },
  {
    firstName: "Rouvin",
    lastName: "Gillcrist",
    email: "rgillcrist6@aol.com",
    salary: "$7.29",
    isEngineer: true,
    gender: "Male"
  },
  {
    firstName: "Flemming",
    lastName: "Scroggins",
    email: "fscroggins7@msu.edu",
    salary: "$7.54",
    isEngineer: false,
    gender: "Male"
  },
  {
    firstName: "Sallee",
    lastName: "Schlagh",
    email: "sschlagh8@reuters.com",
    salary: "$2.24",
    isEngineer: false,
    gender: "Female"
  },
  {
    firstName: "Roxine",
    lastName: "Bedo",
    email: "rbedo9@whitehouse.gov",
    salary: "$6.47",
    isEngineer: false,
    gender: "Female"
  }
];

function getEmployees(collection1, collection2) {
  for (let employee of collection2) {
    collection1.push(employee);
  }
  return collection1;
}

console.log(getEmployees(collection1, collection2));
