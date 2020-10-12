// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // getName fucntion that returns name
  getName() {
    return this.name;
  }

  // getId function that returns id
  getId() {
    return this.id;
  }

  // getEmail function that returns email
  getEmail() {
    return this.email;
  }

  // getRole function that returns string Employee
  getRole() {
    return "Employee";
  }
}

// export Employee class
module.exports = Employee;