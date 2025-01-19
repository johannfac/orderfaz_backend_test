import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";

async function userRegister(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    }

    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    const { username, password, firstName, lastName, email } = req.body;
    const prisma = new PrismaClient();

    // Hash password
    const hashed_password = await bcrypt.hash(password, saltRounds);

    await prisma.user.create({
        data: {
            username: username,
            password: hashed_password,
            firstName: firstName,
            lastName: lastName,
            email: email
        }
    });
    await prisma.$disconnect();

    res.status(200).send("User registered");
}

export default userRegister;