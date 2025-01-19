import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

async function updateShipmentStatus(req: Request, res: Response) {
    const { accessToken, no } = req.body;
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
        where: { access_token: accessToken }
    });
    
    if (user === null) {
        await prisma.$disconnect();
        res.status(401).send("Not authorized");
    } else {
        // Update shipment status
        const shipment = await prisma.shipment.findFirst({
            where: { no: no }
        });

        if (shipment === null) {
            await prisma.$disconnect();
            res.status(404).send("Shipment not found");
        } else {
            await prisma.shipment.update({
                where: { id: shipment.id },
                data: { status: "Delivered" }
            });

            await prisma.$disconnect();
            res.status(200).send("Shipment status updated");
        }
    }
}

export default updateShipmentStatus;