const Images = require("../models/image");
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
  return await Images.insertMany(data);
};

const getImages = async ({
  offset = 0,
  limit = 10,
  sort = { updatedAt: -1 },
  filter,
}) => {
  return await Image.find().limit(parseInt(limit)).skip(parseInt(offset));
};
module.exports = { uploadImages, getImages };
