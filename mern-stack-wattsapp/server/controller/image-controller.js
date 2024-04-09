// import {GridFsStorage} from 'multer-gridfs-storage';
import grid from 'gridfs-stream';
import mongoose from 'mongoose';
const url = "http://localhost:8000";
import dotenv from "dotenv";

dotenv.config();
// let gfs, gridfsBucket;
// const conn = mongoose.connection;
// conn.once("open", () => {
//   gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
//     bucketName: "fs",
//   });
//   gfs = grid(conn.db, mongoose.mongo);
//   gfs.connection("fs");
// });

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const uploadFile = async (request, response) => {
  if (!request.file) {
    return request.status(404).json("File not found");
  }
  const imageUrl = `${url}/file/${request.file.filename}`;
  response.status(200).json(imageUrl);
};

// export const getImage = async (req, res) => {
//   try {
//     const file = await gfs.files.findOne({ filename: req.params.filename });

//     const readStream = gridfsBucket.openDownloadStream(file._id);
//     // const readStream = gfs.createReadStream(file.filename);
//     readStream.pipe(res);
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };


export const getImage = async (request, response) => {
  try {   
      const file = await gfs.files.findOne({ filename: request.params.filename });
      // const readStream = gfs.createReadStream(file.filename);
      // readStream.pipe(response);
      const readStream = gridfsBucket.openDownloadStream(file._id);
      readStream.pipe(response);
  } catch (error) {
      response.status(500).json({ msg: error.message });
  }
}