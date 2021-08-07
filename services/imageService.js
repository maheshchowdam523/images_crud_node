const Image = require("../models/image");
const uploadImages = async (files, payload) => {
  const data = files.map((file, i) => {
    return {
      description: payload.description[i],
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: file?.location,
      image: file?.originalname,
      contentType: file?.contentType,
    };
  });
  return await Image.insertMany(data);
};

const getImages = async () => Image.find().sort({ updatedAt: -1 });
module.exports = { uploadImages, getImages };
