## Create a course selling website

### Description
You need to implement a course selling app. Make sure you setup your own mongodb instance before starting. 
It needs to support two types of users - 
1. Admins
2. Users

Admins are allowed to sign up, create courses.
Users are allowed to sign up, view courses, purchase courses.
This in the real world would translate to an app like udemy.

This one doesn't use authentication the right way. We will learn how to do that in the next assignment. 
For this one, in every authenticated requests, you need to send the username and password in the headers (and not the jwt).
This is the reason why this assignment doesn't have a sign in route.

You need to use mongodb to store all the data persistently.

## Routes
### Admin Routes:



### User routes

- GET /users/purchasedCourses
  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }