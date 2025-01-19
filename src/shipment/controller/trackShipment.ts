import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

async function trackShipment(req: Request, res: Response) {
    const { no } = req.body;
    const prisma = new PrismaClient();

    const shipment = await prisma.shipment.findFirst({
        where: { no: no }
    });

    if (shipment === null) {
        await prisma.$disconnect();
        res.status(404).send("Shipment not found");
    } else {
        await prisma.$disconnect();
        res.status(200).json({ shipmentStatus: shipment.status });
    }
}

export default trackShipment;