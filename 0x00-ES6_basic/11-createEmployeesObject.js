export default function createEmployeesObject(departmentName, employees) {
  const obj = {
    [`${departmentName}`]: employees,
  };

  return obj;
}
