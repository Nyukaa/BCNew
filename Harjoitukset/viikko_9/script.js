/* Tehtävä 15: Debuggaa sisäkkäisten olioiden käsittely  
Pitäisi palauttaa taulukko opiskelijoista, joiden pistemäärä on yli 80.  
*/

const students = [
  { name: "Marlyn", score: 90 },
  { name: "Kathleen", score: 75 },
  { name: "Ruth", score: 85 },
];

function getTopStudents(studentList) {
  return studentList.map((student) => {
    if (student.score > 80) {
      return student.name;
    }
  });
}

// Debuggaus ja testaus
console.log(getTopStudents(students)); // Odotettu: ["Marlyn", "Ruth"]
