import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

async function getShipments(req: Request, res: Response) {
    const { accessToken } = req.body;
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
        where: { access_token: accessToken }
    })

    if (user === null) {
        await prisma.$disconnect();
        res.status(404).send("User not found");
    } else {
        const shipments = await prisma.shipment.findMany({
            where: { userId: user.id }
        });

        if (shipments === null) {
            await prisma.$disconnect();
            res.status(404).send("Shipment not found");
        } else {
            await prisma.$disconnect();
            res.status(200).json(shipments);
        }
    }
}

export default getShipments;