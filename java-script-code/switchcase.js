let day="wed";
switch(day){
    case "mon":
        console.log("7am");
        break;
    case "tue":
        console.log("8am");
        break;
    case "wed":
        console.log("5am");
    case "thu":
    case "fri":
        console.log("8am");
        break;
    case "sat":
        console.log("9am");
        break;
    default:
        console.log("sleep");
}
console.log("hello good morning");