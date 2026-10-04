import express from "express";
import regColl from "../models/user.model.js";
import { firebaseAuth } from "../config/firebase.js";
export const register = async (req, res) => {
  try {
    console.log("hit");

    const header = req.headers.authorization;
    console.log(header);
    
    const token = header.split(" ")[1];
    const decodedToken = await firebaseAuth.verifyIdToken(token);

    await regColl.create({
      email: decodedToken.email,
      userId: decodedToken.uid,
    });
    res.status(201).json({ message: "User Created" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
