## JavaScript' 
JavaScript is a programming language used for creating dynamic content on websites. 
- It is a lightweight(uses less memory and simple syntax ), cross-platform(runs on multiple platforms ) and single-threaded(runs on single core ) programming language.


# "'Synchronous JavaScript'"
In synchronous programming, operations are performed one after the other, in sequence. 
So, basically each line of code waits for the previous one to finish before proceeding to the next. 
This means that the program executes in a predictable, linear order, with each task being completed before the next one starts.

# "Asynchronous JavaScript"'
Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. 
In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. 
This non-blocking nature helps improve performance and responsiveness, especially in web applications.

# "Promises in JS :"
A Promise is a proxy for a value not necessarily known when the promise is created. 
It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
- This lets asynchronous methods return values like synchronous methods: 
instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
- Promise is in one of these states:
'pending': initial state, neither fulfilled nor rejected.
'fulfilled': meaning that the operation was completed successfully.
'rejected': meaning that the operation failed.

# A promise is said to be settled if it is either fulfilled or rejected, but not pending.

.then (on rejection).catch(onrejection)  ---|
^                                           |
|                                           | 
|                                           |
Promise  ----> .then(on fullfillment)--------> return promise
(pending)  

# calls async function to return promise syncronously, which returns promise immediately and then data 


"The setInterval() method,"
 offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
 'syntax' : setInterval(func, delay(milliseconds), arg1, arg2, /* …, */ argN)


# filter 
let newArray = array.filter(callback(element, index, array));
- callback: A function that is called for each element.
- element: The current element being processed.
- index (optional): The index of the current element.
- array (optional): The original array on which filter() is applied.
- Returns: A new array with elements that pass the test.

# map 
 {peopledata.map((person, index) => {return <b>{person.city} })</b>}
 {peopledata.map((person , index)=> <b>{person.city}</b>)}


# == & ===
== (Equality / Loose Equality)
- Compares values for equality `after type coercion` (conversion of types if needed).
- If the two values are of different types, JavaScript will attempt to convert one or both to the same type before comparison.

=== (Strict Equality)
Compares both value and type.
No type coercion takes place. If the types differ, it returns false immediately.

# API
“What is an API?” API is the acronym for application programming interface — a software intermediary that allows two applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations.
