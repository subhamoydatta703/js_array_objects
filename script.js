let arr =[1,2,3,4,5]
let new_arr=arr.map((num)=>num*num)
let new_arr1=arr.map((num)=>num+num)
let new_arr2=arr.reduce((res, el)=> (res+el))/arr.length
let new_arr3=arr.map((num)=>num+5)
let low_arr=['ok', 'apple', 'mango']
let upp_arr=low_arr.map((ch)=>ch.toUpperCase())
function double_old(old_arr, ...args){
    const new_file = args.map((num)=>num*2)
    return [...old_arr, ...new_file]
}

let person = {
  name: "Subhamoy",
  age: 22,
  isStudent: true,
  hobbies: ["coding", "reading", "gym"],
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};

let car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  features: ["autopilot", "electric", "GPS"],
  start: function() {
    return `${this.brand} ${this.model} is starting...`;
  }
};

function mergeObjects(old, naw){
    const obj={...old, ...naw}
    return obj
}
console.log(mergeObjects(person, car))