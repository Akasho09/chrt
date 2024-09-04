// let currentDate=new Date();
// console.log(currentDate);
//   // Getting various components of the date
//   console.log(currentDate.getYear()); //ACTUAL -1900
//   console.log("Date:", currentDate.getDate());
//   console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
//   console.log("Year:", currentDate.getFullYear());
//   console.log("Hours:", currentDate.getHours());
//   console.log("Minutes:", currentDate.getMinutes());
//   console.log("Seconds:", currentDate.getSeconds());

//   currentDate.setFullYear(2022);
//   console.log("After setFullYear:", currentDate);

//   currentDate.setMonth(5); // Setting month to June (zero-indexed)
//   console.log("After setMonth:", currentDate);

//   // Getting and setting time in milliseconds since 1970
//   console.log("Time in milliseconds since 1970:", currentDate.getTime());

//   const newDate = new Date(2023, 8, 15); // Creating a new date
//   console.log("New Date:", newDate);



  // setInterval(func, delay, arg1, arg2, /* …, */ argN)


//   //JSON methods
//   const users= '{ "name": "akash", "age" : 20 , "place" : "delhi" }' //json string
// console.log(users);
// const user=JSON.parse(users); //parsed json string into JS object
// console.log(user);

// const user2= {
//     name: "akash2",
//     age : 20,
//     gender : "male"
// }
// const user3=JSON.stringify(user2); //vice versa
// console.log(user2);
// console.log(user3);
// console.log(user2.name);//akash2
// console.log(user3.name);//undefined : string not object


// //MATH
// function mathMethods(value) {
//     console.log("Original Value:", value);
  
//     let rounded = Math.round(value);
//     console.log("After round():", rounded);
//     let ceiling = Math.ceil(value); // 
//     console.log("After ceil():", ceiling);
//     let flooring = Math.floor(value);
//     console.log("After floor():", flooring);
  
//     let randomValue = Math.random();
//     console.log("After random():", randomValue);
  
//     let maxValue = Math.max(5, 10, 15);
//     console.log("After max():", maxValue);
//     let minValue = Math.min(5, 10, 15);
//     console.log("After min():", minValue);
  
//     let powerOfTwo = Math.pow(value, 2);
//     console.log("After pow():", powerOfTwo);
  
//     let squareRoot = Math.sqrt(value);
//     console.log("After sqrt():", squareRoot);

//     console.log("\n")
//   }
  
//   // Example Usage for Math Methods
//   mathMethods(4.56);
//   mathMethods(9);
//   mathMethods(25);

  //object methods

  const sampleobject = {
key1: "value1",
key2: "value2",
key3: " value3"
  }

  console.log(Object.keys(sampleobject));
  console.log(Object.values(sampleobject));
  console.log(Object.entries(sampleobject));
  console.log(sampleobject.hasOwnProperty("key1"));
  Object.assign({},sampleobject , {key4 : "value4"});
  let newObj = Object.assign({}, sampleobject, { key5: "value5" });
  console.log(sampleobject);
  console.log(newObj);