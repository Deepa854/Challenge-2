# Front-end development(problem statment)

Frontend Job Challenge Vanilla JS


Write a JavaScript function to calculate the total marks of each student and add that marks in the object for each student. 
Print the final array of objects to the console.
Print only the names of all the students whose total marks is above 445.


const studentsMarks = [
  { name: "Preethi", rollNo: 301, chemistry: 78, maths: 88, commerce: 90, physicalEducation: 90 },
  { name: "Priya", rollNo: 302, chemistry: 75, maths: 90, commerce: 85, physicalEducation: 94 },
  { name: "Jaya", rollNo: 303, chemistry: 82, maths: 95, commerce: 88, physicalEducation: 92 },
  { name: "Prema", rollNo: 304, chemistry: 85, maths: 96, commerce: 91, physicalEducation: 99 },
  { name: "Shreetama", rollNo: 305, chemistry: 83, maths: 92, commerce: 89, physicalEducation: 91 }
];
​
Write a JavaScript function that calculates and prints the following based on the provided appData.
the average of rating
the total downloads
const appData = [
  { appName: "App 1", rating: 4, downloads: 5000 },
  { appName: "App 2", rating: 4, downloads: 8000 },
  { appName: "App 3", rating: 5, downloads: 12000 },
  { appName: "App 4", rating: 2, downloads: 3000 },
  { appName: "App 5", rating: 5, downloads: 6000 }
];
​
Write a JavaScript function to calculate these things and print them to console based on the given data:
Total Average of Chemistry
Total Average of Maths

Total Average of Commerce
const studentsData = [
   { name: "Rahul", rollNo: 201, chemistry: 88, maths: 78, commerce: 92, physicalEducation: 90, moralScience: 85, totalMarks: 433, avgMarks: 86.6 },
   { name: "Priya", rollNo: 202, chemistry: 75, maths: 90, commerce: 85, physicalEducation: 94, moralScience: 88, totalMarks: 432, avgMarks: 86.4 },
  { name: "Amit", rollNo: 203, chemistry: 82, maths: 95, commerce: 88, physicalEducation: 92, moralScience: 90, totalMarks: 447, avgMarks: 89.4 },
  { name: "Neha", rollNo: 204, chemistry: 95, maths: 96, commerce: 94, physicalEducation: 99, moralScience: 99, totalMarks: 483, avgMarks: 96.6 },
  { name: "Anita", rollNo: 205, chemistry: 85, maths: 92, commerce: 89, physicalEducation: 91, moralScience: 86, totalMarks: 443, avgMarks: 88.6 }
];
​
Write a JavaScript function to calculate and print the following details:
Print the app name, downloads, category and rating of the app with the highest rating.
Print the average user age.
Print the details of medicine app which has more than 10000 downloads.

const appsData = [
  { appName: "App 1", rating: 4.2, minUserAge: 12, downloads: 4000, category: "games" },
  { appName: "App 2", rating: 4.5, minUserAge: 18, downloads: 9000, category: "education" },
  { appName: "App 3", rating: 4.7, minUserAge: 10, downloads: 11000, category: "medicine" },
  { appName: "App 4", rating: 3.1, minUserAge: 18, downloads: 4000, category: "medicine" },
  { appName: "App 5", rating: 4.3, minUserAge: 18, downloads: 7000, category: "fitness" }
];
​
Given the project details of a particular quarter of a company. Write a JavaScript function to calculate and print the following details:
print the average team size
print the total budget of the quarter

const projectDetails = [
  { projectName: "Project A", teamSize: 8, budget: 120000 },
  { projectName: "Project B", teamSize: 12, budget: 180000 },
  { projectName: "Project C", teamSize: 6, budget: 90000 },
  { projectName: "Project D", teamSize: 10, budget: 150000 },
  { projectName: "Project E", teamSize: 15, budget: 200000}
];
​
Given the employee details of a company. Write a JavaScript function to calculate and print the following details:
print the average age of the employees in the company
print the details of the employee with maximum experience

const employeeData = [
  { employeeName: "John Doe", age: 35, department: "HR", experience: 7 },
  { employeeName: "Jane Smith", age: 42, department: "Finance", experience: 12 },
  { employeeName: "Michael Johnson", age: 30, department: "IT", experience: 5 },
  { employeeName: "Emily Williams", age: 45, department: "Sales", experience: 15 },
  { employeeName: "David Brown", age: 38, department: "Marketing", experience: 9 }
];
​
Given the customer details of a state. Write a JavaScript function to calculate and print the following details:
print the total number of purchases made from city “A”.
print the average age of the customers of the state.
print the total number of purchases made from city “D” and “C”.
print the average age of customers of city “D”.

const customerData = [
  { customerName: "Alice", age: 28, address: "123 Street", city: "A", totalPurchases: 5 },
  { customerName: "Bob", age: 35, address: "456 Avenue", city: "D", totalPurchases: 8 },
  { customerName: "Charlie", age: 40, address: "789 Road", city: "C", totalPurchases: 12 },
  { customerName: "Daisy", age: 32, address: "111 Lane", city: "D", totalPurchases: 6 },
  { customerName: "Emily", age: 45, address: "222 Boulevard", city: "A", totalPurchases: 10 },
	{ customerName: "Charmie", age: 37, address: "113 Lane", city: "D", totalPurchases: 10 },
];
​
Given the sales data of various products. Write a JavaScript function to calculate and print the following details:
print the details of the products which have made a revenue of more than 19000.
print the overall total number of units sold for the products that made a revenue of more than 15000.
const salesData = [
  { product: "Product A", unitsSold: 120, revenue: 15000 },
  { product: "Product B", unitsSold: 180, revenue: 20000 },
  { product: "Product C", unitsSold: 90, revenue: 12000 },
  { product: "Product D", unitsSold: 150, revenue: 18000 },
  { product: "Product E", unitsSold: 200, revenue: 25000 }
];
​
Given the customer details of a state. Write a JavaScript function to calculate and print the following details:
Print the total number of purchases made from city “Z”.
Calculate and print the average age of the customers in the state.
Print the total number of purchases made from city “X” and “Y”.
Calculate and print the average age of customers residing in city “X” and “Y”.

const customerData = [
  { customerName: "Eva", age: 31, address: "789 Lane", city: "X", totalPurchases: 7 },
  { customerName: "Frank", age: 29, address: "456 Street", city: "Z", totalPurchases: 8 },
  { customerName: "Grace", age: 38, address: "123 Avenue", city: "Y", totalPurchases: 12 },
  { customerName: "Henry", age: 35, address: "222 Road", city: "X", totalPurchases: 6 },
  { customerName: "Isabel", age: 42, address: "111 Boulevard", city: "Y", totalPurchases: 10 },
  { customerName: "Jack", age: 33, address: "333 Drive", city: "Z", totalPurchases: 10 },
];
​
Given the employee details of a company. Write a JavaScript function to calculate and print the following details:
Print the total number of projects in progress by employees from the "Marketing" department.
Print the total number of projects completed by employees from the "Marketing" and "Sales" departments.
Calculate and print the average age of employees working in the "Sales" department.

const employeeData = [
  { employeeName: "Alex", age: 28, department: "Development", projectsCompleted: 5, projectsInProgress: 3 },
  { employeeName: "Beth", age: 35, department: "Marketing", projectsCompleted: 8, projectsInProgress: 5 },
  { employeeName: "Charlie", age: 40, department: "Sales", projectsCompleted: 12, projectsInProgress: 4 },
  { employeeName: "David", age: 32, department: "Development", projectsCompleted: 6, projectsInProgress: 13 },
  { employeeName: "Emily", age: 45, department: "Sales", projectsCompleted: 10, projectsInProgress: 3 },
  { employeeName: "Frank", age: 37, department: "Marketing", projectsCompleted: 10, projectsInProgress: 5 },
];
