import express from "express";
import mongoose from "mongoose"
import registerModel from "../models/registerModel.js";

export const getAllUsers = async (req, res) => {
    
    const userr = await registerModel.find({})
    res.send(userr)
}
export const saveUser = async (req, res)=> {
    const { body: userData } = req;
    let newUser = await registerModel.create(userData)
    res.status(200).send(newUser)
    
    
}

