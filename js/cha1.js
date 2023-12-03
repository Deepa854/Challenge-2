
function calculateTotalMarks(studentsMarks) {
    const studentsWithTotalMarks = studentsMarks.map(student => {
      const totalMarks = student.chemistry + student.maths + student.commerce + student.physicalEducation;
     return { ...student, totalMarks };
    });
    return studentsWithTotalMarks;
  }
  
  function printResults(studentsWithTotalMarks) {
   
    console.log("Final Array of Objects:");
    console.log(studentsWithTotalMarks);
  
   
    const namesAbove445 = studentsWithTotalMarks
      .filter(student => student.totalMarks > 445)
      .map(student => student.name);
  
    console.log("Names of Students with Total Marks Above 445:");
    console.log(namesAbove445);
  }
  
  
  const studentsMarks = [
    { name: "Preethi", rollNo: 301, chemistry: 78, maths: 88, commerce: 90, physicalEducation: 90 },
    { name: "Priya", rollNo: 302, chemistry: 75, maths: 90, commerce: 85, physicalEducation: 94 },
    { name: "Jaya", rollNo: 303, chemistry: 82, maths: 95, commerce: 88, physicalEducation: 92 },
    { name: "Prema", rollNo: 304, chemistry: 85, maths: 96, commerce: 91, physicalEducation: 99 },
    { name: "Shreetama", rollNo: 305, chemistry: 83, maths: 92, commerce: 89, physicalEducation: 91 }
  ];
  
  const studentsWithTotalMarks = calculateTotalMarks(studentsMarks);
  printResults(studentsWithTotalMarks);
  