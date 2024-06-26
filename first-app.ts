//* String, Number, Boolean type
let userName: string = "Andres";

//userName = 33
userName = "Pao";

let userAge = 19;

let isValid = true;

//custom type
type StringOrNum = string | number;
let userID: StringOrNum = "abc1";
userID = 123;

// * Object type
/* let user: object;  */

//Custom type
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: StringOrNum;
};
let user: User;

//user = "Andres"

user = {
  name: "Andres",
  age: 19,
  isAdmin: true,
  id: "abc",
};

//* Array type

let hobbies: string[] /* Array<string> */; // number[], boolean[]

hobbies = ["Gym", "coding", "cooking"];

// * Functions

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

//Custom type
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

// * Another way to create custom types, interface type is essentially for create object types
interface Credentials {
  email: string;
  password: string;
}

let creds: Credentials;

creds = {
  email: "hi@gmail.com",
  password: "abcd",
};
// * INTERFACE VS CUSTOM TYPE
// ? U can always use custom types but you can usually use Interfaces cause it just for define Objects of Functions Types
class AuthCredentials implements Credentials {
  email: string;
  password: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

// * How to create a MERGE type
type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin | AppUser; // This is the combination of those types (Admin | AppUser)
let admin: AppAdmin;
admin = {
  permissions: ["login"],
  userName: "Andres",
};

// interface way
/* interface AppUser{
    userName: StringOrNum
}

interface AppAdmin extends Admin, AppUser {} */

// * Literal Types

type Role = "admin" | "user" | "editor";

let role: Role; //"admin", "user", "editor"

// * Type Guards or Type Narrowing
function performAction(action: string | number, role: Role) {
  //these are like "Extra Guards"
  if (role === "admin" && typeof action === "string") {
    // ...logic
  }
}

// * Generic Types feature
let roles: Array<Role>; //example of a built in Generic type
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Andres" },
  { age: 19 }
);
