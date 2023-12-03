// Function to calculate and print average team size and total budget
function calculateProjectDetails(projectDetails) {
    // Calculate average team size
    const averageTeamSize = projectDetails.reduce((sum, project) => sum + project.teamSize, 0) / projectDetails.length;
  
    // Calculate total budget
    const totalBudget = projectDetails.reduce((sum, project) => sum + project.budget, 0);
  
    // Print results
    console.log("Average Team Size:", averageTeamSize.toFixed(2));
    console.log("Total Budget of the Quarter:", totalBudget);
  }
  
  // Example usage
  const projectDetails = [
    { projectName: "Project A", teamSize: 8, budget: 120000 },
    { projectName: "Project B", teamSize: 12, budget: 180000 },
    { projectName: "Project C", teamSize: 6, budget: 90000 },
    { projectName: "Project D", teamSize: 10, budget: 150000 },
    { projectName: "Project E", teamSize: 15, budget: 200000 }
  ];
  
  calculateProjectDetails(projectDetails);
  