import express from "express";
import regColl from "../models/user.model.js";
import { firebaseAuth } from "../config/firebase.js";
export const register = async (req, res) => {
  try {
    console.log("hit");

    const header = req.headers.authorization;
    console.log(header);

    const token = header?.split(" ")[1];
    const decodedToken = await firebaseAuth.verifyIdToken(token);
    const checkUser = await regColl.find({ email: decodedToken?.email });
    if (checkUser.length > 0) {
      return res.status(409).json({ message: "Email already exist" });
    }
    await regColl.create({
      email: decodedToken.email,
      userId: decodedToken.uid,
    });
    res
      .status(201)
      .json({
        message:
          "Registration Successfull. Verification email sent to your mail",
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const providerLogin = async (req, res) => {
  try {
    const header = req.headers.authorization;

    const token = header.split(" ")[1];
    const decodedToken = await firebaseAuth.verifyIdToken(token);

    const user = await regColl.find({ userId: decodedToken.uid });
    console.log(user);

    if (!user || user.length == 0) {
      await regColl.create({
        email: decodedToken.email,
        userId: decodedToken.uid,
        name: decodedToken.name,
      });
      return res
        .status(200)
        .json({ message: " New user created", isAuthenticated: true });
    }
    res
      .status(200)
      .json({ message: "Login successfull", isAuthenticated: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const header = req.headers.authorization;

    const token = header.split(" ")[1];
    const decodedtoken = await firebaseAuth.verifyIdToken(token);
    console.log(decodedtoken);

    const user = await regColl.find({ userId: decodedtoken.uid });
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    res
      .status(200)
      .json({ message: "Login successfull", isAuthenticated: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
