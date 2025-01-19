import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

async function userProfile(req: Request, res: Response) {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    }
    
    const { accessToken } = req.body;
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
        where: { access_token: accessToken }
    });

    if (user !== null) {
        await prisma.$disconnect();
        res.status(200).json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    } else {
        await prisma.$disconnect();
        res.status(422).send({ message: "Wrong password" });
    }
}

export default userProfile;