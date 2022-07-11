/* Create a function that is receiving a collection of employees and using toString() returns a string with comma-separated `email:salary` with the following format 
hloyley5@uol.com.br: $1368.00, ldoige2@mashable.com $1873.5  */

const employees = [
  {
    firstName: "Porty",
    lastName: "Simoni",
    email: "psimoni0@opensource.org",
    salary: "$1762.39"
  },
  {
    firstName: "Roderick",
    lastName: "MacPeake",
    email: "rmacpeake1@people.com.cn",
    salary: "$1152.05"
  },
  {
    firstName: "Lina",
    lastName: "Doige",
    email: "ldoige2@mashable.com",
    salary: "$1010.70"
  },
  {
    firstName: "Zarah",
    lastName: "Kindread",
    email: "zkindread3@barnesandnoble.com",
    salary: "$1171.28"
  },
  {
    firstName: "Theda",
    lastName: "Drinkhall",
    email: "tdrinkhall4@japanpost.jp",
    salary: "$1873.56"
  },
  {
    firstName: "Hewie",
    lastName: "Loyley",
    email: "hloyley5@uol.com.br",
    salary: "$1695.93"
  },
  {
    firstName: "Carma",
    lastName: "McTavish",
    email: "cmctavish6@nytimes.com",
    salary: "$1368.00"
  }
];

function getEmailAndSalary(arr) {
  let information = arr.reduce((result, person) => {
    let info = `${person.email}: ${person.salary}`;
    result.push(info);
    return result;
  }, []);
  return information.toString();
}

console.log(getEmailAndSalary(employees));
