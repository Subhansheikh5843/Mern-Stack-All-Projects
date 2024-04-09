import multer from 'multer'
import mongoose, { mongo } from 'mongoose';
import crypto from 'crypto'
import dotenv from 'dotenv'
import {GridFsStorage} from 'multer-gridfs-storage';
import path from 'path';

dotenv.config()


// const storage = new GridFsStorage({
//   url: " mongodb://subhansheikh71:subhansheikh71@ac-enff4rm-shard-00-00.lb8ztek.mongodb.net:27017,ac-enff4rm-shard-00-01.lb8ztek.mongodb.net:27017,ac-enff4rm-shard-00-02.lb8ztek.mongodb.net:27017/?ssl=true&replicaSet=atlas-phsrjx-shard-0&authSource=admin&retryWrites=true&w=majority",
//   options:{useNewUrlParser:true},
//   file:(request,file)=>{
//     const match = ["image/png", "image/jpg"];
//     if (match.indexOf(file.mimeType) === -1) 
//       return `${Date.now()}-blog-${file.originalname}`;
    
//     return{
//       bucketName:"photos",
//       filename: `${Date.now()}-blog-${file.originalname}`
//     }
//   }
// })
// export default multer({storage})



const mongoURI = process.env.URL;

const promise = mongoose.connect(mongoURI, { useNewUrlParser: true });
const storage = new GridFsStorage({
  db: promise,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = `${Date.now()}-file-${file.originalname}`
        const fileInfo = {
          filename: filename,
          bucketName: 'fs'
        };
        resolve(fileInfo);
      });
    });
  }
});

export default multer({ storage });

