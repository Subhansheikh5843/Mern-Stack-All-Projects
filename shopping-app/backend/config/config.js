const mongoose = require('mongoose')
const colors = require("colors");


const connectDb = async()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongodb connected ${conn.connection.host}` .yellow)
  } catch (error) {
    console.error(`Error : ${error.message}` .red)
    process.exit(1)
  }
}

module.exports = connectDb