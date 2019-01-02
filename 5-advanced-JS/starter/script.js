// Function constructor
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}
  Person.prototype.calculateAge =
  function(){
    console.log(2018 - this.yearOfBirth);
  };

Person.prototype.lastName = 'Smith';

var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/




// Object.Create
/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane'},
  yearOfBirth: { value: 1969 },
  job: { value: 'designer'}
});
*/



// Primitives vs Objects

/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);



// Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/


/*


//Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}



var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);





//////////////////////////////
//Lecture: Functions returning Functions
function interviewQuestion(job){
  if (job === 'designer'){
    return function(name) {
      alert(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher'){
    return function(name) {
      alert('What subject do you teach, '+ name +'?');
    }
  } else {
    return function (name) {
      console.log('Hello ' + name +', what do you do?');
    }
  }
}
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
*/



//////////////////////////
//Lecture: Closures
/*
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    alert((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);



retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

console.dir(retirement);


/*

function interviewQuestion(job){
  if (job === 'designer'){
    return function(name) {
      alert(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher'){
    return function(name) {
      alert('What subject do you teach, '+ name +'?');
    }
  } else {
    return function (name) {
      console.log('Hello ' + name +', what do you do?');
    }
  }
}
*/
function interviewQuestion(job){

  return function (name){
    if (job === 'designer'){
      alert(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher'){
      alert('What subject do you teach, '+ name +'?');
    } else {
      alert('Hello ' + name +', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('garderner');

//teacherQuestion('John');
//designerQuestion('John');
designerQuestion('garderner');
