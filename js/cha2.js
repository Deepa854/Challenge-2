// Function to calculate average rating and total downloads
function calculateAppStats(appData) {
    const totalRatings = appData.reduce((sum, app) => sum + app.rating, 0);
    const averageRating = totalRatings / appData.length;
  
    const totalDownloads = appData.reduce((sum, app) => sum + app.downloads, 0);
  
    console.log("Average Rating:", averageRating.toFixed(2));
    console.log("Total Downloads:", totalDownloads);
  }
  
  // Example usage
  const appData = [
    { appName: "App 1", rating: 4, downloads: 5000 },
  { appName: "App 2", rating: 4, downloads: 8000 },
  { appName: "App 3", rating: 5, downloads: 12000 },
  { appName: "App 4", rating: 2, downloads: 3000 },
  { appName: "App 5", rating: 5, downloads: 6000 }
  ];
  
  calculateAppStats(appData);
  