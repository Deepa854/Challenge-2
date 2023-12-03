// Function to calculate and print employee details
function calculateEmployeeDetails(employeeData) {
    // 1. Total number of projects in progress by employees from the "Marketing" department
    const projectsInProgressMarketing = employeeData
      .filter(employee => employee.department === 'Marketing')
      .reduce((total, employee) => total + employee.projectsInProgress, 0);
    console.log("Total Projects in Progress by Marketing Employees:", projectsInProgressMarketing);
  
    // 2. Total number of projects completed by employees from the "Marketing" and "Sales" departments
    const projectsCompletedMarketing = employeeData
      .filter(employee => employee.department === 'Marketing')
      .reduce((total, employee) => total + employee.projectsCompleted, 0);
    const projectsCompletedSales = employeeData
      .filter(employee => employee.department === 'Sales')
      .reduce((total, employee) => total + employee.projectsCompleted, 0);
    console.log("Total Projects Completed by Marketing Employees:", projectsCompletedMarketing);
    console.log("Total Projects Completed by Sales Employees:", projectsCompletedSales);
  
    // 3. Average age of employees working in the "Sales" department
    const employeesSales = employeeData.filter(employee => employee.department === 'Sales');
    const averageAgeSales = employeesSales.length > 0 ? employeesSales.reduce((sum, employee)=> sum + employee.age, 0) / employeesSales.length : 0;
    console.log("Average Age of Employees in the Sales Department:", averageAgeSales.toFixed(2));
  }
   // Example usage
  var employeeData = [
    { employeeName: "Alex", age: 28, department: "Development", projectsCompleted: 5, projectsInProgress: 3 },
    { employeeName: "Beth", age: 35, department: "Marketing", projectsCompleted: 8, projectsInProgress: 5 },
    { employeeName: "Charlie", age: 40, department: "Sales", projectsCompleted: 12, projectsInProgress: 4 },
    { employeeName: "David", age: 32, department: "Development", projectsCompleted: 6, projectsInProgress: 13 },
    { employeeName: "Emily", age: 45, department: "Sales", projectsCompleted: 10, projectsInProgress: 3 },
    { employeeName: "Frank", age: 37, department: "Marketing", projectsCompleted: 10, projectsInProgress: 5 },
  ];
  
  calculateEmployeeDetails(employeeData);
  