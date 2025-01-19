import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

async function createShipment(req: Request, res: Response) {
    const { no, accessToken, status, shipmentItems } = req.body;
    const prisma = new PrismaClient();

    // Check authorized user
    const user = await prisma.user.findFirst({
        where: { access_token: accessToken }
    });
    
    if (user === null) {
        await prisma.$disconnect();
        res.status(401).send("Not authorized");
    } else {
        // Create shipment
        const shipment = await prisma.shipment.create({
            data: {
                no: no,
                userId: user.id,
                status: status,
            }
        });

        // Insert shipment items
        let parsedShipmentItems = JSON.parse(shipmentItems);
        
        parsedShipmentItems.map(async (item: any) =>
            await prisma.shipmentItem.create({
                data: {
                    shipmentId: shipment.id,
                    itemName: item.itemName,
                    quantity: item.quantity
                }
            })
        );

        await prisma.$disconnect();
        res.status(200).send("Shipment created");
    }
}

export default createShipment;