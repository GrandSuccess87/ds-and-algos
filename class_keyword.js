class Student {
    //constructor is a special method used to instantiate/represent new Student instances
    constructor(firstName, lastName, year){
        //whenever a new Student is created, assign these three properties to the individual object
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
} //lines 1 - 9 is the blueprint for creating a new object.  It contains the predefined properties and a predefined method

//use the new keyword to instantiate objects from a class
//then pass in the properties
//storing the new instance in a variable helps to organize the code

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
//two new objects are now created based off the blueprint of the class
//Output will be something like this 
//firstName: "Colt"
// grade: 3 (notice it doesn't say "year".  That's because "year" along with the other two properties are placeholders)
// lastName: "Steele"

