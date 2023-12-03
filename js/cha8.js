// Function to calculate and print sales details
    function calculateSalesDetails(salesData) {
    // 1. Details of products with revenue more than 19000
    const highRevenueProducts = salesData.filter(product => product.revenue > 19000);
    console.log("Details of Products with Revenue More Than 19000:", highRevenueProducts);
  
    // 2. Overall total number of units sold for products that made a revenue of more than 15000
    const totalUnitsSold = salesData
      .filter(product => product.revenue > 15000)
      .reduce((total, product) => total + product.unitsSold, 0);
    console.log("Overall Total Number of Units Sold for Products with Revenue More Than 15000:", totalUnitsSold);
  }
  
  // Example usage
  const salesData = [
    { product: "Product A", unitsSold: 120, revenue: 15000 },
    { product: "Product B", unitsSold: 180, revenue: 20000 },
    { product: "Product C", unitsSold: 90, revenue: 12000 },
    { product: "Product D", unitsSold: 150, revenue: 18000 },
    { product: "Product E", unitsSold: 200, revenue: 25000 }
  ];
  
  calculateSalesDetails(salesData);
  