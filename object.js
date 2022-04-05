const arr = [1, 'here', true, {id: 1}, undefined, null];

// const tasnimInfo = { 
//   name: "Tasnim", 
//   age: 22, 
//   grades: [90, 88, 95]
// }

let students = [
  { 
    name: "Tasnim", 
    age: 10, 
    grades: [90, 88, 95]
  }, 
  {
    name: "Asif", 
    age: 22, 
    grades: [80, 100, 90, 49]
  },
  {
    name: "sifat", 
    age: 22, 
    grades: [80, 100, 100, 96]
  },
  {
    name: "Mustahid", 
    age: 22, 
    grades: [80, 60, 90, 96]
  }
];

// find average age of students
const getAverageStudentAge = function (student){
  let totalAge = 0;
  const totalStudent = student.length;  

  for(let i=0; i<totalStudent; i++){
    const age = student[i].age;
    totalAge = totalAge + age;
  }

  const averageStudentAge = totalAge/totalStudent;

  return averageStudentAge;
}

const averageStudentAge = getAverageStudentAge(students);
console.log(averageStudentAge);

// 2. Find an array of grade average.

const getIndividualStudentAverageGrade = function (student){
  const IndividualStudentAverageGrade = [];
  const totalStudent = student.length;

  for(let i=0; i<totalStudent; i++){
    const grades = student[i].grades;
    // console.log(student[i]);
    // console.log(grades);

    const gradesLength = grades.length;
    // console.log(gradesLength);

    let totalGrade = 0;
    for(let j=0; j<gradesLength; j++){
      totalGrade = totalGrade + grades[j];
    }

    const averageGrade = totalGrade/gradesLength;
    // console.log(totalGrade);
    // console.log(averageGrade);

    IndividualStudentAverageGrade.push(averageGrade);
    
    // console.log('------')
  }

  return IndividualStudentAverageGrade;

  //console.log(IndividualStudentAverageGrade);
}

const individualStudentAverageGradeArray = getIndividualStudentAverageGrade(students);
console.log(individualStudentAverageGradeArray);




// var student = {
//   name: "Mary", 
//   age: 10, 
//   grades: {
//     quiz1: 90, 
//     quiz2: 88, 
//     quiz3: 95
//   }
// }

// for(i in student){
//   console.log(student[i]);
// }



// const arr = [1, 2, 3, 5];
//console.log(Object.keys(student).length);

// for(let i=0; i<student.length; i++){
//   console.log(arr[i]);
// }
