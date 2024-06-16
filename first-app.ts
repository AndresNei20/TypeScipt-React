//* String, Number, Boolean type
let userName:string = "Andres"

//userName = 33
userName = "Pao"

let userAge = 19;

let isValid = true;

//custom type
type StringOrNum = string | number
let userID: StringOrNum = "abc1"
userID = 123

// * Object type
/* let user: object;  */

//Custom type
type User = {
    name: string;
    age: number;
    isAdmin:boolean;
    id: StringOrNum
}
let user: User

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

// * Functions

function add(a: number, b:number) {
    const result = a + b;
    return result;
}

//Custom type
type AddFn = (a: number, b: number) => number

function calculate(
    a: number, 
    b: number, 
    calcFn: AddFn
){
    calcFn(a, b)
}

calculate(2, 5, add)

// * Another way to create custom types, interface type is essentially for create object types
interface Credentials {
    email: string;
    password: string;
}

let creds: Credentials

creds = {
    email: "hi@gmail.com",
    password: "abcd"
}
// * INTERFACE VS CUSTOM TYPE
