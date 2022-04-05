// const student1 = {
//   'name': 'iqbal',
//   'age': 10
// };

// const student2 = {
//   'name': 'jerry',
//   'age': 12
// };

const createStudent = function(name, age){
  const student = {
    'name': name,
    'age': age,
    'birthYear': function(){
      // const ageInMillis = this.age * 365 * 24 * 60 * 60; 
      // const dateOfBirth = new Date(new Date().getTime() - ageInMillis);
      return 2022 - this.age;
    }    
  }
  return student;
}

const student1 = createStudent('iqbal', 25);
const student2 = createStudent('jerry', 24);
console.log(student1);
console.log(student2);

student1.age = student1.age + 1;

// const getBirthYearFromAge = function(ageInYears){
//   const ageInMillis = ageInYears * 365 * 24 * 60 * 60; 
//   const dateOfBirth = new Date(new Date().getTime() - ageInMillis);
//   return dateOfBirth;
// }

const student1BirthYear = student1.birthYear();
console.log(student1BirthYear);
