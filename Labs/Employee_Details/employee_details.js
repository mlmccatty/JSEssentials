const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000},
]

const totalEmployees = employees.map(displayEmployees(employee, index));
document.getElementById('employeeDetails').innerHTML = totalEmployees;

function displayEmployees(employee, index) {
    `<p> ${employee.id}: ${employee.name}: ${employee.age}: ${employee.department} - ${employee.salary} </p>`.join('');
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}
 
function displayHREmployees() { 
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p> ${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary} </p>`).join();
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId); 
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p> ${foundEmployee.id} ${foundEmployee.name} - ${foundEmployee.age} - ${foundEmployee.department} - ${foundEmployee.salary} </p>`.join('');
    }
    else {
        document.getElementById('employeesDetails').innerHTML = `<p> No employee has been found with this ID. </p>`
    }
}