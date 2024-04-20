// CREATING STUDENT CLASS
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("Hello, my name is: " + this.name + " my age is: " + this.age + " and my area of expertise is: " + this.areaOfExpertise)
    }
}

console.log("======= Student Registration =======");
let students = [];
let continueLoop = true;
let studentIndex = 0;

while (continueLoop) {
    let name = prompt('Enter the student name');
    let age = parseInt(prompt('Enter the student age'));
    // Creating an object based on what is entered
    let student = new Student(name, age);

    let areaOfExpertise = prompt('Enter the student area of expertise');
    student.areaOfExpertise = areaOfExpertise;

    students[studentIndex] = student;
    let wishToContinue = prompt('Enter 1 if you wish to register a new student');
    if (wishToContinue != "1") {
        continueLoop = false;
    }
    else {
        studentIndex++
    }
}
