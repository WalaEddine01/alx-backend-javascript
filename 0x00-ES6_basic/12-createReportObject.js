export default function createReportObject(employeesList) {
    const obj = {};
    const allEmployees = {};

    for (const employee of employeesList) {
        allEmployees[employee.departmentName] = employee.employees;
   
}