// getName =()=>{
//     console.log("hiii guys");
// }
// getName();
// console.log(getName);

let firstName = "allan";
console.log(firstName);

let concatenateName = (firstName, lastName) => {
    return firstName + " " + lastName;
}
console.log(concatenateName("Allan", "Brown"));

let concatenateNameV2 = (firstName, lastName) =>  firstName + " " + lastName;
console.log(concatenateNameV2("Colin", "Dale"));

function getAgeV1(dob) {
    let today = new Date();
    let dateString = today + " ";
    let year = dateString.slice(11, 15);
    return year - dob;
}
let getAge = (dob) => {
    let today = new Date();
    let dateString = today + " ";
    let year = dateString.slice(11, 15);
    return year - dob;
}
console.log(getAge("2022"));
console.log(getAgeV1("2012"));
console.log(getAge("2005"));



