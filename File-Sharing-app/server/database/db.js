import mongoose from 'mongoose';
import colors from 'colors';

const DBConnection = async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`db connected` .cyan)
  } catch (error) {
    console.log('Error while connecting with the database',error.message)
  }
}


export default  DBConnection