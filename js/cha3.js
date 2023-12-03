// Function to calculate total average of a subject
function calculateSubjectAverage(studentsData, subject) {
    const totalMarks = studentsData.reduce((sum, student) => sum + student[subject], 0);
    const average = totalMarks / studentsData.length;
    console.log(`Total Average of ${subject}:`, average.toFixed(2));
  }
  
  // Example usage
  const studentsData = [
    { name: "Rahul", rollNo: 201, chemistry: 88, maths: 78, commerce: 92, physicalEducation: 90, moralScience: 85, totalMarks: 433, avgMarks: 86.6 },
  { name: "Priya", rollNo: 202, chemistry: 75, maths: 90, commerce: 85, physicalEducation: 94, moralScience: 88, totalMarks: 432, avgMarks: 86.4 },
  { name: "Amit", rollNo: 203, chemistry: 82, maths: 95, commerce: 88, physicalEducation: 92, moralScience: 90, totalMarks: 447, avgMarks: 89.4 },
  { name: "Neha", rollNo: 204, chemistry: 95, maths: 96, commerce: 94, physicalEducation: 99, moralScience: 99, totalMarks: 483, avgMarks: 96.6 },
  { name: "Anita", rollNo: 205, chemistry: 85, maths: 92, commerce: 89, physicalEducation: 91, moralScience: 86, totalMarks: 443, avgMarks: 88.6 }
];

  
  calculateSubjectAverage(studentsData, "chemistry");
  calculateSubjectAverage(studentsData, "maths");
  calculateSubjectAverage(studentsData, "commerce");
  