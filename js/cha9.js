// Function to calculate and print customer details
function calculateCustomerDetails(customerData) {
    // 1. Total number of purchases made from city “Z”
    const totalPurchasesCityZ = customerData
      .filter(customer => customer.city === 'Z')
      .reduce((total, customer) => total + customer.totalPurchases, 0);
    console.log("Total Purchases from City Z:", totalPurchasesCityZ);
  
    // 2. Average age of the customers in the state
    const averageAge = customerData.reduce((sum, customer) => sum + customer.age, 0) / customerData.length;
    console.log("Average Age of Customers in the State:", averageAge.toFixed(2));
  
    // 3. Total number of purchases made from city “X” and “Y”
    const totalPurchasesCityX = customerData
      .filter(customer => customer.city === 'X')
      .reduce((total, customer) => total + customer.totalPurchases, 0);
    const totalPurchasesCityY = customerData
      .filter(customer => customer.city === 'Y')
      .reduce((total, customer) => total + customer.totalPurchases, 0);
    console.log("Total Purchases from City X:", totalPurchasesCityX);
    console.log("Total Purchases from City Y:", totalPurchasesCityY);
  
    // 4. Average age of customers residing in city “X” and “Y”
    const customersCityX = customerData.filter(customer => customer.city === 'X');
    const customersCityY = customerData.filter(customer => customer.city === 'Y');
    const averageAgeCityX = customersCityX.length > 0 ?
         customersCityX.reduce((sum, customer) => sum + customer.age, 0) / customersCityX.length : 0;

    const averageAgeCityY = customersCityY.length > 0 ? 
        customersCityY.reduce((sum, customer) => sum + customer.age, 0) / customersCityY.length : 0;
        
    console.log("Average Age of Customers in City X:", averageAgeCityX.toFixed(2));
    console.log("Average Age of Customers in City Y:", averageAgeCityY.toFixed(2));
  }
  
  // Example usage
  var customerData = [
    { customerName: "Eva", age: 31, address: "789 Lane", city: "X", totalPurchases: 7 },
    { customerName: "Frank", age: 29, address: "456 Street", city: "Z", totalPurchases: 8 },
    { customerName: "Grace", age: 38, address: "123 Avenue", city: "Y", totalPurchases: 12 },
    { customerName: "Henry", age: 35, address: "222 Road", city: "X", totalPurchases: 6 },
    { customerName: "Isabel", age: 42, address: "111 Boulevard", city: "Y", totalPurchases: 10 },
    { customerName: "Jack", age: 33, address: "333 Drive", city: "Z", totalPurchases: 10 },
  ];
  
  calculateCustomerDetails(customerData);
  