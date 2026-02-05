import { Request, Response } from "express";
import { register } from "../services/user.services";


export const registerUser = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const user = await register(email, password);
        res.status(201).json(user);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Registration failed';
        res.status(400).json({ error: message });
    }
}