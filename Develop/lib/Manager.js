// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// import Employee class
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

  // getOfficeNumber/getRole functions returns the office number and Manager role
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
