// Function to calculate and print customer details
function calculateCustomerDetails(customerData) {
    // 1. Total number of purchases made from city “A”
    const totalPurchasesCityA =
customerData.filter(customer => customer.city === 'A').reduce((total, customer) => total + customer.totalPurchases, 0);
    console.log("Total Purchases from City A:", totalPurchasesCityA);
  
    // 2. Average age of the customers of the state
    const averageAge = customerData.reduce((sum, customer) => sum + customer.age, 0) / customerData.length;
    console.log("Average Age of Customers in the State:", averageAge.toFixed(2));
  
    // 3. Total number of purchases made from city “D” and “C”
    const totalPurchasesCityD = customerData.filter(customer => customer.city === 'D').reduce((total, customer) => total + customer.totalPurchases, 0);
    const totalPurchasesCityC = customerData.filter(customer => customer.city === 'C').reduce((total, customer)=> total + customer.totalPurchases, 0);
    console.log("Total Purchases from City D:", totalPurchasesCityD);
    console.log("Total Purchases from City C:", totalPurchasesCityC);
  
    // 4. Average age of customers of city “D”
    const customersCityD = customerData.filter(customer => customer.city === 'D');
    const averageAgeCityD = customersCityD.length > 0 ?
     customersCityD.reduce((sum, customer) => sum + customer.age, 0) / customersCityD.length : 0;
    console.log("Average Age of Customers in City D:", averageAgeCityD.toFixed(2));
  }
  
  // Example usage
  var customerData = [
    { customerName: "Alice", age: 28, address: "123 Street", city: "A", totalPurchases: 5 },
    { customerName: "Bob", age: 35, address: "456 Avenue", city: "D", totalPurchases: 8 },
    { customerName: "Charlie", age: 40, address: "789 Road", city: "C", totalPurchases: 12 },
    { customerName: "Daisy", age: 32, address: "111 Lane", city: "D", totalPurchases: 6 },
    { customerName: "Emily", age: 45, address: "222 Boulevard", city: "A", totalPurchases: 10 },
    { customerName: "Charmie", age: 37, address: "113 Lane", city: "D", totalPurchases: 10 },
    
  ];
  
  calculateCustomerDetails(customerData);
  