const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://akash:sJazfPDF1ZOHB6C2@cluster0.ku3wj.mongodb.net/Course');

const adminschema =  new mongoose.Schema({
    username : String,
    password : String
})

 const userschema = new mongoose.Schema ({
    username : String ,
    password : String ,
    // array of purchased courses refrencing to course collection
    purchasedcourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})

const CourseSchema= new mongoose.Schema( {
     coursename : String,
     description : String,
     price : Number,
     imglink : String
})

const admin = mongoose.model('Admin', adminschema);
const user = mongoose.model('User', userschema);
const courses = mongoose.model('Course', CourseSchema);

module.exports = {
    admin,
    user,
    courses
}