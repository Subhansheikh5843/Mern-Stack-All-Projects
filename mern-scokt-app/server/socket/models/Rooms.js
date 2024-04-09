import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name:{
    type:String
  },
  roomId:{
    type:String
  }
});

export default mongoose.model("Room", roomSchema);
