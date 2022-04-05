const name = 'iqbal'

function findLocation(){
  return 'dhaka';
}

const grade = 3.5;

const address = {
  'flat_no': '7A',
  'holding_no': '63/3',
  'road_no': '10',
  'ward': '10',
  'area': 'Kamalapur',
  'city': 'Dhaka'
}

const studentInformation = {
  'name': 'rahim iqbal',
  'age': 26,
  bloodGroup: 'B+',
  passed: true,
  currentLocation: findLocation(),
  grade,
  'current address': 'dhaka',
  'address': {
    'flat_no': '7A',
    'holding_no': '63/3',
    'road_no': '10',
    'ward': '10',
    'area': 'Kamalapur',
    'city': {
      'city_code': 2201,
      'city_name': 'Dhaka'
    }
  }
};

const car = new Object();
const car2 = {};


const ageQuery = studentInformation[Object.keys(studentInformation)[0]];
const ageQuery2 = studentInformation.age;
const ageQuery3 = studentInformation['current address'];

// console.log(studentInformation['current address'])
// console.log(studentInformation.age);
// console.log(ageQuery)


const studentInformationBackup = studentInformation;


studentInformation.email = 'a@a.com';

// console.log(studentInformation);

// console.log(studentInformationBackup);

//console.log(studentInformation == studentInformationBackup);

const objA = {
  id: 1
}

const objB = {
  id: 2
}

// console.log(objA == objB);


const studentInformationBackup2 = Object.assign({country: 'bd'}, studentInformation);


console.log(studentInformation)
console.log(studentInformationBackup2)



//OR

//const output = statement1 || statement2;

//output = !statement

//--STRING--//

const text = "Hello there, I'm Iqbal"
const text1 = 'Hello there, I am Iqbal'
const text2 = '';
const text3 = text;

const price = 10;
const priceStatement = `Price of 
this 
product 
is ${price} 
taka
`

console.log(priceStatement[0]);

//--Boolean--//
let status = true;
status = false;

//--comparison--//

// greater than - >
// less than - <
// greater than or equal - >=
// less than or equal - <=
const number1 = 100;
const number2 = 100;
console.log(number1 > number2);

//--equality--//

//equal to - ==    //check only value
//deep equal to - ===   //check value with type
//not equal to - !=
//deep not equal to - !==

const value1 = 105;
const value2 = '105';

console.log('Equity operation test: '+ (value1 === value2));



//--Undefined/Null--//

let myvariable1 = null;

console.log(myvariable1)


//--Functions--//

//Function declaration

const addition = function summation(param1, param2, param3) {
  const sum = param1 + param2 + param3;
  return sum;
}

//function invocation
const result = addition('5', 5, 5);
console.log(result);

console.log(typeof result);

//unnamed function invocation
(
  function (){
    console.log(5);
  } 
)();

const immediateInvocation = function (){
  console.log(5);
}

immediateInvocation();

//--Conditional Statements--//
const a = 5;
const b = 6;

if (a>b){
  console.log('a is bigger');
}
else if(a==b){
  console.log('a is equal to b');
}
else {
  console.log('b is bigger');
}


const weather = function(temperature){
  console.log("The temperature outside is", temperature, "degrees farenheight.");
  
  if(temperature <= 65) {
    console.log("It's getting cold outside. Better wear a jacket!");
  } else {
    console.log("It's pleasant outside!");  
  }
}

// weather(70);


// const a1 = 3;
// const answer1 = checkEvenOdd(a1);

// const a2 = 5;
// const answer2 = checkEvenOdd(a2);

// const a3 = 7;
// const answer3 = checkEvenOdd(a3);

// const a4 = 9;
// const answer4 = checkEvenOdd(a4);

// function checkEvenOdd(X)

//--LOOP--//
//For Loop

for(let i=3; i<10; i= i + 2)
{
  if(i % 2 == 0) {
    console.log('Even');
  } 
  else {
    console.log('Odd');
  }

  for(let x; x!=10; x++){
    
  }
}


const i =3;
while(i<10){

  if(i % 2 == 0) {
    console.log('Even');
  } 
  else {
    console.log('Odd');
  }

  i= i + 2;
}


//--Array--//

// const student1 = 'aa';
// const student2 = 'bb';
// const student3 = 'cc';
// const student4 = 'dd';
// const student5 = 'ee';

const student = ['aa', 'bb', 'cc', 'dd', 'ee'];

student[4] ='aaaa';
console.log(student);
