import conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const recieverId = req.body.recevierId;
    const exist = await conversation.findOne({
      members: { $all: [recieverId, senderId] },
    });
    if (exist) {
      return res.status(200).json("conversation already exist");
    }

    const newConversation = new conversation({
      members: [senderId, recieverId],
    });
    await newConversation.save();
    return res.status(200).json("conversation saved successfully");

    
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getConversation = async(req,res)=>{
  try {
    const senderId = req.body.senderId;
    const recieverId = req.body.receiverId;
  let Conversation =  await conversation.findOne({
      members: { $all: [recieverId, senderId] },
    });
    return res.status(200).json(Conversation); 

  } catch (error) {
    return res.status(500).json(error.message); 
  }
}