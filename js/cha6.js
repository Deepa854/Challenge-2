// Function to calculate and print average age and details of employee with maximum experience
function calculateEmployeeDetails(employeeData) {
    // Calculate average age
    const averageAge = employeeData.reduce((sum, employee) => sum + employee.age, 0) / employeeData.length;
  
    // Find employee with maximum experience
    const maxExperienceEmployee = employeeData.reduce((maxEmployee, employee) => 
    (employee.experience > maxEmployee.experience ? employee : maxEmployee), employeeData[0]);
  
    // Print results
    console.log("Average Age of Employees:", averageAge.toFixed(2));
    console.log("Details of Employee with Maximum Experience:", maxExperienceEmployee);
  }
  
  // Example usage
  var employeeData = [
    { employeeName: "John Doe", age: 35, department: "HR", experience: 7 },
    { employeeName: "Jane Smith", age: 42, department: "Finance", experience: 12 },
    { employeeName: "Michael Johnson", age: 30, department: "IT", experience: 5 },
    { employeeName: "Emily Williams", age: 45, department: "Sales", experience: 15 },
    { employeeName: "David Brown", age: 38, department: "Marketing", experience: 9 }
  ];
  
  calculateEmployeeDetails(employeeData);
  