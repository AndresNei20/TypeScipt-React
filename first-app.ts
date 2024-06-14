//* String, Number, Boolean type
let userName:string = "Andres"

//userName = 33
userName = "Pao"

let userAge = 19;

let isValid = true;

let userID: string | number = "abc1"
userID = 123

// * Object type
/* let user: object;  */
let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

//user = "Andres"

user = {
    name:"Andres",
    age:19,
    isAdmin: true,
    id: "abc",
}

//* Array type

let hobbies: string[]/* Array<string> */; // number[], boolean[]

hobbies = ['Gym', 'coding', 'cooking']