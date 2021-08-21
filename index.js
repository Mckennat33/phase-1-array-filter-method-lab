// Code your solution here

// write a function that takes an array and a name in that array and returns all the
// names that match the argument passed through. 


  function findMatching(array, name) {
    const newDrivers = array.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return newDrivers;

}

function fuzzyMatch(drivers, str) {
    return drivers.filter(name => name.indexOf() === str.toLowerCase())
  }




// findMatching(drivers, "Bobby")





// function findMatching(driver){
//     return ["driver"] === 
// }
// 
// findMatching();
// 
// function filter(collection) {
//     for (const user of collection){
//         if(findMatching(driver))
//     }
// }
// 
// drivers.filter(function(name, ){
// 
// })