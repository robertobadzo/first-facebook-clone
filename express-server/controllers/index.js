import express from "express";
import mongoose from "mongoose"
import registerModel from "../models/registerModel.js";

export const saveUser = async (req, res) => {
    const { body: data } = req;
    let newUser = await registerModel.create(data)
    res.status(200).send("You are registered")


}
export const loginUser = async (req, res) => {
    const { body: data } = req;
    const { email, password } = data;
    let checkUser = await registerModel.findOne({ email, password })
    const msg = 'success'
    if (checkUser) {
        res.status(200).json(msg)
        console.log("logged in  ")
    }
    else {
        console.log(" not logged in  ")
        res.status(202).send("Wrong email or password")
    }
}
