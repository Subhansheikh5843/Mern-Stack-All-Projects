import mongoose from "mongoose";

const connection = async()=>{
  try {
   await mongoose.connect(process.env.URL)
   console.log(`MOngodb connected Sucesfully` .cyan)
  } catch (error) {
    console.log('Error while connecting to database',error.message)
  }
}

export default connection