import { firebaseAuth } from "../config/firebase.js";
import regColl from "../models/user.model.js";

const verifyUser = async (req,res,next) => {
  try {
    const header = req.headers.authorization;
    const token = header.split(" ")[1];
    const decodedToken = await firebaseAuth.verifyIdToken(token);
    const user = await regColl.find({ userId: decodedToken.uid });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (!decodedToken.email_verified) {
      return res.status(403).json({ message: "Email is not verifed",
        code:"RESEND_VERIFY_MAIL  "
       });
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default verifyUser