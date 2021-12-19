import express from "express";
import mongoose from "mongoose"
import registerModel from "../models/registerModel.js";
import emailCheck from "email-check";

export const saveUser = async (req, res)=> {
    const { body: data } = req;
    let newUser = await registerModel.create(data)
    res.status(200).send("You are registered")
    

}
    
