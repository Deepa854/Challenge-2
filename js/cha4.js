function findHighestRatedApp(appsData) {
    const highestRatedApp = appsData.reduce((maxApp, app) => (app.rating > maxApp.rating ? app : maxApp), appsData[0]);
    console.log("Details of App with Highest Rating:", highestRatedApp);
  }
  
  function calculateAverageUserAge(appsData) {
    const totalAge = appsData.reduce((sum, app) => sum + app.minUserAge, 0);
    const averageAge = totalAge / appsData.length;
    console.log("Average User Age:", averageAge.toFixed(2));
  }
  
  function findMedicineAppWithHighDownloads(appsData) {
    const medicineApp = appsData.find(app => app.category === "medicine" && app.downloads > 10000);
    console.log("Details of Medicine App with More Than 10000 Downloads:", medicineApp);
  }
  
  const appsData = [
    { appName: "App 1", rating: 4.2, minUserAge: 12, downloads: 4000, category: "games" },
  { appName: "App 2", rating: 4.5, minUserAge: 18, downloads: 9000, category: "education" },
  { appName: "App 3", rating: 4.7, minUserAge: 10, downloads: 11000, category: "medicine" },
  { appName: "App 4", rating: 3.1, minUserAge: 18, downloads: 4000, category: "medicine" },
  { appName: "App 5", rating: 4.3, minUserAge: 18, downloads: 7000, category: "fitness" }
  ];
  
  findHighestRatedApp(appsData);
  calculateAverageUserAge(appsData);
  findMedicineAppWithHighDownloads(appsData);
  