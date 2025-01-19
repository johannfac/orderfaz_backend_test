import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

async function adminLogin(req: Request, res: Response) {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    }
    
    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");

    const { username, password } = req.body;
    const prisma = new PrismaClient();
    
    const user = await prisma.admin.findFirst({
        where: {
            username: username
        }
    })
    
    if (user === null) {
        await prisma.$disconnect();
        res.status(404).json({ message: "User not found" });
    } else {
        const isAuthenticated = bcrypt.compareSync(password, user.password);

        if (isAuthenticated) {
            const access_token = jwt.sign(
                { username: username },
                "secret",
                { expiresIn: "1d" }
            );
            await prisma.admin.update({
                where: { id: user.id },
                data: { access_token: access_token }
            })
            await prisma.$disconnect();
            res.status(200).json({ access_token: access_token });
        } else {
            await prisma.$disconnect();
            res.status(422).send({ message: "Wrong password" });
        }
    }
}

export default adminLogin;