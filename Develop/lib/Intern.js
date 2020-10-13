// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// import Employee class
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

  // getSchool/getRole functions that returns the school name and Intern string
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
