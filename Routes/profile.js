import express from "express";
import updateProfile from "../Controllers/Profile/updateProfile.js";
import getProfileDetails from "../Controllers/Profile/getProfileDetails.js";
import deleteProfile from "../Controllers/Profile/deleteProfile.js";
import auth from "../Middlewares/auth.js";
// import {upload} from "../config/multerSetup.js";

import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ 
    storage, 
})

const router = express.Router();

router.post(
    "/update-profile",
    upload.fields([
      {
        name: "profilePicture",
        maxCount: 1,
      },
    ]),
    auth,
    updateProfile
  );

router.get("/get-profile-details", auth, getProfileDetails);
router.delete("/delete-profile", auth, deleteProfile);

export default router;