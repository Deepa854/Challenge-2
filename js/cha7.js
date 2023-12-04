function calculateCustomerDetails(customerData) {
    const totalPurchasesCityA =
    customerData.filter(customer => customer.city === 'A').reduce((total, customer) => total + customer.totalPurchases, 0);
    console.log("Total Purchases from City A:", totalPurchasesCityA);
  
    
    const averageAge = customerData.reduce((sum, customer) => sum + customer.age, 0) / customerData.length;
    console.log("Average Age of Customers in the State:", averageAge.toFixed(2));
  
    
    const totalPurchasesCityD = customerData.filter(customer => customer.city === 'D').reduce((total, customer) => total + customer.totalPurchases, 0);
    const totalPurchasesCityC = customerData.filter(customer => customer.city === 'C').reduce((total, customer)=> total + customer.totalPurchases, 0);
    console.log("Total Purchases from City D:", totalPurchasesCityD);
    console.log("Total Purchases from City C:", totalPurchasesCityC);
  
    
    const customersCityD = customerData.filter(customer => customer.city === 'D');
    const averageAgeCityD = customersCityD.length > 0 ?
     customersCityD.reduce((sum, customer) => sum + customer.age, 0) / customersCityD.length : 0;
    console.log("Average Age of Customers in City D:", averageAgeCityD.toFixed(2));
  }
  
  
  var customerData = [
    { customerName: "Alice", age: 28, address: "123 Street", city: "A", totalPurchases: 5 },
    { customerName: "Bob", age: 35, address: "456 Avenue", city: "D", totalPurchases: 8 },
    { customerName: "Charlie", age: 40, address: "789 Road", city: "C", totalPurchases: 12 },
    { customerName: "Daisy", age: 32, address: "111 Lane", city: "D", totalPurchases: 6 },
    { customerName: "Emily", age: 45, address: "222 Boulevard", city: "A", totalPurchases: 10 },
    { customerName: "Charmie", age: 37, address: "113 Lane", city: "D", totalPurchases: 10 },
    
  ];
  
  calculateCustomerDetails(customerData);
  