import mongoose from "mongoose"


const dbConnection=async ()=>{
    const MONGODB_URI=`mongodb+srv://ritika:pragya@file-sharing.nghwxgd.mongodb.net/?retryWrites=true&w=majority`
    try {
       await  mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
       console.log("Database Connected")
    } catch (error) {
        console.error("Error while connecting database ",error.message)
    }
}

export default dbConnection