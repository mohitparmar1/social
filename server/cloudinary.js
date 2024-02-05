const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const dotenv = require("dotenv");
const { log } = require("console");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECRET,
});

const UploadOnCloudinary = async (localfilePath) => {
  try {
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localfilePath);

    console.log("file had been uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localfilePath); // delete the file from the server if it is not uploaded on cloudinary
    console.log("error while uploading on cloudinary", error);
  }
};

module.exports = UploadOnCloudinary;
